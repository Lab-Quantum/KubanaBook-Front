import React from 'react';
import { useSelector } from 'react-redux';

import './profile.css';
import NavBarTop from '../../components/navBarTop';

const Profile = () => {
    const user = useSelector(state => state);
    
    return( 
        <div className="profile">
            <div className="container">
                <NavBarTop />
                <p>Id: {user.id}</p>
                <p>User: {user.name}</p>
                <p>Email: {user.email}</p>
                <p>Phone: {user.phone}</p>
            </div>
        </div>
    );
};

export default Profile;