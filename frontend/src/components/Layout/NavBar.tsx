import React, { useState } from "react";
import Logo from "../../assets/icons/restaurant.svg";
import { Link, useNavigate } from "react-router-dom";
import SignUp from "../pages/Authentication/SignUp";
import SignIn from "../pages/Authentication/SignIn";

interface NavBarProps {
  openSignUp: () => void;
}

const NavBar: React.FC<NavBarProps> = ({openSignUp}) => {
  const navigate = useNavigate();

  const handleChange = () => {
    navigate("/");
  };

  return (
    <div className="flex justify-between h-16 items-center px-20 border-b border-violet-200 shadow-lg relative">
      <img
        src={Logo}
        alt="PageLogo"
        onClick={handleChange}
        className="cursor-pointer"
      />

      <div className="flex gap-10 items-center">
        <input
          type="text"
          placeholder="search"
          className="h-10 border border-violet-200 p-2 rounded-md"
        />

        {/* <Link
          to="/signup"
          className="text-base font-medium hover:bg-green-100 rounded-sm px-2"
          onClick={toggleSignUpForm}
        >
          Sign Up
        </Link> */}
        <button className="text-base font-medium" onClick={openSignUp}>
          SignUp
        </button>

        <Link to="/cart" className="text-base font-medium">
          Cart
        </Link>
        <Link to="/help" className="text-base font-medium">
          Help
        </Link>
        <Link to = "/cart" className="text-base font-medium">
        Cart</Link>
      </div>
    </div>
  );
};

export default NavBar;
