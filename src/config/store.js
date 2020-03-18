import { createStore } from 'redux';

const INITIAL_USER = {
    token: localStorage.token,
    id   : null,
    name : null,
    email: null,
    phone: null
}

function storage(state = INITIAL_USER, action) {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state, 
                token: action.token, 
                id   : action.id, 
                name : action.name, 
                email: action.email, 
                phone: action.phone
            }
        case 'LOGOUT':
            return { ...state, 
                token: null,
                id   : null,
                name : null,
                email: null,
                phone: null 
            }
        default:
            return state
    }
}

const store = createStore(storage);

export default store;