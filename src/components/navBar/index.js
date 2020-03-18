import React from 'react';
import './navBar.css';

import { Link } from 'react-router-dom';

import LogoFB from '../../assets/LogoFB.png';
import HomeIcon from '@material-ui/icons/HomeRounded';
import FeedIcon from '@material-ui/icons/RssFeedRounded';
import NotifyIcon from '@material-ui/icons/NotificationsRounded';
import LogoutIcon from '@material-ui/icons/ExitToAppRounded';
import Tooltip from "@material-ui/core/Tooltip";
import Zoom from "@material-ui/core/Zoom";

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';

import Badge from '@material-ui/core/Badge';
import Avatar from '@material-ui/core/Avatar';
import {withStyles } from '@material-ui/core/styles';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

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

const NavBar = () => {

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
      setOpen(true);
  };

  const handleClose = () => {
      setOpen(false);
  };

  return(
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

        <div className="menuIten" onClick={handleClickOpen}>
          <StyledBadge style={{
            width: '68px' ,
            top: '93%',
            position: 'fixed',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-end'
            }}
          >
            <Avatar style={{width:'30px', height: '30px', cursor: 'pointer'}} alt="Cristian" />
          </StyledBadge>
        </div>
      </div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        disableBackdropClick
        disableEscapeKeyDown
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">{"Modal Menu"}</DialogTitle>
        <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
                Let Google help apps determine location. This means sending anonymous location data to
                Google, even when no apps are running.
            </DialogContentText>
        </DialogContent>
        <DialogActions>
            <Button onClick={handleClose} color="primary">
                Disagree
            </Button>
            <Button onClick={handleClose} color="primary">
                Agree
            </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
};

export default NavBar;