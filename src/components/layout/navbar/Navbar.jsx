import { Link, useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import logo from '../../../assets/LogoC.png';
import { useEffect, useRef, useState, useCallback } from "react";
import Instagram from "../../common/icons/instagram";
import Whatsapp from "../../common/icons/Whatsapp";
import { services } from "../../../lists/services";

const Navbar = () => {
  const ulRef = useRef(null);
  const loc = useLocation().pathname

  const [navOpen, setNavOpen] = useState(false);// Estado de apertura de nav
  const [subMenuOpen, setSubMenuOpen] = useState(false);// Estado de apertura de subMenu
  const [menuWidgetOpen, setMenuWidgetOpen] = useState(false);//Estado de cambio del icono del Nav
  const [ddmHeight, setDdmHeight] = useState(0);//ALtura del subMenu
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);// Estado de resolucion

  const deployNav = ()=>{//Apertura y cierre del nav
    setNavOpen(!navOpen)
    subMenuOpen && deploySubMenu();
    menuWidgetOpen && setMenuWidgetOpen(!menuWidgetOpen);
  }
  
  const deploySubMenu = ()=>{ //Apertura y cierre del subMenu
    let subMenu = ulRef.current;
    subMenu.style.height = subMenuOpen ? '0' : ddmHeight;
    setSubMenuOpen(!subMenuOpen)
  }

  const handleWidget = ()=>{ //Cambio de aspecto del icono del Nav
    setMenuWidgetOpen(!menuWidgetOpen);
    deployNav()
  }

  useEffect( ()=>{ //Calcula la altura del subMenu
    let subMenu = ulRef.current;
    subMenu.style.height = 'auto';
    let height = subMenu.scrollHeight + 'px';
    setDdmHeight(height);
    subMenu.style.height = '0';
    subMenu.style.visibility = 'visible';

    function handleResize() {
      setIsMobile(window.innerWidth <= 768);
    }

    window.addEventListener('resize', handleResize);

    // Limpia el evento al desmontar el componente
    return () => {
        window.removeEventListener('resize', handleResize);
    };
  }, [])

  return (
    <header className="shadow">
      <div className="logo-container">
        <HashLink to={'/#start'} className='logo-link'>
          <img src={logo} alt="kyberweb logo" />
        </HashLink>
      </div>
      <nav className={navOpen ? 'navOpen' : ''}>
        <ul className="nav-menu">
          <li className="nav-item"><HashLink to={'/#start'} className={loc === '/' ? "nav-link active" : "nav-link"} onClick={deployNav}>Home</HashLink></li>
          <li className="nav-item drop-item">
            <Link to='#' className={loc.startsWith('/serviceDetail/') ? "nav-link drop-link active" : "nav-link drop-link"} onClick={deploySubMenu}>Services</Link>
            <ul className='sub-menu' ref={ulRef}>
              {
                services.map( serv => {
                  return <li key={serv.id} className="nav-item"><HashLink to={`/serviceDetail/${serv.id}#start`} className="nav-link" onClick={deployNav}>{serv.name}</HashLink></li>
                })
              }
            </ul>
          </li>
          <li className="nav-item"><HashLink to={'/portfolio#start'} className={loc === '/portfolio' ? "nav-link active" : "nav-link"} onClick={deployNav}>Portfolio</HashLink></li>
          <li className="nav-item"><HashLink to={'/contact/0#start'} className={loc.startsWith('/contact/') ? "nav-link active" : "nav-link"} onClick={deployNav}>Contact</HashLink></li>
        </ul>
        {
          isMobile && (
            <div className="media-container">
              <Whatsapp style={{width: '2.8rem'}} />
              <Instagram style={{width: '3rem', marginLeft: '2rem'}}/>
            </div>
          )
        }
      </nav>
      <div className="menu-icon" onClick={handleWidget}>
        <span className={menuWidgetOpen ? "line line1 activeLine1" : "line line1"}></span>
        <span className={menuWidgetOpen ? "line line2 activeLine2" : "line line2"}></span>
        <span className={menuWidgetOpen ? "line line3 activeLine3" : "line line3"}></span>
      </div>
    </header>
  )
}

export default Navbar