import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Loader from './pages/Loader';


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
      </Routes>
    </Router>
  );
}

export default App;



