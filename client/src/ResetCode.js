import React, { Component } from 'react'
import myimage from './img/img-01.png'
import './Login.css'
import axios from 'axios';
import { NotificationContainer, NotificationManager } from 'react-notifications';

import 'react-toastify/dist/ReactToastify.css';
import { ForgetPassword } from './ForgetPassword';

export class ResetCode extends Component {

    constructor(props) {
        super(props);
        this.state = { code: "", errors: {} };
        this.handleInput = this.handleInput.bind(this);
    }
    handleInput = e => {
        // e.preventDefault();
        console.log(e.target.value);
        e.preventDefault();
        const name = e.target.name;
        const value = e.target.value;
        this.setState({ [name]: value });
    }
    handleForm = e => {
        e.preventDefault();
        if (this.state.code === '') {
            console.log("Code is Required");
            return false;
        }
        const code = { code: this.state.code };
        this.props.history.push({
            pathname: '/ForgetPassword',
            state: code
        })
    }
    render() {
        return (
            <div className="limiter">
                <div className="container-login100">
                    <NotificationContainer />
                    <div className="wrap-login100">
                        <span className="login100-form-title">
                            Send Code
						</span>

                        <div className="login100-pic js-tilt" >
                            <img src={myimage} alt="IMG" />
                        </div>

                        <form className="login100-form validate-form" onSubmit={this.handleForm}>
                            <div className="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
                                <input className="input100" type="text" name="code" placeholder="Enter Code" id="code" value={this.state.code} onChange={this.handleInput} />
                                <span className="focus-input100"></span>
                                <span className="symbol-input100">
                                    <i className="fa fa-envelope" aria-hidden="true"></i>
                                </span>
                            </div>

                            <div className="container-login100-form-btn">
                                <button className="login100-form-btn" type="submit" onClick={this.handleForm} >
                                    Reset Password
								</button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default ResetCode