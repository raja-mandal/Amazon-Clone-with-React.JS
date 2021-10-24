import React from 'react';
import '../styles/Header.css';
import logo from '../assets/logo/logo-2.jpg';
import { Link } from 'react-router-dom';
import { FaSearch } from "react-icons/fa";

function Header() {
    return (
        <div>
            <nav className="header">
             {/* logo on the left -> img */} 
             <Link to="/">
              <img className="header__logo" src={logo} alt="logo" />
             </Link>

             {/* search box */}
             <div className="header__search">
               <input className="header__searchInput" />
               <FaSearch className="header__searchIcon" />
             </div>

             {/* 3 links */}
             <div className="header__nav">
               {/* 1st link */}
               <Link to="/login" className="header_link">
                 <div className="header__option">
                  <span className="header__optionLineOne">Hello Alp</span>  
                  <span className="header__optionLineTwo">Sign In</span> 
                 </div>
               </Link>

               {/* 2nd link */}
               <Link to="/" className="header_link">
                 <div className="header__option">
                  <span className="header__optionLineOne">Return</span>  
                  <span className="header__optionLineTwo">& Orders</span> 
                 </div>
               </Link>

                {/* 3rd link */}
                <Link to="/" className="header_link">
                 <div className="header__option">
                  <span className="header__optionLineOne">Your</span>  
                  <span className="header__optionLineTwo">Prime</span> 
                 </div>
               </Link>
             </div>  

             {/* basket icon with number on the right  */} 
            </nav>
        </div>
    )
}

export default Header
