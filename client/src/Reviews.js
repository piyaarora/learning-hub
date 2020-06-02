import React, { Component } from 'react'
import Navigation from './Navigation';
import Footer from './Footer';
import { Link } from 'react-router-dom';

class Reviews extends Component {
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
                                    Bootcamp Reviews
					            </h1>
                                <p>In the history of modern astronomy, there is probably no one greater leap forward than the building and launch of
						the space telescope.</p>
                                <div class="link-nav">
                                    <span class="box">
                                        <Link to="#">Home </Link>
                                        <i class="lnr lnr-arrow-right"></i>
                                        <Link to="blog-home.html">reviews</Link>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- End Banner Area --> */}

                {/* <!-- Start post-content Area --> */}
                <section class=" single-post-area">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-8">
                                <h3>Average Rating: 9.7</h3>

                                <div class="comments-area">
                                    <h4>05 Comments</h4>
                                    <div class="comment-list">
                                        <div class="single-comment justify-content-between d-flex">
                                            <div class="user justify-content-between d-flex">
                                                <div class="thumb">
                                                    <img src="img/blog/c1.jpg" alt="" />
                                                </div>
                                                <div class="desc">
                                                    <h5><Link to="#">Shifali</Link></h5>
                                                    <p class="date">Jan 14, 2020  </p>
                                                    <p class="comment">
                                                        tons of knowledge. learned a lot
										            </p>
                                                </div>
                                            </div>
                                            <div class="reply-btn">
                                                <Link to="" class="btn-reply text-uppercase">reply</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="comment-list left-padding">
                                        <div class="single-comment justify-content-between d-flex">
                                            <div class="user justify-content-between d-flex">
                                                <div class="thumb">
                                                    <img src="img/blog/c2.jpg" alt="" />
                                                </div>
                                                <div class="desc">
                                                    <h5><Link to="#">liza </Link></h5>
                                                    <p class="date">jan 24, 2020 </p>
                                                    <p class="comment">
                                                        Great overall experience.
										            </p>
                                                </div>
                                            </div>
                                            <div class="reply-btn">
                                                <Link to="" class="btn-reply text-uppercase">reply</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="comment-list left-padding">
                                        <div class="single-comment justify-content-between d-flex">
                                            <div class="user justify-content-between d-flex">
                                                <div class="thumb">
                                                    <img src="img/blog/c3.jpg" alt="" />
                                                </div>
                                                <div class="desc">
                                                    <h5><Link to="#">Stephen </Link></h5>
                                                    <p class="date">Feb 16, 2020  </p>
                                                    <p class="comment">
                                                        Not at all good
										            </p>
                                                </div>
                                            </div>
                                            <div class="reply-btn">
                                                <Link to="" class="btn-reply text-uppercase">reply</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="comment-list">
                                        <div class="single-comment justify-content-between d-flex">
                                            <div class="user justify-content-between d-flex">
                                                <div class="thumb">
                                                    <img src="img/blog/c4.jpg" alt="" />
                                                </div>
                                                <div class="desc">
                                                    <h5><Link to="#">Maria Richie</Link></h5>
                                                    <p class="date">Feb 23, 2020 </p>
                                                    <p class="comment">
                                                        Never say goodbye till the end comes!
										            </p>
                                                </div>
                                            </div>
                                            <div class="reply-btn">
                                                <Link to="" class="btn-reply text-uppercase">reply</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="comment-list">
                                        <div class="single-comment justify-content-between d-flex">
                                            <div class="user justify-content-between d-flex">
                                                <div class="thumb">
                                                    <img src="img/blog/c5.jpg" alt="" />
                                                </div>
                                                <div class="desc">
                                                    <h5><Link to="#">Ina Hayes</Link></h5>
                                                    <p class="date">March 10, 2020</p>
                                                    <p class="comment">
                                                        Best instructors
										            </p>
                                                </div>
                                            </div>
                                            <div class="reply-btn">
                                                <Link to="" class="btn-reply text-uppercase">reply</Link>
                                            </div>
                                        </div>
                                    </div>


                                </div>

                                {/* pagination */}
                                <nav class="blog-pagination justify-content-center d-flex">
                                    <ul class="pagination">
                                        <li class="page-item">
                                            <Link to="#" class="page-link" aria-label="Previous">
                                                <span aria-hidden="true">
                                                    <span class="lnr lnr-chevron-left"></span>
                                                </span>
                                            </Link>
                                        </li>
                                        <li class="page-item"><Link to="#" class="page-link">01</Link></li>
                                        <li class="page-item active"><Link to="#" class="page-link">02</Link></li>
                                        <li class="page-item"><Link to="#" class="page-link">03</Link></li>
                                        <li class="page-item"><Link to="#" class="page-link">04</Link></li>
                                        <li class="page-item"><Link to="#" class="page-link">09</Link></li>
                                        <li class="page-item">
                                            <Link to="#" class="page-link" aria-label="Next">
                                                <span aria-hidden="true">
                                                    <span class="lnr lnr-chevron-right"></span>
                                                </span>
                                            </Link>
                                        </li>
                                    </ul>
                                </nav>
                            </div>

                            {/* sidebar */}

                            <div class="col-lg-4 sidebar-widgets">
                                <div class="widget-wrap">
                                    {/* author of course */}
                                    <div class="single-sidebar-widget user-info-widget">
                                        <img src="img/blog/user-info.png" alt="" />
                                        <Link to="#"><h4>Charlie Barber</h4></Link>
                                        <p>
                                            bootcamp publisher
										</p>

                                        <ul class="social-links">
                                            <li><Link to="#"><i class="fa fa-facebook"></i></Link></li>
                                            <li><Link to="#"><i class="fa fa-twitter"></i></Link></li>
                                            <li><Link to="#"><i class="fa fa-github"></i></Link></li>
                                            <li><Link to="#"><i class="fa fa-behance"></i></Link></li>
                                        </ul>
                                        <p>
                                            Boot camps have its supporters andit sdetractors. Some people do not understand why you should have to spend money on boot
                                            camp when you can get. Boot camps have itssuppor ters andits detractors.
										</p>
                                    </div>

                                    <p class="text-bottom d-flex align-items-center justify-content-center flex-middle">

                                        <Link to="#" class="primary-btn">Write review.. <i class="lnr lnr-bubble"></i></Link>
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
                <Footer />
            </div >
        )
    }
}

export default Reviews
