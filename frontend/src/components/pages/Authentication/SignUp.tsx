import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SignIn from "./SignIn";

interface SignUpProps {
  onClose: () => void;
  openSignIn: () => void;
}

const SignUp: React.FC<SignUpProps> = ({ onClose, openSignIn }) => {
  // const [loginform, setLoginform] = useState({
  //   firstName: "",
  //   lastName: "",
  //   email: "",
  //   password: "",
  //   address: "",
  // });

  const navigate = useNavigate();

  return (
    // <>
    //   {openForm && (
    <div className="flex justify-end inset-0 absolute h-[100vh]">
      <div className="w-1/3  bg-gray-200 px-14">
        <div className="w-full flex justify-end ">
          <button
            className="m-4 px-2 border border-gray-500 rounded-md "
            onClick={onClose}
          >
            X
          </button>
        </div>

        <div className="flex flex-col justify-end">
          <h1 className="font-bold text-3xl gap-4 mb-2">Sign Up</h1>
          <div className="flex">
            <p className="text-base">Already SignedIn? </p>
            <button
              className="decoration underline text-base"
              onClick={openSignIn}
            >
              Login here
            </button>
          </div>
        </div>
        <div className="w-full flex flex-col justify-center items-center gap-4 py-6 shadow-slate-400">
          <input
            type="text"
            name="FirstName"
            placeholder="First Name"
            id="firstname"
            className="w-full h-12 rounded-sm p-2"
          />

          <input
            type="text"
            name="LastName"
            placeholder="Last Name"
            id="lastname"
            className="w-full h-12 rounded-sm p-2"
          />

          <input
            type="email"
            name="Email"
            placeholder="Email"
            id="email"
            className="w-full h-12 rounded-sm p-2"
          />

          <input
            type="password"
            name="Password"
            placeholder="Password"
            id="password"
            className="w-full h-12 rounded-sm p-2"
          />
          <input
            type="password"
            name="Confirm Password"
            placeholder="Confirm Password"
            id="password"
            className="w-full h-12 rounded-sm p-2"
          />
          <input
            type="text"
            name="Address"
            placeholder="Address"
            id="address"
            className="w-full h-12 rounded-sm p-2"
          />

          <div className="w-full">
            <button
              type="submit"
              value="submit"
              className="bg-blue-600 h-12 text-xl font-medium rounded-sm px-2 w-full text-white"
            >
              Sign Up
            </button>
            <p>By clicking SignUp, I accept the Terms and Conditions</p>
          </div>
        </div>
      </div>
    </div>
    // )}
    // </>
  );
};

export default SignUp;
