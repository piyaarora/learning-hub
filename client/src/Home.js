import React from 'react'
import $ from 'jquery'
import Rocket from './img/rocket.png';
import Navigation from './Navigation';
import Footer from './Footer';
import { Routes } from './common/Routes'

import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';


const Home = () => {

	onscroll = () => {
		$(window).scroll(function () {
			if ($(this).scrollTop() > 100) {
				$('#header').addClass('header-scrolled');
				$('#back-top').fadeIn(500);
			} else {
				$('#header').removeClass('header-scrolled');
				$('#back-top').fadeOut(500);
			}
		});
		$(window).scroll(function () {
			if ($(this).scrollTop() > 10) {
				$('.rocket-img').addClass('go-top');
				$('#back-top').fadeIn(500);
			} else {
				$('.rocket-img').removeClass('go-top');
				$('#back-top').fadeOut(500);
			}
		});
	}

	const buttonHandler = (props) => {
		return (
			this.props.history.push('/Bootcamps')
			// <Redirect to={{
			// 	pathname: {Routes.Bootcamps.url},
			// }} />
		)
	}
	console.log("render");
	return (
		<div>
			<Navigation />
			<section className="home-banner-area relative" >
				<div className="container">
					<div className="row fullscreen d-flex align-items-center justify-content-center" style={{ height: "100vh" }}>
						<div className="banner-content col-lg-8 col-md-12">
							<h1 className="wow fadeIn" data-wow-duration="4s">LEARNING HUB</h1>
							<p className="text-white">
								Platform to explore and learn through different <br /> Bootcamps and their courses.
								</p>
							<div className="input-wrap">
								<form action="" className="form-box d-flex justify-content-between" onSubmit={buttonHandler}>
									<input type="text" placeholder="Search Courses" className="form-control" name="username" />
									<button className="btn primary-btn"><Link to="/Bootcamps" style={{ color: "#fff" }}>
										Search Bootcamps</Link></button>
								</form>
							</div>
						</div>
					</div>
				</div>
				<div className="rocket-img">
					<img src={Rocket} alt="" />
					{onscroll}
				</div>
			</section>
			{/* <!-- End Banner Area --> */}
			{/* <!-- Start About Area --> */}
			<section className="about-area section-gap">
				<div className="container">
					<div className="row align-items-center justify-content-center">
						<div className="col-lg-4 col-md-6 about-left">
							<img className="img-fluid" src="img/about.jpg" alt="" />
						</div>
						<div className="offset-lg-1 col-lg-6 offset-md-0 col-md-12 about-right">
							<h1>
								Offers many Courses <br /> from different Platforms
								</h1>
							<div className="wow fadeIn" data-wow-duration="1s">
								<p>
									Learning hub provides the platform where people can search different bootcamps and their courses according to their interest. It provides a great opportunity to learn through courses of different bootcamps online as well as onsite. It also provides you the opportunity to publish your own bootcamp. You have a great opportunity to Explore yourself. These bootcamps enable students with little coding and development proficiency to focus on the most important aspects of coding and development and immediately apply their new skills to solve real-world problems. The goal of many of these bootcamp attendees is to transition into a career in web development.
									</p>
							</div>
							<Link to="courses.html" className="primary-btn">Explore Bootcamps</Link >
						</div>
					</div>
				</div>
			</section>
			{/* <!-- End About Area --> */}

			{/* <!-- Start Faculty Area --> */}
			<section className="faculty-area section-gap">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-lg-8">
							<div className="section-title text-center">
								<h1>Top Rated Professors</h1>
								<p>
									Some top rated professors with high knowledge
								</p>
							</div>
						</div>
					</div>
					<div className="row justify-content-center d-flex align-items-center">
						<div className="col-lg-3 col-md-6 col-sm-12 single-faculty">
							<div className="thumb d-flex justify-content-center">
								<img className="img-fluid" src="img/faculty/f1.jpg" alt="" />
							</div>
							<div className="meta-text text-center">
								<h4>David Henry</h4>
								<p className="designation">Faculty React and fullstack Developer</p>
								<div className="info wow fadeIn" data-wow-duration="1s" data-wow-delay=".1s">
									<p>
										He has 7 years of experience in React and frontend development.
									</p>
								</div>
								<div className="align-items-center justify-content-center d-flex">
									<Link to="#"><i className="fa fa-facebook"></i></Link >
									<Link to="#"><i className="fa fa-twitter"></i></Link >
									<Link to="#"><i className="fa fa-linkedin"></i></Link >
								</div>
							</div>
						</div>
						<div className="col-lg-3 col-md-6 col-sm-12 single-faculty">
							<div className="thumb d-flex justify-content-center">
								<img className="img-fluid" src="img/faculty/f2.jpg" alt="" />
							</div>
							<div className="meta-text text-center">
								<h4>Rodney Cooper</h4>
								<p className="designation">Faculty Data Science</p>
								<div className="info wow fadeIn" data-wow-duration="1s" data-wow-delay=".3s">
									<p>
										He has 3 years of experience in Data Science and  4 years of experience in Artificial Intelligence.
									</p>
								</div>
								<div className="align-items-center justify-content-center d-flex">
									<Link to="#"><i className="fa fa-facebook"></i></Link >
									<Link to="#"><i className="fa fa-twitter"></i></Link >
									<Link to="#"><i className="fa fa-linkedin"></i></Link >
								</div>
							</div>
						</div>
						<div className="col-lg-3 col-md-6 col-sm-12 single-faculty">
							<div className="thumb d-flex justify-content-center">
								<img className="img-fluid" src="img/faculty/f3.jpg" alt="" />
							</div>
							<div className="meta-text text-center">
								<h4>Alen Walker</h4>
								<p className="designation">Faculty Data Structures</p>
								<div className="info wow fadeIn" data-wow-duration="1s" data-wow-delay=".5s">
									<p>
										He used to teach data structures from last 3 years and 2 years of industrial experience.
									</p>
								</div>
								<div className="align-items-center justify-content-center d-flex">
									<Link to="#"><i className="fa fa-facebook"></i></Link >
									<Link to="#"><i className="fa fa-twitter"></i></Link >
									<Link to="#"><i className="fa fa-linkedin"></i></Link >
								</div>
							</div>
						</div>
						<div className="col-lg-3 col-md-6 col-sm-12 single-faculty">
							<div className="thumb d-flex justify-content-center">
								<img className="img-fluid" src="img/faculty/f4.jpg" alt="" />
							</div>
							<div className="meta-text text-center">
								<h4>Shaina Mohindru</h4>
								<p className="designation">Faculty Python developer</p>
								<div className="info wow fadeIn" data-wow-duration="1s" data-wow-delay=".7s">
									<p>
										She has 6 years of experience in machine Learning and python development.
									</p>
								</div>
								<div className="align-items-center justify-content-center d-flex">
									<Link to="#"><i className="fa fa-facebook"></i></Link >
									<Link to="#"><i className="fa fa-twitter"></i></Link >
									<Link to="#"><i className="fa fa-linkedin"></i></Link >
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* <!-- End Faculty Area --> */}
			{/* <!-- Start Testimonials Area --> */}
			<section className="testimonials-area section-gap">
				<div className="container">
					<div className="testi-slider owl-carousel" data-slider-id="1">
						<div className="item">
							<div className="testi-item">
								<img src="img/quote.png" alt="" />
								<h4>Fanny Spencer</h4>
								<ul className="list">
									<li><Link to="#"><i className="fa fa-star"></i></Link ></li>
									<li><Link to="#"><i className="fa fa-star"></i></Link ></li>
									<li><Link to="#"><i className="fa fa-star"></i></Link ></li>
									<li><Link to="#"><i className="fa fa-star"></i></Link ></li>
									<li><Link to="#"><i className="fa fa-star"></i></Link ></li>
								</ul>
								<div className="wow fadeIn" data-wow-duration="1s">
									<p>
										As conscious traveling Paup ers we must always be oncerned about our dear Mother Earth. If you think about it, you travel
								across her face <br /> and She is the host to your journey.
							</p>
								</div>
							</div>
						</div>
						<div className="item">
							<div className="testi-item">
								<img src="img/quote.png" alt="" />
								<h4>Alen Davis</h4>
								<ul className="list">
									<li><Link to="#"><i className="fa fa-star"></i></Link ></li>
									<li><Link to="#"><i className="fa fa-star"></i></Link ></li>
									<li><Link to="#"><i className="fa fa-star"></i></Link ></li>
									<li><Link to="#"><i className="fa fa-star"></i></Link ></li>
									{/* <li><Link to="#"><i className="fa fa-star"></i></Link ></li> */}
								</ul>
								<div className="wow fadeIn" data-wow-duration="1s">
									<p>
										Tons of knowledge. Good concept clearity.  <br /> Loved to be a part of that.
							</p>
								</div>
							</div>
						</div>

						<div className="item">
							<div className="testi-item">
								<img src="img/quote.png" alt="" />
								<h4>Fanny Spencer</h4>
								<ul className="list">
									<li><Link to="#"><i className="fa fa-star"></i></Link ></li>
									<li><Link to="#"><i className="fa fa-star"></i></Link ></li>
									<li><Link to="#"><i className="fa fa-star"></i></Link ></li>
									<li><Link to="#"><i className="fa fa-star"></i></Link ></li>
									<li><Link to="#"><i className="fa fa-star"></i></Link ></li>
								</ul>
								<div className="wow fadeIn" data-wow-duration="1s">
									<p>
										As conscious traveling Paup ers we must always be oncerned about our dear Mother Earth. If you think about it, you travel
								across her face <br /> and She is the host to your journey.
							</p>
								</div>
							</div>
						</div>
						<div className="item">
							<div className="testi-item">
								<img src="img/quote.png" alt="" />
								<h4>Fanny Spencer</h4>
								<ul className="list">
									<li><Link to="#"><i className="fa fa-star"></i></Link ></li>
									<li><Link to="#"><i className="fa fa-star"></i></Link ></li>
									<li><Link to="#"><i className="fa fa-star"></i></Link ></li>
									<li><Link to="#"><i className="fa fa-star"></i></Link ></li>
									<li><Link to="#"><i className="fa fa-star"></i></Link ></li>
								</ul>
								<div className="wow fadeIn" data-wow-duration="1s">
									<p>
										As conscious traveling Paup ers we must always be oncerned about our dear Mother Earth. If you think about it, you travel
								across her face <br /> and She is the host to your journey.
							</p>
								</div>
							</div>
						</div>
					</div>
					<div className="owl-thumbs d-flex justify-content-center" data-slider-id="1">
						<div className="owl-thumb-item">
							<div>
								<img className="img-fluid" src="img/testimonial/t1.jpg" alt="" />
							</div>
							<div className="overlay overlay-grad"></div>
						</div>
						<div className="owl-thumb-item">
							<div>
								<img className="img-fluid" src="img/testimonial/t2.jpg" alt="" />
							</div>
							<div className="overlay overlay-grad"></div>
						</div>
						<div className="owl-thumb-item">
							<div>
								<img className="img-fluid" src="img/testimonial/t3.jpg" alt="" />
							</div>
							<div className="overlay overlay-grad"></div>
						</div>
						<div className="owl-thumb-item">
							<div>
								<img className="img-fluid" src="img/testimonial/t4.jpg" alt="" />
							</div>
							<div className="overlay overlay-grad"></div>
						</div>
					</div>
				</div>
			</section>
			<Footer />
		</div>
	)
}


export default Home
