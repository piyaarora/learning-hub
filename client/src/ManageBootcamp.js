import React, { Component } from 'react'
import Navigation from './Navigation';
import Footer from './Footer';
import { Link } from 'react-router-dom';

class ManageBootcamp extends Component {
    render() {
        return (
            <div>
                <Navigation />

                {/* <!-- Start Banner Area --> */}
                <section class="banner-area relative">
                    <div class="container">
                        <div class="row d-flex align-items-center ">
                            <div class="about-content col-lg-12">
                                <h1 class="text-white">
                                    Manage Bootcamp
					            </h1>
                                <p>In the history of modern astronomy, there is probably no one greater leap forward than the building and launch of
						the space telescope.</p>
                                <div class="link-nav">
                                    <span class="box">
                                        <Link to="#">Home</Link >
                                        <i class="lnr lnr-arrow-right"></i>
                                        <Link to="blog-home.html">Manage Bootcamp</Link >
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- End Banner Area --> */}

                {/* <!-- Start post-content Area --> */}
                <section class="post-content-area single-post-area ">
                    <div class="container">

                        <div class="row justify-content-center">
                            <div class="col-8 align-self-center justify-content-md-center posts-list ">
                                <div class="comment-form">
                                    <h4>Manage Bootcamp</h4>
                                    <div class="row">
                                        <div class="col-md-3">
                                            <img src="img/elements/d.jpg" alt="" class="img-fluid" />
                                        </div>
                                        <div class="col-md-9 text-left">
                                            <h5>Devworks Bootcamp</h5>
                                            <p>Loacted at: Boston,US</p>
                                            <p>Web development,UX/UI design</p>
                                        </div>
                                    </div>

                                    <form>
                                        <div class="col-lg-12">
                                            <div class="form-group">
                                                <label for="upload image"><strong>Upload image</strong></label>
                                                <input type="file" class="form-control" id="title" placeholder="Add Title" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter Title'" />
                                            </div>
                                        </div>
                                        <ul class="unordered-list text-left">
                                            <li>*You can only add one bootcamp per account.</li>
                                            <li>*You must be affiliated with the bootcamp in some way in order to add it to DevCamper.</li>
                                        </ul>
                                        <span class="form-group col-lg-3 col-md-12">
                                            <Link to="#" class="primary-btn">Edit Bootcamp</Link >

                                        </span>

                                        <span class="form-group col-lg-3 col-md-12">
                                            <Link to="/ManageCourses" class="primary-btn">Manage Courses</Link >

                                        </span>

                                        <span class="form-group col-lg-3 col-md-12">
                                            <Link to="#" class="primary-btn">Remove Bootcamp</Link >

                                        </span>


                                    </form>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
                <Footer />
            </div>
        )
    }
}

export default ManageBootcamp
