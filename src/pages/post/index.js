import React from 'react';
import './post.css';
import NavBarTop from '../../components/navBarTop';
import CircularProgress from '@material-ui/core/CircularProgress';

const Posts = () => {

    return( 
        <div className="posts">
            <div className="container">
                <NavBarTop />
                <CircularProgress className="progressCircle"/>
            </div>
        </div>
    );
};

export default Posts;