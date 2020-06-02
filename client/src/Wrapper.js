import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './Home';
import LoginForm from './LoginForm';
import ResetRequest from './ResetRequest';
import Bootcamps from './Bootcamps';
import Contact from './Contact';
import Register from './Register';
import UpdatePassword from './UpdatePassword';
import Bootcamp from './Bootcamp';
import NoBootcamp from './NoBootcamp';
import Course from './Course';
import NoCourse from './NoCourse';
import ManageAccount from './ManageAccount';
import ManageBootcamp from './ManageBootcamp';
import AddBootcamp from './AddBootcamp';
import AddCourse from './AddCourse';
import AddRatings from './AddRatings';
import ManageCourses from './ManageCourses';
import ManageReviews from './ManageReviews';
import Reviews from './Reviews';
import BootcampState from './Context/Bootcamp/BootcampState';
import ResetCode from './ResetCode';
import { ForgetPassword } from './ForgetPassword';

// import About from './AboutUs';

const Wrapper = () => {
  return (
    <BootcampState>
      <BrowserRouter>
        {/* <Switch> */}
        <Route exact path="/" component={Home} />

        <Route path="/Signup" component={Register} />
        <Route path="/LoginForm" component={LoginForm} />
        <Route path="/ResetRequest" component={ResetRequest} />
        <Route path="/ResetCode" component={ResetCode} />
        <Route path="/ForgetPassword" component={ForgetPassword} />

        <Route path="/account" component={ManageAccount} />
        <Route path="/UpdatePassword" component={UpdatePassword} />

        <Route path="/Bootcamp" component={Bootcamp} />
        <Route path="/Bootcamps" component={Bootcamps} />
        <Route path="/AddBootcamp" component={AddBootcamp} />
        <Route path="/NoBootcamp" component={NoBootcamp} />
        <Route path="/ManageBootcamp" component={ManageBootcamp} />

        <Route path="/Course" component={Course} />
        <Route path="/NoCourse" component={NoCourse} />
        <Route path="/AddCourse" component={AddCourse} />
        <Route path="/ManageCourses" component={ManageCourses} />

        <Route path="/Reviews" component={Reviews} />
        <Route path="/AddRatings" component={AddRatings} />
        <Route path="/ManageReviews" component={ManageReviews} />

        {/* <Route path="/AboutUs" component={About} /> */}

        <Route path="/Contact" component={Contact} />

        {/* </Switch> */}
      </BrowserRouter>
    </BootcampState>
  )
}


export default Wrapper
