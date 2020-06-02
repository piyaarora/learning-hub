import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { Routes } from './common/Routes'

import $ from 'jquery'

const Navigation = () => {
    const onscroll = () => {
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

    return (
        <Fragment>
            <header id="header">
                {onscroll}
                <div className="container">
                    <div className="row align-items-center justify-content-between d-flex">
                        <div id="logo">
                            <Link to="#"><h4 style={{ color: "#fff" }}>Learning Hub</h4></Link>
                            {/* <img src="img/logo.png" alt="" title="" /> */}
                        </div>
                        <nav id="nav-menu-container">
                            <ul className="nav-menu">
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="#">About</Link></li>
                                <li><Link to="#">Faculty</Link></li>
                                <li className=""><Link to="#">Reviews</Link></li>


                                <li className="menu-has-children"><Link to={Routes.Bootcamps.url}>Bootcamps</Link>
                                    {/* <ul>
                                        <li className="menu-active"><Link to={Routes.Bootcamps.url}>Blog Home</Link></li>
                                        <li><Link to={Routes.Bootcamp.url}>Blog Details</Link></li>
                                    </ul> */}
                                </li>
                                <li><Link to={Routes.Contact.url}>Contact</Link></li>
                                <li><Link to={Routes.LoginForm.url}>Login/Register</Link></li>
                            </ul>
                        </nav>
                        {/* <!-- #nav-menu-container --> */}
                    </div>
                </div>
            </header>
        </Fragment>
    )
}


export default Navigation
