import React from 'react';
import './feed.css';
import Snackbar from '../../components/sackBar';

const Feed = () => {
    return( 
        <div className="feed">
            <div className="container"></div>
            <Snackbar title="Feed" />
        </div>
    );
};

export default Feed;