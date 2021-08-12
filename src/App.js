import React from 'react';
import Landing from './pages/Landing/Landing.jsx';
import LogIn from './pages/Login/Login.jsx';
import SignUp from './pages/Signup/Signup.jsx';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NewPatient from './pages/NewPatient/NewPatient.jsx';
import Patients from './pages/Patients/Patients';
import PatientDetails from './components/Patient/PatientDetails';
import Doctor from './pages/Doctor/Doctor.js';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Landing}></Route>
        <Route exact path="/login" component={LogIn}></Route>
        <Route exact path="/signup" component={SignUp}></Route>
        <Route exact path="/new/patient" component={NewPatient}></Route>
        <Route exact path="/patients" component={Patients}></Route>
        <Route exact path="/:patientId" component={PatientDetails}></Route>
        <Route exact path="/doctor" component={Doctor}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
