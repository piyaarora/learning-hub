import React, { useReducer } from "react";
import axios from 'axios'
import AuthContext from './authContext'
import authReducer from './authReducer'
import setAuthToken from '../../common/setAuthToken'
import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    CLEAR_ERRORS

} from '../types';

//create initial state
const AuthState = props => {
    const initialState = {
        token: localStorage.getItem('token'),
        isAuthenticated: null,
        user: null,
        error: null
    };

    const [state, dispatch] = useReducer(authReducer, initialState);

    //Load user
    const loadUser = async () => {
        if (localStorage.token) {
            setAuthToken(localStorage.token)
        }
        //@todo - load token into global headers
        try {
            const res = await axios.get('/api/v1/auth/me');
            dispatch({
                type: USER_LOADED,
                payload: res.data
            })
        } catch (err) {
            dispatch({ type: AUTH_ERROR })
        }
    }

    //Register User
    const register = async formData => {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        try {
            const res = await axios.post('/api/v1/auth/register', formData, config);

            dispatch({
                type: REGISTER_SUCCESS,
                payload: res.data
            });
            loadUser();

        } catch (err) {
            dispatch({
                type: REGISTER_FAIL,
                payload: err.response.data.msg
            })
        }
    }

    //Login User
    const login = async formData => {
        const config = {
            // 	const body = JSON.stringify(newUser);

            headers: {
                'Content-Type': 'application/json'
            }
        }
        try {
            const res = await axios.post('/api/v1/auth/login', formData, config);

            dispatch({
                type: LOGIN_SUCCESS,
                payload: res.data
            });
            loadUser();
        } catch (err) {
            dispatch({
                type: LOGIN_FAIL,
                payload: err.response.data.msg
            });

        }
    }


    //Logout
    const logout = () => dispatch({
        type: LOGOUT
    })

    //Clear Errors
    const clearErrors = () => dispatch({ type: CLEAR_ERRORS })

    return (
        <AuthContext.Provider
            value={{
                token: state.token,
                isAuthenticated: state.isAuthenticated,
                user: state.user,
                error: state.error,
                register,
                loadUser,
                login,
                logout,
                clearErrors

            }}>
            {
                props.children
            }
        </AuthContext.Provider>
    );
};

export default AuthState

