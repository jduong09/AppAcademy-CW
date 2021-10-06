import React from 'react';
import { Route } from 'react-router-dom';

import GreetingContainer from './greetings/greeting_container';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import SearchContainer from './benches/search_container';
import BenchFormContainer from './benches/bench_form_container';
import { AuthRoute, ProtectedRoute } from '../utils/route_util';

const App = () => (
  <div>
    <header>
      <h1>Bench BnB</h1>
      <GreetingContainer />
    </header>
    <AuthRoute path="/login" component={LoginFormContainer} />
    <AuthRoute path="/signup" component={SignupFormContainer} />
    <Route exact path="/" component={SearchContainer} />
    <ProtectedRoute path="/benches/new" component={BenchFormContainer} />
  </div>
);

export default App;