import React, { useState, useContext, useEffect } from 'react'
import AuthContext from './Context/auth/authContext';
import myimage from './img/education.jpg'
import './Login.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'

const Register = (props) => {
    const authContext = useContext(AuthContext);

    const { register, error, isAuthenticated } = authContext

    const notifyError = (msg) => {
        toast.error(msg, {
            position: toast.POSITION.TOP_RIGHT
        });
    }

    useEffect(() => {
        if (isAuthenticated) {
            props.history.push('/')
        }

        if (error) {
            notifyError("Error while registering")
        }
        //eslint-disabled-next-line
    }, [error, isAuthenticated, props.history])

    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        password2: '',
        role: ''

    });


    const { name, email, password, password2, role } = user

    const onChange = e => setUser({ ...user, [e.target.name]: e.target.value })

    const onSubmit = async (e) => {
        e.preventDefault();
        if (password !== password2) {
            console.log('password dont match')
        } else {
            const register = {
                name,
                email,
                password,
                role
            }
            console.log("register successfully")
            // try {
            //     const config = {
            //         headers: {
            //             'Content-Type': 'application/json'
            //         }
            //     }
            //     const body = JSON.stringify(newUser);
            //     const res = await axios.post('/api/v1/auth/register', body, config);
            //     console.log(res.data)
            //     setFormData({
            //         name: '',
            //         email: '',
            //         password: '',
            //         password2: '',
            //         role: ''
            //     })
            //     props.history.push('/');


            // } catch (err) {
            //     console.error(err.response.data)
            // }
        }
    }

    return (
        <div className="limiter">
            <div className="container-login100">
                <ToastContainer />
                <div className="wrap-login100">
                    <span className="login100-form-title">
                        Register
					    </span>
                    <div className="login100-pic js-tilt" >
                        {/* data-tilt onHover={this.tilt} */}
                        <img src={myimage} alt="IMG" />
                    </div>

                    <form className="login100-form validate-form" onSubmit={e => onSubmit(e)}>
                        <div className="wrap-input100 validate-input" data-validate="Name is required">
                            <input
                                className="input100"
                                type="text"
                                name="name"
                                placeholder="Name"
                                id="name"
                                value={name}
                                onChange={
                                    (e) => {
                                        onChange(e)
                                    }
                                } />
                            <span className="focus-input100"></span>
                            <span className="symbol-input100">
                                <i className="fa fa-user" aria-hidden="true"></i>
                            </span>
                        </div>


                        <div className="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
                            <input
                                className="input100"
                                type="text"
                                name="email"
                                placeholder="Email"
                                id="email"
                                value={email}
                                onChange={
                                    (e) => {
                                        onChange(e)
                                    }
                                } />
                            <span className="focus-input100"></span>
                            <span className="symbol-input100">
                                <i className="fa fa-envelope" aria-hidden="true"></i>
                            </span>
                        </div>

                        <div className="wrap-input100 validate-input" data-validate="Password is required">
                            <input
                                className="input100"
                                type="password"
                                name="password"
                                placeholder="Password"
                                id="password"
                                value={password}
                                onChange={
                                    (e) => {
                                        onChange(e)
                                    }
                                } />
                            <span className="focus-input100"></span>
                            <span className="symbol-input100">
                                <i className="fa fa-lock" aria-hidden="true"></i>
                            </span>
                        </div>

                        <div className="wrap-input100 validate-input" data-validate="Password is required">
                            <input
                                className="input100"
                                type="password"
                                name="password2"
                                placeholder="Confirm Password"
                                value={password2}
                                id="password2"
                                onChange={
                                    (e) => {
                                        onChange(e)
                                    }
                                } />
                            <span className="focus-input100"></span>
                            <span className="symbol-input100">
                                <i className="fa fa-lock" aria-hidden="true"></i>
                            </span>
                        </div>

                        <span className="form-holder">
                            <label for="role">Role</label>
                        </span>

                        <div>
                            <input
                                type="radio"
                                name="role"
                                id="role"
                                value="user"
                                checked={role == "user"}
                                onChange={
                                    (e) => {
                                        onChange(e)
                                    }
                                } /> Regular User

                            <input
                                type="radio"
                                name="role"
                                value="publisher"
                                id="role"
                                checked={role == "publisher"}
                                onChange={
                                    (e) => {
                                        onChange(e)
                                    }
                                } /> Publisher
                            </div>

                        <div className="container-login100-form-btn">
                            <button className="login100-form-btn" type="submit" >
                                Register
						        </button>
                        </div>
                    </form>
                </div>
            </div>
        </div >
    )
}

export default Register