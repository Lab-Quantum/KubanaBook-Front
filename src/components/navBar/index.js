import React from 'react';
import './navBar.css';

import { Link } from 'react-router-dom';

import LogoFB from '../../assets/LogoFB.png';
import HomeIcon from '@material-ui/icons/HomeRounded';
import PerfilIcon from '@material-ui/icons/PersonPinRounded';
import FeedIcon from '@material-ui/icons/RssFeedRounded';
import NotifyIcon from '@material-ui/icons/NotificationsRounded';
import AddIcon from '@material-ui/icons/AddBoxRounded';
import LogoutIcon from '@material-ui/icons/ExitToAppRounded';

const NavBar = () => (
    <div className="navBar">
      <div className="logoContainer">
        <Link className="menuIten" to="/">
          <img src={LogoFB} alt="logoFB" />
        </Link>
      </div>
      <div className="menuContainer">
        <Link className="menuIten" to="/">
          <HomeIcon className="menuIcon"/>
        </Link>
        <Link className="menuIten" to="/perfil">
          <PerfilIcon className="menuIcon" />
        </Link>
        <Link className="menuIten" to="/feed">
          <FeedIcon className="menuIcon" />
        </Link>
        <Link className="menuIten" to="/notify">
          <NotifyIcon className="menuIcon" />
        </Link>
        <Link className="menuIten" to="/post">
          <AddIcon className="menuIcon" />
        </Link>
        <Link className="menuIten" to="/logout">
          <LogoutIcon className="menuIcon" />
        </Link>
      </div>
    </div>
  );
  
  export default NavBar;