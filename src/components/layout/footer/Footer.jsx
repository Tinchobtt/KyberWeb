import { HashLink } from 'react-router-hash-link';
import logo from '../../../assets/LogoC.png'
import Whatsapp from "../../common/icons/Whatsapp"
import Instagram from "../../common/icons/instagram"

const Footer = () => {
  return (
    <footer className="shadow">
      <div className="logo-container">
        <HashLink to={'/#start'} className='logo-link'>
          <img src={logo} alt="kyberweb logo" />
        </HashLink>
      </div>
      <nav className="nav-footer">
        <h3 className="subtitle"><HashLink to="/#start">home</HashLink></h3>
        <ul className="nav-list">
          <li><HashLink smooth to="/#services">Services</HashLink></li>
          <li><HashLink smooth to="/#package">Packages</HashLink></li>
        </ul>
        <h3 className="subtitle"><HashLink to="/#services">Services</HashLink></h3>
        <ul className="nav-list">
          <li><HashLink to={'/serviceDetail/1#start'}>Web Development</HashLink></li>
          <li><HashLink to={'/serviceDetail/2#start'}>Web Design</HashLink></li>
          <li><HashLink to={'/serviceDetail/3#start'}>Social Media Managment</HashLink></li>
          <li><HashLink to={'/serviceDetail/4#start'}>Ilustration</HashLink></li>
        </ul>
        <h3 className="subtitle"><HashLink to="/contact#start">Contact</HashLink></h3>
        <ul className="nav-list">
          <li><span>icon</span> telefono</li>
          <li><span>icon</span> mail</li>
        </ul>
        <div className="red-box">
          <Whatsapp style={{width: '2rem'}}/>
          <span>+39 33-1209-1265</span>
        </div>
        <div className="red-box">
          <Instagram style={{width: '2.2rem'}}/>
          <span>@kyberweb</span>
        </div>
      </nav>
    </footer>
  )
}

export default Footer