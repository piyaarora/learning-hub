import React, { Component } from 'react'
import Navigation from './Navigation';
import { Link } from 'react-router-dom';

class Course extends Component {
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
                                    Full stack react-node
					            </h1>
                                <p>In the history of modern astronomy, there is probably no one greater leap forward than the building and launch of
						the space telescope.</p>
                                <div class="link-nav">
                                    <span class="box">
                                        <Link to="#">Home </Link>
                                        <i class="lnr lnr-arrow-right"></i>
                                        <Link to="#">Blog</Link>
                                        <i class="lnr lnr-arrow-right"></i>
                                        <Link to="#">Blog Details</Link>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- End Banner Area --> */}

                {/* <!-- Start post-content Area --> */}
                <section class="post-content-area single-post-area">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-8 posts-list">

                                {/* single post component */}
                                {/* course 1 */}
                                <div class="single-post row">
                                    <div class="col-lg-12 col-md-12">
                                        <div class="feature-img">
                                            <img class="img-fluid" src="img/blog/feature-img5.jpg" alt="" />
                                        </div>

                                        <div class="col-md-12 mt-sm-30">
                                            <Link class="posts-title" href="blog-single.html"><h3>Telescopes 101</h3></Link>
                                            <h5 class="mb-20">Duration: 5 weeks</h5>
                                            <p class="excert">
                                                MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money
                                                on boot camp when you can get the MCSE study materials yourself at a fraction.
											</p>

                                            <div class="">
                                                <ul class="unordered-list">
                                                    <li>Cost : $8000 USD</li>
                                                    <li>Skill level:Beginner</li>
                                                    <li>Scholarship available: yes</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <Link to="blog-single.html" class="primary-btn">View More</Link>
                                    </div>
                                </div>


                                {/* Write a comment  */}
                                <div class="comment-form">
                                    <h4>Leave a comment</h4>
                                    <form>
                                        <div class="form-group form-inline">
                                            <div class="form-group col-lg-6 col-md-12 name">
                                                <input type="text" class="form-control" id="name" placeholder="Enter Name" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter Name'" />
                                            </div>
                                            <div class="form-group col-lg-6 col-md-12 email">
                                                <input type="email" class="form-control" id="email" placeholder="Enter email address" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter email address'" />
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <input type="text" class="form-control" id="subject" placeholder="Subject" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Subject'" />
                                        </div>
                                        <div class="form-group">
                                            <textarea class="form-control mb-10" rows="5" name="message" placeholder="Messege" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Messege'"
                                                required=""></textarea>
                                        </div>
                                        <Link to="#" class="primary-btn">Post Comment</Link>
                                    </form>
                                </div>
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

                                    <div class="single-sidebar-widget ads-widget">
                                        <Link to="#"><img class="img-fluid" src="img/blog/ads-banner.jpg" alt="" /></Link>
                                    </div>

                                    {/* newsletter */}
                                    <div class="single-sidebar-widget newsletter-widget">
                                        <h4 class="newsletter-title">Newsletter</h4>
                                        <p>
                                            Here, I focus on a range of items and features that we use in life without giving them a second thought.
										</p>
                                        <div class="form-group d-flex flex-row">
                                            <div class="col-autos">
                                                <div class="input-group">
                                                    <div class="input-group-prepend">
                                                        <div class="input-group-text"><i class="fa fa-envelope" aria-hidden="true"></i>
                                                        </div>
                                                    </div>
                                                    <input type="text" class="form-control" id="inlineFormInputGroup" placeholder="Enter email" onfocus="this.placeholder = ''"
                                                        onblur="this.placeholder = 'Enter email'" />
                                                </div>
                                            </div>
                                            <Link to="#" class="bbtns">Subcribe</Link>
                                        </div>
                                        <p class="text-bottom">
                                            You can unsubscribe at any time
										</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>

        )
    }
}

export default Course