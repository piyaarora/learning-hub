import React, { Component } from 'react'
import Navigation from './Navigation';
import Footer from './Footer';
import { Link } from 'react-router-dom';

class ManageReviews
    extends Component {
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
                                    Manage Reviews
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
                            <div class="col-8 align-self-center  posts-list ">
                                <div class="comment-form text-left">
                                    <h3 class="pb-40 text-center">Bootcamp Reviews</h3>

                                    <div class="progress-table-wrap ">
                                        <div class="progress-table">
                                            <div class="table-head">
                                                <div class="country">Course</div>
                                                <div class="visit">Edit</div>
                                                <div class="percentage">Delete</div>
                                            </div>
                                            <div class="table-row">
                                                <div class="country"> <img src="img/blog/pp1.jpg" alt="flag" />Bootcamp 1</div>
                                                <div class="visit ">
                                                    <i class="lnr lnr-pencil"></i>
                                                </div>
                                                <div class="percentage">
                                                    <i class="lnr lnr-trash"></i>

                                                </div>
                                            </div>
                                            <div class="table-row">
                                                <div class="country"> <img src="img/blog/pp2.jpg" alt="flag" />Bootcamp 2</div>
                                                <div class="visit">
                                                    <i class="lnr lnr-pencil"></i>
                                                </div>
                                                <div class="percentage">
                                                    <i class="lnr lnr-trash"></i>

                                                </div>
                                            </div>
                                            <div class="table-row">
                                                <div class="country"> <img src="img/blog/pp3.jpg" alt="flag" />Bootcamp 3</div>
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
                </section>

                <div class="container">
                    <div class="row justify-content-center">

                        <div class="col-8 align-self-center justify-content-md-center posts-list ">
                            <div class="section-top-border">
                                <h3 class="text-center">Edit Details</h3>

                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>

        )
    }
}

export default ManageReviews

