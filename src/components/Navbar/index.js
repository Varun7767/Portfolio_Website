import react,{useState} from "react";
import {FaBars, FaReact} from 'react-icons/fa';
import {HiX} from 'react-icons/hi'
import { Link } from "react-router-dom";
import './styles.css';


const data = [
    {
        label : 'HOME',
        to : '/'
    },
    {
        label : 'ABOUT ME',
        to : '/about'
    },
    {
        label : 'SKILLS',
        to : '/skills'
    },
    {
        label : 'RESUME',
        to : '/resume'
    },
    {
        label : 'PORTFOLIO',
        to : '/portfolio'
    },
    {
        label : 'CONTACT',
        to : '/contact'
    }

    
]

const Navbar = () => {
    const [toggleIcon, setToggleIcon] = useState(false)

    const handleToggleIcon = () => {
        setToggleIcon(!toggleIcon);

    };
    return(
        <div>
            <nav className="Navbar">
                <div className="Navbar-container">
                    <Link to={"/"} className="Navbar-logo">
                    <FaReact size={30}/>
                    </Link>
                </div>
                <ul className={`Navbar-menu ${toggleIcon ? 'active' : ''}`}>
                    {
                        data.map((item) => (
                            <li className="Navbar-menu-item">
                            <Link className="Navbar-menu-item-links" to={item.to}> 
                            {item.label}
                            </Link>
                            </li>
                        ))
                    }
                </ul>
                <div className="nav-icon" onClick={handleToggleIcon}>
                    {
                        toggleIcon ? <HiX size={30}/>: <FaBars size={30}/>
                    }

                </div>
            </nav>
        </div>
    )
}

export default Navbar;