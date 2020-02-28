import React from 'react';
import './perfil.css';
import Snackbar from '../../components/sackBar';

const Perfil = () => {
    return( 
        <div className="perfil">
            <div className="container"></div>
            <Snackbar title="Perfil" />
        </div>
    );
};

export default Perfil;