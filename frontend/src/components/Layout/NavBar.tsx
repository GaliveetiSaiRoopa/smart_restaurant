import React from "react";
import Logo from "../../assets/icons/restaurant.svg";
import { Link, useNavigate } from "react-router-dom";

interface NavbarProps {
  toggleSignUpForm: () => void;
}

const NavBar: React.FC<NavbarProps> = ({ toggleSignUpForm }) => {
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

        <Link
          to="/signup"
          className="text-base font-medium"
          onClick={toggleSignUpForm}
        >
          Sign Up
        </Link>
        <Link to="/signin" className="text-base font-medium">
          Sign In
        </Link>
        <Link to="/help" className="text-base font-medium">
          Help
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
