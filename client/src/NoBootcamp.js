import React, { Component } from 'react'
import Navigation from './Navigation';
import { Link } from 'react-router-dom';
import Footer from './Footer';

class NoBootcamp extends Component {
    render() {
        return (
            <div>
                <Navigation />
                {/* <!-- End Header Area --> */}

                {/* <!-- Start Banner Area --> */}
                <section class="banner-area relative">
                    <div class="container">
                        <div class="row d-flex align-items-center justify-content-center">
                            <div class="about-content col-lg-12">
                                <h1 class="text-white">
                                    No bootcamp is available
					            </h1>
                                <p>In the history of modern astronomy, there is probably no one greater leap forward than the building and launch of
						the space telescope.</p>
                                <div class="link-nav">
                                    <span class="box">
                                        <Link to="#">Home </Link>
                                        <i class="lnr lnr-arrow-right"></i>
                                        <Link to="#">NoBootcamp</Link>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- End Banner Area --> */}

                {/* <!-- Start post-content Area --> */}
                <section class="post-content-area single-post-area d-flex align-items-center justify-content-center flex-middle">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-12 posts-list">

                                {/* single post component */}
                                {/* course 1 */}
                                <div class="single-post row">
                                    <div class="col-lg-12 col-md-12">

                                        <div class="col-md-12 mt-sm-30">
                                            <Link class="posts-title" href="blog-single.html"><h3>Add your first bootcamp</h3></Link>
                                            <h5><em>**Instructions</em></h5>
                                            <div class="">
                                                <ul class="unordered-list">
                                                    <li>You can only add one bootcamp per account</li>
                                                    <li>You must be affiliated with the bootcamp in some way in order to add it to DevCamper</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Link to="#" class="primary-btn">Add Bootcamp</Link>
                    </div>
                </section>
                <Footer />
            </div>

        )
    }
}

export default NoBootcamp