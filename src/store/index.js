import { createStore, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';

// Define action types
const SET_LOGIN_PENDING = 'SET_LOGIN_PENDING';
const SET_LOGIN_SUCCESS = 'SET_LOGIN_SUCCESS';
const SET_LOGIN_ERROR = 'SET_LOGIN_ERROR';

// Define initial state
const initialState = {
    isLoginPending: false,
    isLoginSuccess: false,
    loginError: null
};

// Define the reducer
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LOGIN_PENDING:
            return { ...state, isLoginPending: action.isLoginPending };
        case SET_LOGIN_SUCCESS:
            return { ...state, isLoginSuccess: action.isLoginSuccess };
        case SET_LOGIN_ERROR:
            return { ...state, loginError: action.loginError };
        default:
            return state;
    }
};

// Create the Redux store with the reducer and thunk middleware
const store = createStore(reducer, applyMiddleware(thunk));

export default store;
