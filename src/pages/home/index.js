import React from 'react';
import './home.css';
import Snackbar from '../../components/sackBar';

const Home = () => {
    return( 
        <div className="home">
            <div className="container"></div>
            <Snackbar title="Home" />
        </div>
    );
};

export default Home;