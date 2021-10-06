import React from 'react';
import { Redirect, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const Auth = ({ component: Component, path, loggedIn }) => (
  <Route path={path} render={props => 
    !loggedIn ? <Component {...props} /> : <Redirect to="/" />} />
);

const Protect = ({ component: Component, path, loggedIn }) => (
  <Route path={path} render={props => 
    loggedIn ? <Component {...props} /> : <Redirect to="/login" />} />
);

const mapStateToProps = state => ({
  loggedIn: Boolean(state.session.id)
});

export const AuthRoute = withRouter(connect(mapStateToProps, null)(Auth));
export const ProtectedRoute = withRouter(connect(mapStateToProps, null)(Protect));