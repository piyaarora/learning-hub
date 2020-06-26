import React, { Fragment, useContext } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Routes } from './common/Routes'
import AuthContext from './Context/auth/authContext'

import $ from 'jquery'

const Navigation = (props) => {
    const authContext = useContext(AuthContext);
    const { isAuthenticated, logout, user } = authContext;
    const onLogout = () => {
        logout();
    }

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

    const authLinks = (

        <Fragment>
            <header id="header">
                {onscroll}
                <div className="container">
                    <div className="row align-items-center justify-content-between d-flex">
                        <div id="logo">
                            <Link to="#"><h4 style={{ color: "#fff" }}>Learning Hub</h4></Link>
                        </div>
                        <nav id="nav-menu-container">
                            <ul className="nav-menu">
                                <li><NavLink exact activeClassName="menu-active" to="/">Home</NavLink></li>
                                <li><NavLink exact aciveClassName="menu-active" to="#about-section">About</NavLink></li>
                                <li><NavLink exact activeClassName="menu-active" to="#faculty-section">Faculty</NavLink></li>
                                <li className=""><NavLink activeClassName="menu-active" exact to="#testimonials-section">View Reviews</NavLink></li>


                                <li className="menu-has-children"><NavLink activeClassName="menu-active" exact to={Routes.Bootcamps.url}>Manage Bootcamps</NavLink>
                                    <ul>
                                        <li className="menu-active"><Link to={Routes.Bootcamps.url}>Add Bootcamp</Link></li>
                                        <li><Link to={Routes.Bootcamp.url}>Add Courses</Link></li>
                                    </ul>
                                </li>
                                <li><Link activeClassName="menu-active" exact to={Routes.Contact.url}>Contact</Link></li>
                                <li><Link ativeClassName="menu-active" exact to={Routes.LoginForm.url}>Hello {user && user.name}</Link></li>
                                <li>
                                    <a onClick={onLogout} href="#!">
                                        <i className="fas fa-sign-out-alt">
                                        </i> <span className="hide-sm">Logout</span>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                        {/* <!-- #nav-menu-container --> */}
                    </div>
                </div>
            </header >
        </Fragment >
    );

    const guestLinks = (
        <Fragment>
            <header id="header">
                {onscroll}
                <div className="container">
                    <div className="row align-items-center justify-content-between d-flex">
                        <div id="logo">
                            <Link to="#"><h4 style={{ color: "#fff" }}>Learning Hub</h4></Link>
                        </div>
                        <nav id="nav-menu-container">
                            <ul className="nav-menu">
                                <li><NavLink exact activeClassName="menu-active" to="/">Home</NavLink></li>
                                <li><NavLink exact aciveClassName="menu-active" to="#about-section">About</NavLink></li>
                                <li><NavLink exact activeClassName="menu-active" to="#faculty-section">Faculty</NavLink></li>
                                <li className=""><NavLink activeClassName="menu-active" exact to="#testimonials-section">Reviews</NavLink></li>


                                <li className="menu-has-children"><NavLink activeClassName="menu-active" exact to={Routes.Bootcamps.url}>Bootcamps</NavLink>
                                    {/* <ul>
                                    <li className="menu-active"><Link to={Routes.Bootcamps.url}>Blog Home</Link></li>
                                    <li><Link to={Routes.Bootcamp.url}>Blog Details</Link></li>
                                </ul> */}
                                </li>
                                <li><Link activeClassName="menu-active" exact to={Routes.Contact.url}>Contact</Link></li>
                                <li><Link ativeClassName="menu-active" exact to={Routes.LoginForm.url}>Login/Register</Link></li>
                            </ul>
                        </nav>
                        {/* <!-- #nav-menu-container --> */}
                    </div>
                </div>
            </header >
        </Fragment >
    );


    return (
        <Fragment>
            {isAuthenticated ? authLinks : guestLinks}
        </Fragment >
    )
}


export default Navigation
