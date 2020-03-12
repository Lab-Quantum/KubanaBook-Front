import React from 'react';
import './profile.css';
import NavBarTop from '../../components/navBarTop';
import CircularProgress from '@material-ui/core/CircularProgress';

const Profile = () => {

    return (
        <div className="profile">
            <div className="container">
                <NavBarTop />
                <CircularProgress className="progressCircle" />
            </div>
        </div>
    );
};

export default Profile;