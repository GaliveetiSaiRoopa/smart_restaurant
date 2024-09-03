import React, { useState } from "react";
import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/Layout/NavBar";
import HomePage from "./components/pages/HomePage";
import SignUp from "./components/pages/Authentication/SignUp";
import SignIn from "./components/pages/Authentication/SignIn";

// import AppRoutes from "./components/Routes/Routes";

const App: React.FC = () => {
  const [isSignUpOpen, setSignUpOpen] = useState(false);
  const [isSignInOpen, setSignInOpen] = useState(false);

  const toggleSignUpForm = () => {
    setSignUpOpen(!isSignUpOpen);
    setSignInOpen(false);
  };

  const toggleSignInForm = () => {
    setSignInOpen(!isSignInOpen);
    setSignUpOpen(false);
  };

  return (
    <Router>
      <NavBar
       openSignUp={toggleSignUpForm}
        
      />
      <Routes>
        <Route path="/" element={<HomePage />} />
       
      </Routes>
      {isSignUpOpen && (
        <SignUp onClose={toggleSignUpForm} openSignIn={toggleSignInForm} />
      )}
      {isSignInOpen && (
        <SignIn onClose={toggleSignInForm} openSignUp={toggleSignUpForm} />
      )}
    </Router>
  );
};

export default App;
