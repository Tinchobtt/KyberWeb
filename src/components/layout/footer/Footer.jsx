import { HashLink } from 'react-router-hash-link';
import logo from '../../../assets/LogoC.png'
import Whatsapp from "../../common/icons/Whatsapp"
import Instagram from "../../common/icons/instagram"
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MailOutlineRoundedIcon from '@mui/icons-material/MailOutlineRounded';

const Footer = () => {
  return (
    <footer className="shadow">
      <div className="logo-container">
        <HashLink to={'/#start'} className='logo-link'>
          <img src={logo} alt="kyberweb logo" />
        </HashLink>
      </div>
      <nav className="nav-footer">
        <div className="nav-footer-item">
          <h3 className="subtitle"><HashLink to="/#start">Home</HashLink></h3>
          <ul className="nav-list">
            <li><HashLink smooth to="/#services">Services</HashLink></li>
            <li><HashLink smooth to="/#package">Packages</HashLink></li>
          </ul>
        </div>
        <div className="nav-footer-item">
          <h3 className="subtitle"><HashLink to="/#services">Services</HashLink></h3>
          <ul className="nav-list">
            <li><HashLink to={'/serviceDetail/1#start'}>Web Development</HashLink></li>
            <li><HashLink to={'/serviceDetail/2#start'}>Web Design</HashLink></li>
            <li><HashLink to={'/serviceDetail/3#start'}>Social Media Managment</HashLink></li>
            <li><HashLink to={'/serviceDetail/4#start'}>Ilustration</HashLink></li>
          </ul>
        </div>
        <div className="nav-footer-item">
          <h3 className="subtitle"><HashLink to="/contact/0#start">Contact</HashLink></h3>
          <ul className="nav-list">
            <li><a href="https://wa.me/393312091265" className="nav-list-contact" target='_BLANCK'><LocalPhoneIcon style={{color: '#EFEFEF', marginRight: '1rem'}}/>+39 33-1209-1265</a></li>
            <li><a href="mailto:kyber.web1@gmail.com" className="nav-list-contact" target='_BLANCK'><MailOutlineRoundedIcon style={{color: '#EFEFEF', marginRight: '1rem'}}/>kyber.web1@gmail.com</a></li>
          </ul>
        </div>
      </nav>
      <div className="red-box-container">
        <div className="red-box">
          <Whatsapp style={{width: '2rem'}}/>
          <a href="https://wa.me/393312091265" className='red-box-link' target='_BLANCK'>+39 33-1209-1265</a>
        </div>
        <div className="red-box">
          <Instagram style={{width: '2.2rem'}}/>
          <a href="https://www.instagram.com/kyberweb/?hl=es-la" className='red-box-link' target='_BLANCK'>@kyberweb</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer