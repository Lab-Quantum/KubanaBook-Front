import React from 'react';
import './navBar.css';

import { Link } from 'react-router-dom';

import LogoFB from '../../assets/LogoFB.png';
import HomeIcon from '../../assets/home.svg';
import PerfilIcon from '../../assets/perfil.svg';
import FeedIcon from '../../assets/feed.svg';
import NotifyIcon from '../../assets/notify.svg';
import AddIcon from '../../assets/add.svg';
import LogoutIcon from '../../assets/logout.svg';

const NavBar = () => ( <
    div className = "navBar" >
    <
    div className = "logoContainer" >
    <
    Link className = "menuIten"
    to = "/" >
    <
    img src = { LogoFB }
    alt = "logoFB" / >
    <
    /Link> < /
    div > <
    div className = "menuContainer" >
    <
    Link className = "menuIten"
    to = "/" >
    <
    img src = { HomeIcon }
    alt = "HomeIcon" / >
    <
    /Link> <
    Link className = "menuIten"
    to = "/perfil" >
    <
    img src = { PerfilIcon }
    alt = "PerfilIcon" / >
    <
    /Link> <
    Link className = "menuIten"
    to = "/feed" >
    <
    img src = { FeedIcon }
    alt = "FeedIcon" / >
    <
    /Link> <
    Link className = "menuIten"
    to = "/notify" >
    <
    img src = { NotifyIcon }
    alt = "NotifyIcon" / >
    <
    /Link> <
    Link className = "menuIten"
    to = "/post" >
    <
    img src = { AddIcon }
    alt = "AddIcon" / >
    <
    /Link> <
    Link className = "menuIten"
    to = "/logout" >
    <
    img src = { LogoutIcon }
    alt = "Logout" / >
    <
    /Link> < /
    div > <
    /div>
);

export default NavBar;