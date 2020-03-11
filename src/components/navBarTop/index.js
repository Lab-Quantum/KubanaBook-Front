import React from 'react';
import './navBarTop.css';
import MenuIcon from '@material-ui/icons/MoreVertRounded';

const NavBarTop = () =>(
    <div className="navBarTop">
        <div className="searchContainer">
            <form>
                <input type="text" placeholder="search"></input>
            </form>
        </div>
        <div className="menuProfile">
            <MenuIcon className="MenuIcon" />
        </div>
    </div>

);

export default NavBarTop;