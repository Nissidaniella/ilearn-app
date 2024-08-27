import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Loader from './pages/Loader';
import Dashboard from './pages/Dashboard';
import Courses from './pages/Courses';
import Classes from './pages/Classes';
import Progress from './pages/Progress';
import Messages from './pages/Messages';
import Notifications from './pages/Notifications';
import Settings from './pages/Settings';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/loader" element={
          <>
            <Helmet>
              <title>Loader</title>
            </Helmet>
            <Loader />
          </>
        } />
        <Route path="/" element={
          <>
            <Helmet>
              <title>Signup</title>
            </Helmet>
            <Signup />
          </>
        } />
        <Route path="/login" element={
          <>
            <Helmet>
              <title>Login</title>
            </Helmet>
            <Login />
          </>
        } />

<Route path="/dashboard" element={
          <>
            <Helmet>
              <title>Dashboard Page</title>
            </Helmet>
            <Dashboard />
          </>
        } />

<Route path="/courses" element={
          <>
            <Helmet>
              <title>Courses Page</title>
            </Helmet>
            <Courses />
          </>
        } />

<Route path="/classes" element={
          <>
            <Helmet>
              <title>Classes Page</title>
            </Helmet>
            <Classes />
          </>
        } />

<Route path="/progress" element={
          <>
            <Helmet>
              <title>Progress Page</title>
            </Helmet>
            <Progress />
          </>
        } />

<Route path="/messages" element={
          <>
            <Helmet>
              <title>Messages Page</title>
            </Helmet>
            <Messages />
          </>
        } />

<Route path="/notifications" element={
          <>
            <Helmet>
              <title>Notifications Page</title>
            </Helmet>
            <Notifications />
          </>
        } />

<Route path="/settings" element={
          <>
            <Helmet>
              <title>Settings Page</title>
            </Helmet>
            <Settings />
          </>
        } />
      </Routes>
    </Router>
  );
}

export default App;



