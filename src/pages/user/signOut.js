import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import api from '../../config/api';

const SignOut = (props) => {
    const dispach = useDispatch();

    localStorage.token = null;
    
    useEffect(() => {
        api.post('/sign/signOut')
        .then(() => {
            dispach({type: 'LOGOUT'});
            props.history.goBack();
        });
    }, [dispach, props]);

    return (
        <p></p>
    )
}

export default SignOut;