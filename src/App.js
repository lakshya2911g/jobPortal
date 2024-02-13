import React from 'react';
import './App.css';
import SideMenu from './components/sideMenu';
//import {Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import Resume from './components/resume';
import Dashboard from './components/dashboard';
import Profile from './components/profile';
import Messages from './components/messages';
import JobAlert from './components/jobAlert';
import JobSaved from './components/jobSaved';

import Settings from './components/settings';
//import Dashboard from './components/dashboard';
//import Profile from './components/profile';

//random comment

function App() {
  return (
    
    

      <div className="App">

      {/*<SideMenu/>*/}

          <Dashboard/>

      {/*<Routes>

          <Route path="/dashboard" component={Dashboard} />
          <Route path="/profile" component={Profile} />
          <Route path="/resume" component={Resume} />
          <Route path="/messages" component={Messages} />
          <Route path="/jobalert" component={JobAlert} />
          <Route path="/jobsaved" component={JobSaved} />
          <Route path="/settings" component={Settings}/>

  </Routes>*/}

          
          

      </div>

   
      

    
    
  );
}

export default App;
