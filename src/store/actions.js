const SET_LOGIN_PENDING = 'SET_LOGIN_PENDING';
const SET_LOGIN_SUCCESS = 'SET_LOGIN_SUCCESS';
const SET_LOGIN_ERROR = 'SET_LOGIN_ERROR';

function setLoginPending(isLoginPending) {
    return {
        type: SET_LOGIN_PENDING,
        isLoginPending
    };
}

function setLoginSuccess(isLoginSuccess) {
    return {
        type: SET_LOGIN_SUCCESS,
        isLoginSuccess
    };
}

function setLoginError(loginError) {
    return {
        type: SET_LOGIN_ERROR,
        loginError
    };
}

function callLoginApi(email, password, callback) {
    setTimeout(() => {
        if (email === 'admin@login.com' && password === 'admin') {
            return callback(null);
        } else {
            return callback(new Error('Invalid email and password'));
        }
    }, 3000);
}

export function login(email, password) {
    return dispatch => {
        dispatch(setLoginPending(true));
        dispatch(setLoginSuccess(false));
        dispatch(setLoginError(null));

        callLoginApi(email, password, error => {
            dispatch(setLoginPending(false));
            if (error) {
                dispatch(setLoginError(error));
            } else {
                dispatch(setLoginSuccess(true));
            }
        });
    }
}
