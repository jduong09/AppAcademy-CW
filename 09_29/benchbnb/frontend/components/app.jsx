import React from 'react';
import GreetingContainer from './greetings/greeting_container';
import LoginFormContainer from './session/login_form_container';

const App = () => (
  <div>
    <header>
      <h1>Bench BnB</h1>
      <GreetingContainer />
    </header>
    <LoginFormContainer />
  </div>
);

export default App;