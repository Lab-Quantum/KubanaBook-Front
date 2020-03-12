import React from 'react';
import './feed.css';
import NavBarTop from '../../components/navBarTop';
import CircularProgress from '@material-ui/core/CircularProgress';

const Feed = () => {
    return( 
        <div className="feed">
            <div className="container">
                <NavBarTop />
                <CircularProgress className="progressCircle"/>
            </div>
        </div>
    );
};

export default Feed;