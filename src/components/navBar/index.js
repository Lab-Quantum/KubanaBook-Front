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

import Badge from '@material-ui/core/Badge';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles, withStyles } from '@material-ui/core/styles';

const StyledBadge = withStyles(theme => ({
  badge: {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: '$ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}))(Badge);

const SmallAvatar = withStyles(theme => ({
  root: {
    width: 22,
    height: 22,
    border: `2px solid ${theme.palette.background.paper}`,
  },
}))(Avatar);

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));


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

      <Tooltip title="Logout" placement="right" TransitionComponent={Zoom}>
        <Link className="menuIten" to="/logout">
          <LogoutIcon className="menuIcon" />
        </Link>
      </Tooltip>

      <Link className="menuIten" to="/notify">
        <StyledBadge style={{
          width: '68px' ,
          top: '93%',
          position: 'fixed',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-end'
          }}
        >
          <Avatar style={{width:'30px', height: '30px'}} alt="Cristian" />
        </StyledBadge>
      </Link>
    </div>
  </div>
);

export default NavBar;