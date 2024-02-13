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
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import Dashboard from './components/dashboard';
//import Profile from './components/profile';

//random comment

function App() {
  return (
    
    

            <div className="App">

            <Dashboard/>
            <Profile/>
            <Resume/>
            <Messages/>

                
                

            </div>

    

      

   
      

    
    
  );
}

export default App;
