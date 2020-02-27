import React from 'react';
import './snack.css';

const SnackBar = (props) => {
    return( 
        <div className="snackbar">
            {props.title}
        </div>
    );
};

export default SnackBar;