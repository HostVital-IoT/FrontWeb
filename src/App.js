import React from 'react';
import {BrowserRouter,Route,Switch} from "react-router-dom"
import LandingPage from "./pages/Landing/LandingPage"
import Layout from './pages/Layout/Layout';
function App() {
  return (
    <BrowserRouter>
    <Layout>
        <Switch>
          <Route exact path="/" component={LandingPage}></Route>
        </Switch>
    </Layout>
    </BrowserRouter>

  );
}

export default App;
