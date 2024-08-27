import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Loader from './pages/Loader';

export function App() {


  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Set a timeout of 1 minute (60000 milliseconds) before navigating to the Signup page
    const timer = setTimeout(() => {
      setLoading(false);
      navigate('/signup');  // Navigate to /signup
    }, 30000);

    // Cleanup the timer on component unmount
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <>
      <Helmet>
        <title>{loading ? 'Loading ...' : 'Signup'}</title>
      </Helmet>
      {loading ? <Loader /> : <Signup />}
    </>
  );
}

export default function AppWrapper() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/signup" element={<Signup />} /> {/* Define /signup route */}
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
