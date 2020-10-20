import { Route, Switch, Redirect } from "react-router-dom";
import React from "react";
import HomePage from "../Routes/HomePage";
import ReviewPage from "../Routes/ReviewsPage";
import { BrowserRouter as Router } from "react-router-dom";
import Navigation from "../Components/Navigation/Navigation";
import Footer from "./Footer/Footer";
import styled from "styled-components";
import Projects from "../Routes/Projects/Projects";
import ScrollToTop from "./ScrollToTop";

const NavigationColor = styled.div`
  background-color: #204987;
  .row {
    margin-bottom: 0;

    @media only screen and (max-width: 56.25em) {
      padding: 0;
    }
  }
  padding: 0 3rem;
`;

const AppRouter = () => (
  <Router>
    <NavigationColor>
      <Navigation />
    </NavigationColor>
    <ScrollToTop />
    <Switch>
      <Route exact={true} path="/" component={HomePage} />
      <Route path="/reviews" component={ReviewPage} />
      <Route path="/projects/:organisation" component={Projects} />
      <Route path={['/http:', '/https:']} component={props => {
        window.location.replace(props.location.pathname.substr(1)) // substr(1) removes the preceding '/'
        return null
      }}/>
      <Redirect from="*" to="/" />
    </Switch>
    <Footer />
  </Router>
);

export default AppRouter;
