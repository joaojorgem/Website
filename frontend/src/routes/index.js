import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import { isAuthenticated } from "../services/auth";
import Main from "../pages/Main";
import UserProfile from "../pages/UserProfile";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Posts from "../pages/Posts";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      )
    }
  />
);

const Routes = () => (
  <BrowserRouter>
    <Navbar></Navbar>
    <Switch>
      <Route exact path="/" component={() => <Main />} />
      <Route path="/user/:id" component={() => <UserProfile />} />
      <Route path="/login" component={() => <Login />} />
      <Route path="/register" component={() => <Register />} />
      <Route path="/posts" component={() => <Posts></Posts>} />
      <Route path="*" component={() => <h1>Page not found</h1>} />
    </Switch>
    <Footer></Footer>
  </BrowserRouter>
);

export default Routes;