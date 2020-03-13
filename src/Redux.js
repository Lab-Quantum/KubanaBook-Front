import React from 'react';
import { Provider } from 'react-redux';

import App from './App';
import store from './config/store';

const Redux = () => {
    return (
        <Provider store={store}>
            <App />
        </Provider>
    )
}

export default Redux;