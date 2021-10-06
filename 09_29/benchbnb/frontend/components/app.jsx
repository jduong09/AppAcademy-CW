import React from 'react';
import { Route, Switch } from 'react-router-dom';

import GreetingContainer from './greetings/greeting_container';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import SearchContainer from './benches/search_container';
import BenchFormContainer from './benches/form/bench_form_container';
import { AuthRoute, ProtectedRoute } from '../utils/route_util';
import BenchShowContainer from './benches/show/bench_show_container';

const App = () => (
  <div>
    <header>
      <h1>Bench BnB</h1>
      <GreetingContainer />
    </header>
    <AuthRoute path="/login" component={LoginFormContainer} />
    <AuthRoute path="/signup" component={SignupFormContainer} />
    <Route exact path="/" component={SearchContainer} />
    <Switch>
      <ProtectedRoute exact path="/benches/new">
        <BenchFormContainer />
      </ProtectedRoute>
      <Route exact path="/benches/:benchId" component={BenchShowContainer} />
    </Switch>
  </div>
);

export default App;