import React from 'react';
import './notify.css';
import Snackbar from '../../components/sackBar';

const Notify = () => {
    return( 
        <div className="notify">
            <Snackbar title="Notificacões" />
        </div>
    );
};

export default Notify;