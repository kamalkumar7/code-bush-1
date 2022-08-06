import './navbar.scss'
import { Search, Notifications, ArrowDropDown } from '@mui/icons-material'
import { useState } from 'react';
import { Link } from "react-router-dom";
import Logo from "../../images/CodeBush.png";

const Navbar = () => {

    const user = false;
    const [isScrolled, setIsScrolled] = useState(false);

    window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0 ? false : true);
        return () => (window.onscroll = null);
    }
    return (
        <div className={isScrolled ? "navbar scrolled" : "navbar"}>
            <div className="container">
                <div className="left">
                    <img src={Logo} alt="CodeBush" />
                    <span>Home</span>
                    <span>ProblemSet</span>
                    <span>Streak</span>
                    <span>Calender</span>
                    <span>Typing</span>
                </div>
                {user ? (<div className="right">
                    <div className="profile">
                        <span>hritik01478</span>
                        <div className="options">
                            <span>Profile</span>
                            <span>Settings</span>
                            <span>Log Out</span>
                        </div>
                    </div>
                    <img src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />

                </div>) : (<div className="right">
                    <button className='navBtn'>Login</button>
                    <button className='navBtn'>Register</button>
                </div>)}
            </div>
        </div >
    )
}

export default Navbar