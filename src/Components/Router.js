import { Route, Switch, Redirect } from "react-router-dom";
import React from "react";
import HomePage from "../Routes/HomePage";
import { BrowserRouter as Router } from "react-router-dom";
import Navigation from "../Components/Navigation/Navigation";
import Footer from "./Footer/Footer";
import styled from "styled-components";

import ScrollToTop from "./ScrollToTop";
import DSCNSEC from "../Routes/DSCNSEC"
import TCF from "../Routes/TCF"

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
      <Route path="/organisation/dscnsec" component={DSCNSEC} />      
      <Route path="/organisation/tcf" component={TCF} />      
      <Redirect from="*" to="/" />
    </Switch>
    <Footer />
  </Router>
);

export default AppRouter;
