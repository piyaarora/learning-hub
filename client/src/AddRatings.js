import React, { Component } from 'react'
import Navigation from './Navigation';
import Footer from './Footer';
import { Link } from 'react-router-dom';

class AddRatings extends Component {
    render() {
        return (
            <div>
                <Navigation />

                {/* <!-- Start Banner Area --> */}
                <section class="banner-area relative">
                    <div class="container">
                        <div class="row d-flex align-items-center justify-content-center">
                            <div class="about-content col-lg-12">
                                <h1 class="text-white">
                                    Rate this Bootcamp
					            </h1>
                                <p>In the history of modern astronomy, there is probably no one greater leap forward than the building and launch of
						the space telescope.</p>
                                <div class="link-nav">
                                    <span class="box">
                                        <Link to="#">Home</Link>
                                        <i class="lnr lnr-arrow-right"></i>
                                        <Link to="blog-home.html">Bootcamp</Link>
                                        <i class="lnr lnr-arrow-right"></i>
                                        <Link to="blog-home.html">Rate Bootcamp</Link>
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
                                    <h2>Dev Camper Bootcamp</h2>
                                    <h4>Rate this Bootcamp</h4>
                                    <form>
                                        <div class="form-group">
                                            <input type="text" class="form-control" id="title" placeholder="Add Title" onFocus="this.placeholder = ''" onblur="this.placeholder = 'Enter Title'" />
                                        </div>
                                        <div class="form-group">
                                            <textarea class="form-control mb-10" rows="6" name="message" placeholder="Write your Reviews " onFocus="this.placeholder = ''" onblur="this.placeholder = 'Description'"
                                                required=""></textarea>
                                        </div>


                                        <div class="form-group">
                                            <div class="input-group-icon mt-10">
                                                <div class="form-select" id="default-select" >
                                                    <select>
                                                        <option value="1 ">Rate it</option>
                                                        <option value="1 ">10</option>
                                                        <option value="1 ">9</option>
                                                        <option value="1 ">8</option>
                                                        <option value="1 ">7</option>
                                                        <option value="1 ">6</option>
                                                        <option value="1 ">5</option>
                                                        <option value="1 ">4</option>
                                                        <option value="1 ">3</option>
                                                        <option value="1 ">2</option>

                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <p class="text-bottom">
                                            *You must have attended and graduated this bootcamp to review
										</p>

                                        <Link to="#" class="primary-btn">Submit Review</Link>
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

export default AddRatings
