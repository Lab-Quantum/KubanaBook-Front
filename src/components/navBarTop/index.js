import React from 'react';
import './navBarTop.css';
import Menu from '../../assets/menu.svg';

const NavBarTop = () =>(
    <div className="navBarTop">
        <div className="searchContainer">
            <form>
                <input type="text" placeholder="search"></input>
            </form>
        </div>
        <div className="menuProfile">
            <img src={Menu} alt="MenuIcon" />
        </div>
    </div>

);

export default NavBarTop;