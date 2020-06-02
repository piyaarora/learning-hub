import React, { Component } from 'react'
import myimage from './img/education.jpg'
import './Login.css'
import 'react-toastify/dist/ReactToastify.css';

export class Update extends Component {

    render() {
        return (
            <div className="limiter">
                <div className="container-login100">

                    <div className="wrap-login100">
                        <span className="login100-form-title">
                            Update Password
						</span>

                        <div className="login100-pic js-tilt">
                            <img src={myimage} alt="IMG" />
                        </div>

                        <form className="login100-form validate-form">
                            <div className="wrap-input100 validate-input" data-validate="Password is required">
                                <input className="input100" type="password" name="pass" placeholder="Current Password" id="password" />
                                <span className="focus-input100"></span>
                                <span className="symbol-input100">
                                    <i className="fa fa-lock" aria-hidden="true"></i>
                                </span>
                            </div>

                            <div className="wrap-input100 validate-input" data-validate="Password is required">
                                <input className="input100" type="password" name="pass" placeholder="New Password" id="password" />
                                <span className="focus-input100"></span>
                                <span className="symbol-input100">
                                    <i className="fa fa-lock" aria-hidden="true"></i>
                                </span>
                            </div>

                            <div className="wrap-input100 validate-input" data-validate="Password is required">
                                <input className="input100" type="password" name="pass" placeholder="Confirm Password" id="password" />
                                <span className="focus-input100"></span>
                                <span className="symbol-input100">
                                    <i className="fa fa-lock" aria-hidden="true"></i>
                                </span>
                            </div>

                            <div className="container-login100-form-btn">
                                <button className="login100-form-btn" type="button" >
                                    Update Password
								</button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Update
