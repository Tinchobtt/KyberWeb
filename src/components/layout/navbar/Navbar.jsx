import { Link } from "react-router-dom"
import logo from '../../../assets/Logotipo.png'
import { useEffect, useRef, useState } from "react"
import Instagram from "../../common/icons/instagram";
import Whatsapp from "../../common/icons/Whatsapp";

const Navbar = () => {
  const ulRef = useRef(null);

  const [navOpen, setNavOpen] = useState(false);// Estado de apertura de nav
  const [subMenuOpen, setSubMenuOpen] = useState(false);// Estado de apertura de subMenu
  const [menuWidgetOpen, setMenuWidgetOpen] = useState(false)//Estado de cambio del icono del Nav
  const [ddmHeight, setDdmHeight] = useState(0)//ALtura del subMenu

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
  }, [])

  return (
    <header>
      <div className="logo-container">
        <Link to={'/'} className='logo-link'>
          <img src={logo} alt="kyberweb logo" />
        </Link>
      </div>
      <nav className={navOpen ? 'navOpen' : ''}>
        <ul className="nav-menu">
          <li className="nav-item"><Link to={'/'} className="nav-link" onClick={deployNav}>Home</Link></li>
          <li className="nav-item drop-item">
            <Link to='#' className="nav-link drop-link" onClick={deploySubMenu}>Services</Link>
            <ul className='sub-menu' ref={ulRef}>
              <li className="nav-item"><Link to='#' className="nav-link" onClick={deployNav}>Web Development</Link></li>
              <li className="nav-item"><Link to='#' className="nav-link" onClick={deployNav}>Web Design</Link></li>
              <li className="nav-item"><Link to='#' className="nav-link" onClick={deployNav}>Social Media Managment</Link></li>
              <li className="nav-item"><Link to='#' className="nav-link" onClick={deployNav}>Ilustration</Link></li>
            </ul>
          </li>
          <li className="nav-item"><Link to={'/portfolio'} className="nav-link" onClick={deployNav}>portfolio</Link></li>
          <li className="nav-item"><Link to={'/contact'} className="nav-link" onClick={deployNav}>Contact</Link></li>
        </ul>
        <div className="media-container">
          <Instagram />
          <Whatsapp style={{marginLeft: '2rem'}} />
        </div>
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