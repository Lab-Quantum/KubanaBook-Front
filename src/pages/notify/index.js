import React from 'react';
import './notify.css';
import NavBarTop from '../../components/navBarTop';
import CircularProgress from '@material-ui/core/CircularProgress';

const Notify = () => {

    return( 
        <div className="feed">
            <div className="container">
                <NavBarTop />
                <CircularProgress className="progressCircle"/>
            </div>
        </div>
    );
};

export default Notify