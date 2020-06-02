import React, { Component } from 'react'
import Navigation from './Navigation';
import Footer from './Footer';
import { Link } from 'react-router-dom';

class AddCourse extends Component {
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
                                    Create New Course
					            </h1>
                                <p>In the history of modern astronomy, there is probably no one greater leap forward than the building and launch of
						the space telescope.</p>
                                <div class="link-nav">
                                    <span class="box">
                                        <Link to="#">Home</Link>
                                        <i class="lnr lnr-arrow-right"></i>
                                        <Link to="blog-home.html">Add Bootcamp</Link>
                                        <i class="lnr lnr-arrow-right"></i>
                                        <Link to="blog-home.html">Add Course</Link>
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
                                    <h4>Add Course</h4>
                                    <form>
                                        <div class="form-group">
                                            <input type="text" class="form-control" id="title" placeholder="Add Title" onFocus="this.placeholder = ''" onblur="this.placeholder = 'Enter Title'" />
                                        </div>

                                        <div class="form-group">
                                            <input type="text" class="form-control" id="duration" placeholder="Duration in weeks" onFocus="this.placeholder = ''" onblur="this.placeholder = 'duration'" />
                                        </div>

                                        <div class="form-group">
                                            <input type="text" class="form-control" id="cost" placeholder="Cost of course" onFocus="this.placeholder = ''" onblur="this.placeholder = 'cost'" />
                                        </div>

                                        <div class="form-group">
                                            <div class="input-group-icon mt-10">
                                                <div class="form-select" id="default-select" >
                                                    <select>
                                                        <option value="1 ">Minimum skill Required</option>
                                                        <option value="1 ">Beginner</option>
                                                        <option value="1 ">Intermediate</option>
                                                        <option value="1 ">Advance</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <textarea class="form-control mb-10" rows="6" name="message" placeholder="Description (What this course about)" onFocus="this.placeholder = ''" onblur="this.placeholder = 'Description'"
                                                required=""></textarea>
                                        </div>
                                        <div class="form-check align-item-start">
                                            <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                            <label class="form-check-label " for="exampleCheck1">Scholarship Available</label>
                                        </div>
                                        <Link to="#" class="primary-btn">Add Course</Link>
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

export default AddCourse
