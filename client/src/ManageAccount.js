import React, { Component } from 'react'
import myimage from './img/img-01.png'
import './Login.css'
import $ from 'jquery'
import 'react-toastify/dist/ReactToastify.css';

class ManageAccount extends Component {
    tilt = () => {
        $('.js-tilt').tilt({
            scale: 1.1
        })
    }
    render() {
        return (
            <div className="limiter">
                <div className="container-login100">
                    <div className="wrap-login100">
                        <span className="login100-form-title">
                            User Settings
						</span>
                        <div className="login100-pic js-tilt" data-tilt onHover={this.tilt}>
                            <img src={myimage} alt="IMG" />
                        </div>

                        <form className="login100-form validate-form">

                            <div className="wrap-input100 validate-input" data-validate="Name is required">
                                <input className="input100" type="text" name="name" placeholder="Name" id="name" />
                                <span className="focus-input100"></span>
                                <span className="symbol-input100">
                                    <i className="fa fa-user" aria-hidden="true"></i>
                                </span>
                            </div>

                            <div className="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
                                <input className="input100" type="text" name="email" placeholder="Email" id="email" />
                                <span className="focus-input100"></span>
                                <span className="symbol-input100">
                                    <i className="fa fa-envelope" aria-hidden="true"></i>
                                </span>
                            </div>


                            <div className="container-login100-form-btn">
                                <button className="login100-form-btn" type="button">
                                    Save User
								</button>
                                <p>or</p>
                                <button className="login100-form-btn" type="button">
                                    Update password
								</button>

                            </div>

                        </form>
                    </div>
                </div>

            </div>
        )
    }
}

export default ManageAccount