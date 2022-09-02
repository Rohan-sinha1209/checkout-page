import React from 'react';
import {BrowserRouter as Router, Switch} from 'react-router-dom';

// import MasterLayout from './layouts/admin/MasterLayout';

import PublicRoute from './PublicRoute';


import axios from 'axios';

axios.defaults.baseURL = "http://localhost:8000/";
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.post['Accept'] = 'application/json';

axios.defaults.withCredentials = true;




function App() {
  return (
    <div className="App">
        <Router>
          <Switch>

          

            <PublicRoute path="/" name="Home" />

            {/* <Route path="/login">
              {localStorage.getItem('auth_token') ? <Redirect to='/' /> : <Login />}
            </Route>
            <Route path="/register">
              {localStorage.getItem('auth_token') ? <Redirect to='/' /> : <Register />}
            </Route> */}

            {/* <Route path="/admin" name="Admin" render={(props) => <MasterLayout {...props} />} /> */}


          </Switch>
        </Router>
    </div>
  );
}

export default App;
