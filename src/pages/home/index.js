import React from 'react';
import './home.css';
import NavBarTop from '../../components/navBarTop';
import CircularProgress from '@material-ui/core/CircularProgress';

const Home = () => {
    return( 
        <div className="home">
            <div className="container">
                <NavBarTop />
                <CircularProgress className="progressCircle"/>
            </div>
        </div>
    );
};

export default Home;