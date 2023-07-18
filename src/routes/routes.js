import Home from '../components/pages/home/Home';
import ServiceDetail from '../components/pages/serviceDetail/ServiceDetail';
import Portfolio from '../components/pages/portfolio/Portfolio';
import About from '../components/pages/about/About';
import Contact from '../components/pages/contact/Contact';

export const routes = [
    {
        id: 'home',
        path : '/',
        Element : Home
    },
    {
        id: 'service',
        path : '/serviceDetail:id',
        Element : ServiceDetail
    },
    {
        id: 'portfolio',
        path : '/portfolio',
        Element : Portfolio
    },
    {
        id: 'about',
        path : '/about',
        Element : About
    },
    {
        id: 'contact',
        path : '/contact',
        Element : Contact
    }
]