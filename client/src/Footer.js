import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {

	return (
		<footer className="footer-area section-gap">
			<div className="container">
				<div className="row">
					<div className="col-lg-3 col-md-6 single-footer-widget">
						<h4>Quick Links</h4>
						<ul>
							<li><Link to="#">Help</Link></li>
							<li><Link to="#">Contact</Link></li>
							<li><Link to="#">Terms of Service</Link></li>
						</ul>
					</div>
					<div className="col-lg-3 col-md-6 single-footer-widget footer-bottom row ">

						<div className="footer-bottom row align-items-center">
							<p className="footer-text m-0 col-lg-8 col-md-12">
								Copyright &copy; by <Link to="#" target="_blank">Learning Hub</Link></p>
							<p className="footer-text m-0 col-lg-8 col-md-12">
								Designed and developed by <Link to="#" target="_blank">Priya Arora</Link></p>

						</div>
					</div>
					{/* <div className="col-lg-3 col-md-6 single-footer-widget"> */}
					<div className="col-lg-3 col-md-6 single-footer-widget footer-bottom row ">
						<div className="col-lg-3 col-md-12 footer-social">
							<Link to="#"><i className="fa fa-facebook"></i></Link>
							<Link to="#"><i className="fa fa-twitter"></i></Link>
							<Link to="#"><i className="fa fa-dribbble"></i></Link>
							<Link to="#"><i className="fa fa-behance"></i></Link>
						</div>
						{/* </div> */}
					</div>
					<div className="col-lg-3 col-md-6 single-footer-widget">
						<h4>Newsletter</h4>
						<p>You can trust us. we only send promo offers,</p>
						<div className="form-wrap" id="mc_embed_signup">

							<form
								target="_blank"
								action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&amp;id=92a4423d01"
								method="get"
								className="form-inline">

								<input
									className="form-control"
									name="email"
									placeholder="Your Email Address"
									required
									type="email" />
								<button className="click-btn btn btn-default">
									<span className="lnr lnr-arrow-right"></span>
								</button>
								<div style={{ position: 'absolute', left: "-5000px" }}>
									<input
										name="name" tabIndex="-1"
										// value="name"
										type="text" />
								</div>
								<div className="info"></div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</footer>
	)
}


export default Footer
