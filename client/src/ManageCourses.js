import React, { Component } from 'react'
import Navigation from './Navigation';
import Footer from './Footer';
import { Link } from 'react-router-dom';


class ManageCourses extends Component {
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
                                    Manage Courses
					            </h1>
                                <p>In the history of modern astronomy, there is probably no one greater leap forward than the building and launch of
						the space telescope.</p>
                                <div class="link-nav">
                                    <span class="box">
                                        <Link to="#">Home</Link >
                                        <i class="lnr lnr-arrow-right"></i>
                                        <Link to="blog-home.html">Manage Courses</Link >
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
                                    <h3 class="pb-40">Manage Courses</h3>
                                    <div class="row">
                                        <div class="col-md-3">
                                            <img src="img/elements/d.jpg" alt="" class="img-fluid" />
                                        </div>
                                        <div class="col-md-9 ">
                                            <h5>Devworks Bootcamp</h5>
                                            <p>Loacted at: Boston,US</p>
                                            <p>Web development,UX/UI design</p>
                                        </div>

                                    </div>

                                    <form>
                                        <div class="col-lg-12">
                                            <div class="form-group">
                                                <span class="form-group col-lg-3 col-md-12">
                                                    <Link to="#" class="primary-btn">Add Courses</Link >

                                                </span>
                                            </div>
                                        </div>


                                    </form>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                <div class="container">
                    <div class="row justify-content-center">

                        <div class="col-8 align-self-center posts-list ">
                            <div class="section-top-border">
                                <h3 class="text-center">Edit Details</h3>

                                <div class="progress-table-wrap ">
                                    <div class="progress-table">
                                        <div class="table-head">
                                            <div class="serial">Sr no.</div>
                                            <div class="country">Course</div>
                                            <div class="visit ">Edit</div>
                                            <div class="percentage ">Delete</div>
                                        </div>
                                        <div class="table-row">
                                            <div class="serial">01</div>
                                            <div class="country"> <img src="img/blog/pp1.jpg" alt="flag" />Full Stack react-node</div>
                                            <div class="visit">
                                                <i class="lnr lnr-pencil"></i>
                                            </div>
                                            <div class="percentage">
                                                <i class="lnr lnr-trash"></i>

                                            </div>
                                        </div>
                                        <div class="table-row">
                                            <div class="serial">02</div>
                                            <div class="country"> <img src="img/blog/pp2.jpg" alt="flag" />Python for beginner</div>
                                            <div class="visit">
                                                <i class="lnr lnr-pencil"></i>
                                            </div>
                                            <div class="percentage">
                                                <i class="lnr lnr-trash"></i>

                                            </div>
                                        </div>
                                        <div class="table-row">
                                            <div class="serial">03</div>
                                            <div class="country"> <img src="img/blog/pp3.jpg" alt="flag" />design your web</div>
                                            <div class="visit">
                                                <i class="lnr lnr-pencil"></i>
                                            </div>
                                            <div class="percentage">
                                                <i class="lnr lnr-trash"></i>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>

        )
    }
}

export default ManageCourses
