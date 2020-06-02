import React, { useState } from 'react'
import myimage from './img/education.jpg'
import './Login.css'
import { Link } from 'react-router-dom'
import { Routes } from './common/Routes'
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'


const LoginForm = () => {
	const [formData, setFormData] = useState(
		{
			email: '',
			password: '',
		}
	);

	const { email, password } = formData

	const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value })

	const onSubmit = async (e) => {
		e.preventDefault();
		const newUser = {
			email,
			password
		}
		try {
			const config = {
				headers: {
					'Content-Type': 'application/json'
				}
			}
			const body = JSON.stringify(newUser);
			const res = await axios.post('/api/v1/auth/login', body, config);
			console.log("success" + res.data)
		} catch (err) {
			console.error(err.response.data)
		}

	}

	return (
		<div className="limiter">
			<div className="container-login100">
				<div className="wrap-login100">
					<span className="login100-form-title">
						Login
						</span>
					<div className="login100-pic js-tilt">
						<img src={myimage} alt="IMG" />
					</div>

					<form className="login100-form validate-form" onSubmit={e => onSubmit(e)}>
						<div className="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
							<input
								className="input100"
								type="text"
								name="email"
								value={email}
								placeholder="Email"
								id="email"
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
								value={password}
								placeholder="Password"
								id="password"
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

						<div className="container-login100-form-btn">
							<button className="login100-form-btn" type="submit">
								Login
							</button>
						</div>

						<div className="text-centers margins">
							<Link to={Routes.ResetRequest.url}>
								<span className="txt1" style={{ padding: '5px' }}>
									Forgot
									</span>
								<Link className="txt2" href="#">
									Username / Password?
									</Link>
							</Link>
						</div>

						<div className="text-centers margins">
							<Link to={Routes.Signup.url}>
								Create your Account
								</Link>
							<i className="fa fa-long-arrow-right m-l-5" aria-hidden="true"></i>
						</div>
					</form>
				</div>
			</div>
		</div>
	)
}

export default LoginForm