import React, { useState } from "react";
import "./App.css";
import SignUpPage from "../../frontend/src/pages/SignUpPage";
import SignInPage from "../../frontend/src/pages/SignInPage";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import NavBar from "./components/Layout/NavBar";
import HomePage from "./pages/HomePage";
import Footer from "./components/Layout/Footer";
import Help from "./components/Help/Help";
import Cart from "./components/Cart/Cart";


const App: React.FC = () => {

  const [isSignUpOpen, setIsSignUpOpen] = useState(false);

  const toggleSignUpForm = () => {
    setIsSignUpOpen(!isSignUpOpen);
  };

  return (
    <Router>
      <NavBar toggleSignUpForm={toggleSignUpForm}/> 
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/signup" element={<SignUpPage toggleSignUpForm={toggleSignUpForm} isSignUpOpen={isSignUpOpen}/>} />
        <Route path="/signin" element={<SignInPage/>} /> 
        <Route path ="/help" element={<Help/>}/>
        <Route path="/cart" element= {<Cart/>}/>
      </Routes>

      <Footer/>
      {/* {isSignUpOpen && <SignUpPage toggleSignUpForm={toggleSignUpForm} isSignUpOpen={isSignUpOpen}/>} */}
    </Router>
  );
};

export default App;
