import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './user.css';
import NavBarTop from '../../components/navBarTop';

import api from '../../config/api';

const SignIn = (props) => {
    const user = useSelector(state => state);
    const dispatch = useDispatch();

    if(user.id !== null) {
        props.history.push("/");
    }

    var [name, setName] = useState('');
    var [password, setPassword] = useState('');
    var [error, setError] = useState('');

    const validateForm = (
        name: String,
        password: String,
        setError: (error: String | null) => void
    ): Boolean => {
        if(!name || !password) {
            setError("All fields are required");
            return false
        }

        setError(false);
        return true;
    }

    const handleSubmit = () => {
        api.post('/sign/signIn', {
            user: name,
            password
        }).then((response) => response.data)
        .then((data) => {
            if(data.success) {
                localStorage.token = data.content.token;
                dispatch({
                    type : 'LOGIN',
                    token: data.content.token,
                    id   : data.content.user.id,
                    name : data.content.user.name,
                    email: data.content.user.email,
                    phone: data.content.user.phone,
                });
                props.history.goBack();
            } else {
                console.log(data);
                setError(data.content.message)
            }
        })
    }

    return( 
        <div className="user">
            <div className="container">
                <NavBarTop />
                <form onSubmit={
                    e => {
                        e.preventDefault();
                        if(validateForm(name, password, setError)) {
                            handleSubmit();
                        }
                    }
                }>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <button type="submit">Send</button>
                    <p>{error}</p>
                </form>
            </div>
        </div>
    );
};

export default SignIn;