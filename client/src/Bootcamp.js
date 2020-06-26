import React from 'react'
import Navigation from './Navigation';
import Footer from './Footer';
import { Link } from 'react-router-dom';

const Bootcamp = () => {
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
								Code your algorithms
							</h1>
							<p>Learn from basics to advance concepts of Data Structures and algorithms</p>
							<div class="link-nav">
								<span class="box">
									<Link href="#">Home </Link>
									<i class="lnr lnr-arrow-right"></i>
									<Link href="#">Bootcamps</Link>
									<i class="lnr lnr-arrow-right"></i>
									<Link href="#">Bootcamp</Link>
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
							<div class="single-post row">
								<div class="col-lg-12">
									<div class="feature-img">
										<img class="img-fluid" src="img/image_4.jpg" alt="" />
									</div>

								</div>

								<div class="col-lg-3  col-md-3 meta-details">
									<ul class="tags">
										<li><Link href="#">Location: Access from anywhere online</Link></li>
									</ul>
									<div class="user-details row">
										<p class="user-name col-lg-12 col-md-12 col-6"><Link to="#">Alen Walker</Link> <span class="lnr lnr-user"></span></p>
										<p class="date col-lg-12 col-md-12 col-6"><Link to="#">12 Jan, 2020</Link> <span class="lnr lnr-calendar-full"></span></p>
										<p class="view col-lg-12 col-md-12 col-6"><Link to="#">1.2k Views</Link> <span class="lnr lnr-eye"></span></p>
										<p class="view col-lg-12 col-md-12 col-6"><Link to="#">ratings: 9.8</Link> <span class="lnr lnr-star"></span></p>
										<p class="comments col-lg-12 col-md-12 col-6"><Link to="#"> Comments</Link> <span class="lnr lnr-bubble"></span></p>
										<ul class="social-links col-lg-12 col-md-12 col-6">
											<li><Link to="#"><i class="fa fa-facebook"></i></Link></li>
											<li><Link to="#"><i class="fa fa-twitter"></i></Link></li>
											<li><Link to="#"><i class="fa fa-github"></i></Link></li>
											<li><Link to="#"><i class="fa fa-behance"></i></Link></li>
										</ul>
									</div>
								</div>
								<div class="col-lg-9 col-md-9">
									<h3 class="mt-20 mb-20">Code Your Algorithms</h3>
									<p class="excert">
										It is a coding camp that focuses on the basics to advance concepts you need to get a high paying job as a software developer</p>
									<p>
										It will be scheduled according to the speed and need of the batch varies from 4-6 months. with proper concept clearity.</p>
									<h5>Average cost: $10000</h5>
								</div>

								<div class="col-lg-12">
									<div class="quotes">
										This Bootcamp contains following Courses
										</div>
								</div>
							</div>

							{/* course 1 */}
							<div class="single-post row">
								<div class="col-lg-12 col-md-12">
									<div class="feature-img">
										<img class="img-fluid" src="img/image_2.jpg" alt="" />
									</div>

									<div class="col-md-12 mt-sm-30">
										<Link
											class="posts-title" href="blog-single.html"><h3>Basics of c and c++</h3></Link>
										<h5 class="mb-20">Duration: 4 weeks</h5>
										<p class="excert">
											It will provide c and c++ concepts from basics so that it can be understandable by layman also
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

							{/* course 2 */}
							<div class="single-post row">
								<div class="col-lg-12 col-md-12">
									<div class="feature-img">
										<img class="img-fluid" src="img/blog/feature-img5.jpg" alt="" />
									</div>

									<div class="col-md-12 mt-sm-30">
										<Link class="posts-title" href="blog-single.html"><h3>Advance concepts of c++</h3></Link>
										<h5 class="mb-20">Duration: 3 weeks</h5>
										<p class="excert">
											Advance concepts of c++ by polymorphism, inheritance, encapsulation and other oops concepts will be covered.
											</p>

										<div class="">
											<ul class="unordered-list">
												<li>Cost : $8000 USD</li>
												<li>Skill level:Advance</li>
												<li>Scholarship available: yes</li>
											</ul>
										</div>
									</div>
									<Link to="blog-single.html" class="primary-btn">View More</Link>
								</div>
							</div>

							{/* course 3 */}
							<div class="single-post row">
								<div class="col-lg-12 col-md-12">
									<div class="feature-img">
										<img class="img-fluid" src="img/image_1.jpg" alt="" />
									</div>

									<div class="col-md-12 mt-sm-30">
										<Link class="posts-title" href="blog-single.html"><h3>Data structures and algorithms </h3></Link>
										<h5 class="mb-20">Duration: 3 weeks</h5>
										<p class="excert">
											All the concepts of arrays, trees,stack,queue and much more will be covered. All the searching and sorting algorithms will be designed using c and c++ concepts											</p>

										<div class="">
											<ul class="unordered-list">
												<li>Cost : $8000 USD</li>
												<li>Skill level:Advance</li>
												<li>Scholarship available: yes</li>
											</ul>
										</div>
									</div>
									<Link to="blog-single.html" class="primary-btn">View More</Link>
								</div>
							</div>

							{/* pagination-(prev-next) */}
							<div class="navigation-area">
								<div class="row">
									<div class="col-lg-6 col-md-6 col-12 nav-left flex-row d-flex justify-content-start align-items-center">
										<div class="thumb">
											{/* <Link to="#"><img class="img-fluid" src="img/blog/prev.jpg" alt="" /></Link> */}
										</div>
										<div class="arrow">
											<Link to="#"><span class="lnr lnr-arrow-left"></span></Link>
										</div>
										<div class="detials">
											<p>Prev Post</p>
											{/* <Link to="#"><h4>Space The Final Frontier</h4></Link> */}
										</div>
									</div>
									<div class="col-lg-6 col-md-6 col-12 nav-right flex-row d-flex justify-content-end align-items-center">
										<div class="detials">
											<p>Next Post</p>
											{/* <Link to="#"><h4>Telescopes 101</h4></Link> */}
										</div>
										<div class="arrow">
											<Link to="#"><span class="lnr text-white lnr-arrow-right"></span></Link>
										</div>
										<div class="thumb">
											{/* <Link to="#"><img class="img-fluid" src="img/blog/next.jpg" alt="" /></Link> */}
										</div>
									</div>
								</div>
							</div>

							{/* rate options */}


							{/* reviews about */}
							<div class="comments-area">
								<h4>05 Comments</h4>
								<div class="comment-list">
									<div class="single-comment justify-content-between d-flex">
										<div class="user justify-content-between d-flex">
											<div class="thumb">
												<img src="img/blog/c1.jpg" alt="" />
											</div>
											<div class="desc">
												<h5><Link to="#">Emilly Blunt</Link></h5>
												<p class="date">December 4, 2019 at 3:12 pm </p>
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
								<div class="comment-list left-padding">
									<div class="single-comment justify-content-between d-flex">
										<div class="user justify-content-between d-flex">
											<div class="thumb">
												<img src="img/blog/c2.jpg" alt="" />
											</div>
											<div class="desc">
												<h5><Link to="#">Elsie Cunningham</Link></h5>
												<p class="date">December 4, 2019 at 3:12 pm </p>
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
								<div class="comment-list left-padding">
									<div class="single-comment justify-content-between d-flex">
										<div class="user justify-content-between d-flex">
											<div class="thumb">
												<img src="img/blog/c3.jpg" alt="" />
											</div>
											<div class="desc">
												<h5><Link to="#">Annie Stephens</Link></h5>
												<p class="date">December 4, 2019 at 3:12 pm </p>
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
												<img src="img/blog/c4.jpg" alt="" />
											</div>
											<div class="desc">
												<h5><Link to="#">Maria Luna</Link></h5>
												<p class="date">December 4, 2019 at 3:12 pm </p>
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
												<p class="date">December 4, 2019 at 3:12 pm </p>
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
							</div>

							{/* Write a comment  */}
							<div class="comment-form">
								<h4>Leave a comment</h4>
								<form>
									<div class="form-group form-inline">
										<div class="form-group col-lg-6 col-md-12 name">
											<input type="text" class="form-control" id="name" placeholder="Enter Name" onFocus="this.placeholder = ''" onblur="this.placeholder = 'Enter Name'" />
										</div>
										<div class="form-group col-lg-6 col-md-12 email">
											<input type="email" class="form-control" id="email" placeholder="Enter email address" onFocus="this.placeholder = ''" onblur="this.placeholder = 'Enter email address'" />
										</div>
									</div>
									<div class="form-group">
										<input type="text" class="form-control" id="subject" placeholder="Subject" onFocus="this.placeholder = ''" onblur="this.placeholder = 'Subject'" />
									</div>
									<div class="form-group">
										<textarea class="form-control mb-10" rows="5" name="message" placeholder="Messege" onFocus="this.placeholder = ''" onblur="this.placeholder = 'Messege'"
											required=""></textarea>
									</div>
									<Link to="#" class="primary-btn">Post Comment</Link>
								</form>
							</div>
						</div>

						{/* sidebar */}

						<div class="col-lg-4 sidebar-widgets">
							<div class="widget-wrap">
								{/* search course */}
								<div class="single-sidebar-widget search-widget">
									<form class="search-form" action="#">
										<input placeholder="Search Posts" name="search" type="text" onFocus="this.placeholder = ''" onblur="this.placeholder = 'Search Posts'" />
										<button type="submit"><i class="fa fa-search"></i></button>
									</form>
								</div>
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
									<Link to="#"><img class="img-fluid" src="img/blog/Linkds-banner.jpg" alt="" /></Link>
								</div>
								<div class="single-sidebar-widget post-category-widget">
									<h4 class="category-title">options available</h4>
									<ul class="cat-list">
										<li>
											<Link to="#" class="d-flex justify-content-between">
												<p>Housing</p>
												<p>yes</p>
											</Link>
										</li>
										<li>
											<Link to="#" class="d-flex justify-content-between">
												<p>Job assistance</p>
												<p>yes</p>
											</Link>
										</li>
										<li>
											<Link to="#" class="d-flex justify-content-between">
												<p>Job gaurantee</p>
												<p>No</p>
											</Link>
										</li>
										<li>
											<Link to="#" class="d-flex justify-content-between">
												<p>Accept GI bill</p>
												<p>yes</p>
											</Link>
										</li>
										<div class="navigation-area">
											<div class="row">
												<div class="col-lg-6 col-md-6 col-12 nav-left flex-row d-flex justify-content-start align-items-center">
													<Link to="#" class="primary-default">Rate</Link>
												</div>
												<div class="col-lg-6 col-md-6 col-12 nav-right flex-row d-flex justify-content-end align-items-center">
													<Link to="#" class="primary-default">Visit website</Link>
												</div>
											</div>
										</div>


									</ul>
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
												<input type="text" class="form-control" id="inlineFormInputGroup" placeholder="Enter email" onFocus="this.placeholder = ''"
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
			<Footer />
		</div>
	)
}


export default Bootcamp
