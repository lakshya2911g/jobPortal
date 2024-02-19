import React from "react";
import "./App.css";
import SideMenu from "./components/sideMenu";
//import {Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import Resume from "./components/resume";
import Dashboard from "./components/dashboard";
import Profile from "./components/profile";
import Messages from "./components/messages";
import JobAlert from "./components/jobAlert";
import JobSaved from "./components/jobSaved";

import Settings from "./components/settings";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Delete from "./components/delete";
//import Dashboard from './components/dashboard';
//import Profile from './components/profile';

//random comment

function App() {
  return (
    <>
      <Router>
        <SideMenu />
        <Routes>
          <Route path="/" exact Component={Dashboard} />
          <Route path="/myProfile" Component={Profile} />
          <Route path="/resume" Component={Resume} />
          <Route path="/messages" Component={Messages} />
          <Route path="/jobAlert" Component={JobAlert} />
          <Route path="/savedJob" Component={JobSaved} />
          <Route path="/accountSettings" Component={Settings} />
          <Route path="/delete" Component={Delete} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
