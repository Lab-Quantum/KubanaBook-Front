import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './App.css';
import Routes from './routes/router';
import api from './config/api';

function App() {
    const user = useSelector(state => state);
    const dispatch = useDispatch();

    useEffect(() => {
        if(!user.id) {
            api.post('/users/verifyToken', {})
            .then(response => response.data)
            .then(data => {
                if(data.success) {
                    dispatch({
                        type : 'LOGIN',
                        token: data.content.token,
                        id   : data.content.user.id,
                        name : data.content.user.name,
                        email: data.content.user.email,
                        phone: data.content.user.phone,
                    });
                }
            })
        }
    }, [user.id, dispatch]);

    return (
        <div className="App">
            <Routes />
        </div>
    );
}

export default App;
