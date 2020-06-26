import React, { useContext } from 'react'
import Navigation from './Navigation';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import BootcampContext from './Context/Bootcamp/BootcampContext';
import BootcampItem from './BootcampItem';

const Bootcamps = () => {
	const bootcampContext = useContext(BootcampContext)
	const { bootcamps } = bootcampContext;
	return (
		<div>
			<Navigation />
			<section class="banner-area relative">
				<div class="container">
					<div class="row d-flex align-items-center justify-content-center">
						<div class="about-content col-lg-12">
							<h1 class="text-white">
								All Bootcamps
							</h1>
							<p>Platform to explore and learn through different <br /> Bootcamps and their courses.
						</p>
							<div class="link-nav">
								<span class="box">
									<Link to="#">Home </Link>
									<i class="lnr lnr-arrow-right"></i>
									<Link to="#">Bootcamps</Link>
								</span>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* <!-- End Banner Area --> */}

			{/* <!-- Start top-category-widget Area (Left Side)--> */}
			<section class="top-category-widget-area pt-90 pb-90 ">
				<div class="container">
					<div class="row">
						<div class="col-lg-4">
							<div class="single-cat-widget">
								<div class="content relative">
									<div class="overlay overlay-bg"></div>
									<Link to="#" target="_blank">
										<div class="thumb">
											<img class="content-image img-fluid d-block mx-auto" src="img/image_1.jpg" alt="" />
										</div>
										<div class="content-details">
											<h4 class="content-title mx-auto text-uppercase">Data Structures</h4>
											<span></span>
											<p>Be a part of Data Structures Bootcamp</p>
										</div>
									</Link>
								</div>
							</div>
						</div>
						<div class="col-lg-4">
							<div class="single-cat-widget">
								<div class="content relative">
									<div class="overlay overlay-bg"></div>
									<Link to="#" target="_blank">
										<div class="thumb">
											<img class="content-image img-fluid d-block mx-auto" src="img/image_2.jpg" alt="" />
										</div>
										<div class="content-details">
											<h4 class="content-title mx-auto text-uppercase">Fullstack Development</h4>
											<span></span>
											<p>Be a part of Fullstack Bootcamp</p>
										</div>
									</Link>
								</div>
							</div>
						</div>
						<div class="col-lg-4">
							<div class="single-cat-widget">
								<div class="content relative">
									<div class="overlay overlay-bg"></div>
									<Link to="#" target="_blank">
										<div class="thumb">
											<img class="content-image img-fluid d-block mx-auto" src="img/image_3.jpg" alt="" />
										</div>
										<div class="content-details">
											<h4 class="content-title mx-auto text-uppercase">Machine Learning</h4>
											<span></span>
											<p>Be a part of ML and AI Bootcamp </p>
										</div>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* <!-- End top-category-widget Area --> */}

			{/* <!-- Start post-content Area --> */}
			<section class="post-content-area">
				<div class="container">
					<div class="row">
						<div class="col-lg-8 posts-list">

							{bootcamps.map(bootcamp => (
								<BootcampItem key={bootcamp._id} bootcamp={bootcamp} />
							))}

							{/* **********Pagination********* */}
							<nav class="blog-pagination justify-content-center d-flex">
								<ul class="pagination">
									<li class="page-item">
										<Link to="#" class="page-link" aria-label="Previous">
											<span aria-hidden="true">
												<span class="lnr lnr-chevron-left"></span>
											</span>
										</Link>
									</li>
									<li class="page-item active"><Link to="#" class="page-link">01</Link></li>
									<li class="page-item"><Link to="#" class="page-link">02</Link></li>
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

						{/* **********search******** */}
						<div class="col-lg-4 sidebar-widgets">
							<div class="widget-wrap">
								<div class="single-sidebar-widget search-widget">
									<form class="search-form" action="#">
										<input placeholder="Search Posts" name="search" type="text" />
										<button type="submit"><i class="fa fa-search"></i></button>
									</form>
								</div>

								{/* **********blog******** */}
								<div class="single-sidebar-widget user-info-widget">
									<img src="img/blog/user-info.png" alt="" />
									<Link to="#"><h4>Charlie Barber</h4></Link>
									<p>
										Senior blog writer
									</p>
									<ul class="social-links">
										<li><Link to="#"><i class="fa fa-facebook"></i></Link></li>
										<li><Link to="#"><i class="fa fa-twitter"></i></Link></li>
										<li><Link to="#"><i class="fa fa-github"></i></Link></li>
										<li><Link to="#"><i class="fa fa-behance"></i></Link></li>
									</ul>
									<p>
										Learning hub provides the platform where people can search different bootcamps and their courses according to their interest. It provides a great opportunity to learn through courses of different bootcamps online as well as onsite.
									</p>
								</div>

								{/* **********filter posts******** */}
								<div class="single-sidebar-widget popular-post-widget">
									<h4 class="popular-title">Filter Posts</h4>
									<div class="popular-post-list">

										<div class="single-post-list d-flex flex-row align-items-center">
											<div class="form-select" id="default-select">
												<select>
													<option value="1 ">Cost</option>
													<option value="1 ">20,000</option>
													<option value="1 ">15,000</option>
													<option value="1 ">10,000</option>
													<option value="1 ">8,000</option>
													<option value="1 ">4,000</option>
													<option value="1 ">2,000</option>
													<option value="1 ">None</option>
												</select>
											</div>
										</div>

										<div class="single-post-list d-flex flex-row align-items-center">
											<div class="form-select" id="default-select">
												<select>
													<option value="1 ">Ratings</option>
													<option value="1 ">9+</option>
													<option value="1 ">8+</option>
													<option value="1 ">7+</option>
													<option value="1 ">6+</option>
													<option value="1 ">5+</option>
													<option value="1 ">4+</option>
													<option value="1 ">3+</option>
													<option value="1 ">2+</option>
												</select>
											</div>
										</div>

										<div class="single-post-list d-flex flex-row align-items-center">
											<button href="#" class="primary-btn " style={{ margin: 'auto', padding: 'auto' }} >Find Bootcamps</button>
										</div>

									</div>
								</div>

								{/* **********add blog******** */}
								<div class="single-sidebar-widget ads-widget">
									<Link to="#"><img class="img-fluid" src="img/blog/ads-banner.jpg" alt="" /></Link>
								</div>

								{/* **********newsletter******** */}
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
												<input type="text" class="form-control" id="inlineFormInputGroup" placeholder="Enter email" />
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


export default Bootcamps