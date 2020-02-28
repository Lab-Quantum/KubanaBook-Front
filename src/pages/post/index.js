import React from 'react';
import './post.css';
import Snackbar from '../../components/sackBar';

const Post = () => {
    return( 
        <div className="post">
            <Snackbar title="New Post" />
        </div>
    );
};

export default Post;