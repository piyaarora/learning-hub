import React, { useState, useContext } from 'react'
import Navigation from './Navigation';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import axios from 'axios'


const AddBootcamp = () => {

    const [bootcampData, setBootcampData] = useState({
        name: '',
        description: '',
        email: '',
        address: '',
        phone: '',
        website: '',
        careers: '',
        housing: null,
        jobAssistance: null,
        jobGuarantee: null,
        acceptGi: null
    });

    const { name, description, email, address, phone, website, careers, housing, jobAssistance, jobGuarantee, acceptGi } = bootcampData;

    const onChange = e => setBootcampData({ ...bootcampData, [e.target.name]: e.target.value })

    const onSubmit = async e => {
        e.preventDefault();

        const newBootcamp = {
            name,
            description,
            email,
            address,
            phone,
            website,
            careers,
            housing,
            jobAssistance,
            jobGuarantee,
            acceptGi
        }
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
            const body = JSON.stringify(newBootcamp);
            const res = await axios.post('/api/v1/bootcamps', body, config);
            console.log(res.data)
        } catch (err) {
            console.error(err.response.data)
        }


        setBootcampData({
            name: '',
            description: '',
            email: '',
            address: '',
            phone: '',
            website: '',
            careers: [],
            housing: '',
            jobAssistance: '',
            jobGuarantee: '',
            acceptGi: ''
        })
    }

    return (
        <div>
            <Navigation />

            {/* <!-- Start Banner Area --> */}
            <section className="banner-area relative">
                <div className="container">
                    <div className="row d-flex align-items-center justify-content-center">
                        <div className="about-content col-lg-12">
                            <h1 className="text-white">
                                Create New Bootcamp
					            </h1>
                            <p>In the history of modern astronomy, there is probably no one greater leap forward than the building and launch of
						the space telescope.</p>
                            <div className="link-nav">
                                <span className="box">
                                    <Link to="#">Home</Link >
                                    <i className="lnr lnr-arrow-right"></i>
                                    <Link to="blog-home.html">Add Bootcamp</Link >
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- End Banner Area --> */}

            {/* <!-- Start post-content Area --> */}
            <section className="post-content-area single-post-area">
                <div className="container">

                    <div className="row">
                        <div className="col-lg-6 posts-list">
                            <div className="comment-form">
                                <h4>Location & Contact</h4>
                                <form>

                                    <div className="form-group">
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="name"
                                            value={name}
                                            name='name'
                                            onChange={onChange}
                                            placeholder="Enter Name"
                                        />
                                    </div>

                                    <div className="form-group">
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="email"
                                            value={email}
                                            name='email'
                                            onChange={
                                                (e) => {
                                                    onChange(e)
                                                }
                                            }
                                            placeholder="Enter email address"
                                        />
                                    </div>

                                    <div className="form-group">
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="address"
                                            value={address}
                                            onChange={
                                                (e) => {
                                                    onChange(e)
                                                }
                                            }
                                            name='address'
                                            placeholder="Full Address"
                                        />
                                    </div>

                                    <div className="form-group">
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="phone"
                                            name="phone"
                                            onChange={
                                                (e) => {
                                                    onChange(e)
                                                }
                                            }
                                            value={phone}
                                            placeholder="Phone No."
                                        />
                                    </div>

                                    <div className="form-group">
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="website"
                                            name="website"
                                            onChange={
                                                (e) => {
                                                    onChange(e)
                                                }
                                            }
                                            value={website}
                                            placeholder="Website URL"
                                        />
                                    </div>
                                </form>
                                <p className="text-bottom">
                                    *After you add the bootcamp, you can add the specific courses offered
								</p>
                            </div>
                        </div>

                        <div className="col-lg-6 posts-list">
                            <div className="comment-form">
                                <h4>Other Info</h4>
                                <form>

                                    <div className="form-group">
                                        <textarea
                                            className="form-control mb-10"
                                            rows="5"
                                            name="description"
                                            placeholder="Description (What this bootcamp offers)"
                                            onChange={
                                                (e) => {
                                                    onChange(e)
                                                }
                                            }
                                            value={description}
                                            required="">
                                        </textarea>
                                    </div>

                                    <div className="form-group">
                                        <h5>Careers</h5>
                                        <div className="input-group-icon mt-10">
                                            <div className="form-select" id="default-select" >
                                                <select
                                                    name="careers"
                                                    // value={careers}
                                                    onChange={
                                                        (e) => {
                                                            onChange(e)
                                                        }
                                                    }
                                                >
                                                    <option value="A">Web dev</option>
                                                    <option value="B">python</option>
                                                    <option value="C">data structures</option>
                                                    <option value="D">cloud computing</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <div className="switch-wrap d-flex justify-content-between ">
                                            <p>1. Housing</p>
                                            <div className="primary-checkbox">
                                                <input
                                                    type="checkbox"
                                                    id="checkbox"
                                                    name="housing"
                                                    onChange={
                                                        (e) => {
                                                            onChange(e)
                                                        }
                                                    }
                                                    value={housing}
                                                    checked={housing === true} />
                                                <label htmlFor="primary-checkbox "></label>
                                            </div>
                                        </div>

                                        <div className="switch-wrap d-flex justify-content-between ">
                                            <p>2. Job assistance</p>
                                            <div className="primary-checkbox">
                                                <input
                                                    type="checkbox"
                                                    id="checkbox"
                                                    name="jobAssistance"
                                                    onChange={
                                                        (e) => {
                                                            onChange(e)
                                                        }
                                                    }
                                                    value={jobAssistance}
                                                    checked={jobAssistance === true} />
                                                <label htmlFor="primary-checkbox "></label>
                                            </div>
                                        </div>

                                        <div className="switch-wrap d-flex justify-content-between ">
                                            <p>3. Job Gaurantee</p>
                                            <div className="primary-checkbox">
                                                <input
                                                    type="checkbox"
                                                    id="checkbox"
                                                    name="jobGuarantee"
                                                    onChange={
                                                        (e) => {
                                                            onChange(e)
                                                        }
                                                    }
                                                    value={jobGuarantee}
                                                    checked={jobGuarantee === true} />
                                                <label htmlFor="primary-checkbox"></label>
                                            </div>
                                        </div>

                                        <div className="switch-wrap d-flex justify-content-between ">
                                            <p>4. Accept Gi </p>
                                            <div className="primary-checkbox ">
                                                <input
                                                    type="checkbox"
                                                    id="checkbox"
                                                    name='acceptGi'
                                                    onChange={
                                                        (e) => {
                                                            onChange(e)
                                                        }
                                                    }
                                                    value={acceptGi}
                                                    checked={acceptGi === true} />
                                                <label htmlFor="primary-checkbox "></label>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-12 posts-list d-flex align-items-center justify-content-center">
                            <Link to="/Bootcamps" className="primary-btn" onClick={onSubmit}>Add Bootcamp</Link >
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default AddBootcamp
