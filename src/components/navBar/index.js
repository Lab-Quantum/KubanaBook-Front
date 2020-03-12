import React from 'react';
import './navBar.css';

import { Link } from 'react-router-dom';

import LogoFB from '../../assets/LogoFB.png';
import HomeIcon from '@material-ui/icons/HomeRounded';
import PerfilIcon from '@material-ui/icons/PersonPinRounded';
import FeedIcon from '@material-ui/icons/RssFeedRounded';
import NotifyIcon from '@material-ui/icons/NotificationsRounded';
import LogoutIcon from '@material-ui/icons/ExitToAppRounded';
import Tooltip from "@material-ui/core/Tooltip";
import Zoom from "@material-ui/core/Zoom";


const NavBar = () => (
  <div className="navBar">
    <div className="logoContainer">
      <Link className="menuIten" to="/">
        <img src={LogoFB} alt="logoFB" />
      </Link>
    </div>
    <div className="menuContainer">

      <Tooltip title="Home" placement="right" TransitionComponent={Zoom}>
        <Link className="menuIten" to="/">
          <HomeIcon className="menuIcon" />
        </Link>
      </Tooltip>

      <Tooltip title="Profile" placement="right" TransitionComponent={Zoom}>
        <Link className="menuIten" to="/profile">
          <PerfilIcon className="menuIcon" />
        </Link>
      </Tooltip>

      <Tooltip title="Feed" placement="right" TransitionComponent={Zoom}>
        <Link className="menuIten" to="/feed">
          <FeedIcon className="menuIcon" />
        </Link>
      </Tooltip>

      <Tooltip title="Notify" placement="right" TransitionComponent={Zoom}>
        <Link className="menuIten" to="/notify">
          <NotifyIcon className="menuIcon" />
        </Link>
      </Tooltip>

      {/* <Tooltip title="Post" placement="right" TransitionComponent={Zoom}>
          <Link className="menuIten" to="/post">
            <AddIcon className="menuIcon" />
          </Link>
        </Tooltip>   */}

      <Tooltip title="Logout" placement="right" TransitionComponent={Zoom}>
        <Link className="menuIten" to="/logout">
          <LogoutIcon className="menuIcon" />
        </Link>
      </Tooltip>

    </div>
  </div>
);

export default NavBar;