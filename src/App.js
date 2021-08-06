import React from 'react';
import Landing from './pages/Landing/Landing.jsx';
import LogIn from './pages/Login/Login.jsx';
import SignUp from './pages/Signup/Signup.jsx';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NewPatient from './pages/NewPatient/NewPatient.jsx';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Landing}></Route>
        <Route exact path="/login" component={LogIn}></Route>
        <Route exact path="/signup" component={SignUp}></Route>
        <Route exact path="/newpatient" component={NewPatient}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
