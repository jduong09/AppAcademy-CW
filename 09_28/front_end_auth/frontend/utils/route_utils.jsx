import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, withRouter } from 'react-router-dom';

const mapStateToProps = state => {
  return ({
    loggedIn: Boolean(state.session.currentUser)
  })
};

// <AuthRoute path="" component={} />
const Auth = ({ path, loggedIn, component: Component }) => {
  return (
    <Route path={path} render={props => (
      loggedIn ? <Redirect to="/" /> : <Component {...props} />
    )} />
  );
};

const Protected = ({ path, loggedIn, component: Component}) => {
  return (
    <Route path={path} 
      render={
        props => (
          loggedIn ? <Component {...props} /> : <Redirect to="/signup" />
        )
      }
    />
  )
};

export const AuthRoute = withRouter(connect(mapStateToProps)(Auth));
export const ProtectedRoute = withRouter(connect(mapStateToProps)(Protected));