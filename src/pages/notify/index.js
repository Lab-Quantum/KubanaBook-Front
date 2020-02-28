import React from 'react';
import './notify.css';
import Snackbar from '../../components/sackBar';

const Notify = () => {
    return( 
        <div className="notify">
            <div className="container"></div>
            <Snackbar title="Notificacões" />
        </div>
    );
};

export default Notify;