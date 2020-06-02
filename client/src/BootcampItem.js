import React from 'react'
import { Link } from 'react-router-dom';


const BootcampItem = ({ bootcamp }) => {
    const { name, description, address } = bootcamp;
    return (
        <div class="single-post row">
            <div class="col-lg-3  col-md-3 meta-details">
                <ul class="tags">
                    <li><Link to="#">Location: {address}</Link ></li>
                </ul>
                <div class="user-details row">
                    <p class="user-name col-lg-12 col-md-12 col-6"><Link to="#">Alen Walker</Link > <span class="lnr lnr-user"></span></p>
                    <p class="date col-lg-12 col-md-12 col-6"><Link to="#">12 Jan, 2020</Link > <span class="lnr lnr-calendar-full"></span></p>
                    <p class="view col-lg-12 col-md-12 col-6"><Link to="#">1.2k Views</Link > <span class="lnr lnr-eye"></span></p>
                    <p class="comments col-lg-12 col-md-12 col-6"><Link to="#">9.8</Link > <span class="lnr lnr-star"></span></p>

                </div>
            </div>
            <div class="col-lg-9 col-md-9 ">
                <div class="feature-img">
                    <img class="img-fluid" src="img/image_4.jpg" alt="" />
                </div>
                <Link class="posts-title" href="#"><h3>{name}</h3></Link>
                <p class="excert">
                    {description}
                </p>
                <Link to="/Bootcamp" class="primary-btn">View More</Link>
            </div>
        </div>

    )
}


export default BootcampItem
