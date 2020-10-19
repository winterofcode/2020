import {Route, Switch, Redirect } from "react-router-dom";
// import PropTypes from "prop-types"
import React from "react";
import HomePage from "../Routes/HomePage"
import ReviewPage from "../Routes/ReviewsPage";
// import Explore from "../Routes/Explore";
// import Search from "../Routes/Search/index";
// import Profile from "../Routes//Profile/index";
import {BrowserRouter as Router} from "react-router-dom";
import Navigation from "../Components/Navigation/Navigation"
import Footer from "./Footer/Footer";



const AppRouter = () => (
    <Router>
    <Navigation />
    <Switch>
    <Route exact={true} path="/" component={HomePage} />
    <Route path="/reviews" component={ReviewPage} />
    <Redirect from="*" to="/" />
    </Switch>
    <Footer />
    </Router>
)


export default AppRouter;