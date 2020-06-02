import React, { Component } from 'react'
import myimage from './img/education.jpg'
import './Login.css'
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'

export class ForgetPassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
            code: '',
            password: '',
            password2: '',
            errors: {}
        };
        this.handleInput = this.handleInput.bind(this);
    }
    componentDidMount(props) {
        this.setState({
            code: this.props.location.state.code
        })
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
        if (this.state.password === '' && this.state.password2 === '') {
            console.log("passwords required")
            return false;
        }

        if (this.state.password !== this.state.password2) {
            console.log('password dont match')
        }
        const data = {
            password: this.state.password
        };
        const code = this.state.code
        axios
            .put(`/api/v1/auth/resetpassword/${code}`, data)
            .then(result => {
                console.log("Password updated", result)
                this.props.history.push('/Login')
            })
            .catch(err => {
                if (err.response && err.response.status === 404) {
                    console.log(err.response.data.msg)
                } else {
                    console.log("something went wrong")

                }
                this.setState({ errors: err.response })
            });

    }

    render() {
        return (
            <div className="limiter">
                <div className="container-login100">

                    <div className="wrap-login100">
                        <span className="login100-form-title">
                            Forget Password
						</span>

                        <div className="login100-pic js-tilt" data-tilt onHover={this.tilt}>
                            <img src={myimage} alt="IMG" />
                        </div>

                        <form className="login100-form validate-form" onSubmit={this.handleForm}>

                            <div className="wrap-input100 validate-input" data-validate="Password is required">
                                <input className="input100" type="password" name="password" placeholder="New Password" id="password" value={this.state.password} onChange={this.handleInput} />
                                <span className="focus-input100"></span>
                                <span className="symbol-input100">
                                    <i className="fa fa-lock" aria-hidden="true"></i>
                                </span>
                            </div>

                            <div className="wrap-input100 validate-input" data-validate="Password is required">
                                <input className="input100" type="password" name="password2" placeholder="Confirm Password" id="password" value={this.state.password2} onChange={this.handleInput} />
                                <span className="focus-input100"></span>
                                <span className="symbol-input100">
                                    <i className="fa fa-lock" aria-hidden="true"></i>
                                </span>
                            </div>

                            <div className="container-login100-form-btn">
                                <button className="login100-form-btn" type="submit" onSubmit={this.handleForm}>
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

export default ForgetPassword
