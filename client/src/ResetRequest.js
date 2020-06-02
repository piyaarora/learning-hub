import React, { Component } from 'react'
import myimage from './img/education.jpg'
import './Login.css'
import axios from 'axios';
import { NotificationContainer, NotificationManager } from 'react-notifications';

import 'react-toastify/dist/ReactToastify.css';

export class ResetRequest extends Component {

	constructor(props) {
		super(props);
		this.state = { email: "", errors: {} };
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
		if (this.state.email === '') {
			NotificationManager.warning("Email is Required");
			return false;
		}
		const data = { email: this.state.email };
		axios
			.post("/api/v1/auth/forgotpassword", data)
			.then(result => {
				console.log("Password Reset link sent to yout email .Please check the your email.Link Will be Valid For 30 min", result)
				this.props.history.push('/ResetCode')

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
					<NotificationContainer />
					<div className="wrap-login100">
						<span className="login100-form-title">
							Reset Password
						</span>

						<div className="login100-pic js-tilt" >
							<img src={myimage} alt="IMG" />
						</div>

						<form className="login100-form validate-form" onSubmit={this.handleForm}>
							<div className="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
								<input className="input100" type="text" name="email" placeholder="Email" id="email" value={this.state.email} onChange={this.handleInput} />
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

							<div className="container-login100-form-btn">
								<button className="login100-form-btn" type="submit"  >
									Back to Login
								</button>
							</div>


						</form>
					</div>
				</div>
			</div>
		)
	}
}

export default ResetRequest