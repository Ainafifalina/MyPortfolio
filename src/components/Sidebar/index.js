import './index.scss'
import {Link} from "react-router-dom";
import logo from '../../assets/img/bosco.jpg'
import {NavLink} from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEnvelope, faHome, faUser} from "@fortawesome/free-solid-svg-icons";
import {faFacebook, faGithub} from "@fortawesome/free-brands-svg-icons";
import {faLinkedin} from "@fortawesome/free-brands-svg-icons/faLinkedin";


export default function Sidebar() {
    return <>
        <div className='nav-bar'>
            <Link className='logo' to='/'>
                <img src={logo} alt=""/>
            </Link>
            <nav>
                <NavLink excact='true' activeclassname='active' to='/'>
                    <FontAwesomeIcon icon={faHome} color='#4d4d4e'/>
                </NavLink>
                <NavLink excact='true' activeclassname='active' className='about-link' to='/about'>
                    <FontAwesomeIcon icon={faUser} color='#4d4d4e'/>
                </NavLink>
                <NavLink excact='true' activeclassname='active' className='contact-link' to='/contact'>
                    <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e'/>
                </NavLink>
            </nav>
            <ul>
                <li>
                    <a href="#" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faFacebook}/>
                    </a>
                </li>
                <li>
                    <a href="#" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faGithub}/>
                    </a>
                </li>
                <li>
                    <a href="#" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faLinkedin}/>
                    </a>
                </li>
            </ul>
        </div>
    </>
}
