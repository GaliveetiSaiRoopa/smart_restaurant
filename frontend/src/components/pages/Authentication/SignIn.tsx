import React from "react";
import { useNavigate } from "react-router-dom";

interface SignInProps {
  onClose: () => void;
  openSignUp: () => void; // Add prop to open SignUp
}

const SignIn: React.FC<SignInProps> = ({ onClose, openSignUp }) => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-end inset-0 absolute">
      <div className="w-1/3 bg-gray-200 px-14">
        <div className="w-full flex justify-end py-4">
          <button
            className="m-4 px-2 border border-gray-500 rounded-md "
            onClick={onClose}
          >
            X
          </button>
        </div>
        <div className="flex flex-col justify-end">
          <h1 className="font-bold text-3xl gap-4 mb-2">Login</h1>
          <div className="flex">
            <p className="text-base">Not SignedIn? </p>
            <button
              className="underline decoration-slate-500 text-base"
              onClick={openSignUp}
            >
              Create New Account
            </button>
          </div>
        </div>

        <div className=" flex flex-col justify-start items-center bg-gray-200 gap-4 py-10 shadow-slate-400">
          <input
            type="phone"
            name="Email"
            placeholder="Email"
            id="email"
            className="w-full h-14 rounded-sm p-2"
          />

          <input
            type="password"
            name="Password"
            placeholder="Password"
            id="password"
            className="w-full h-14 rounded-sm p-2"
          />

          <div className="w-full">
            <button
              type="submit"
              value="submit"
              className="bg-blue-600 h-12 text-xl font-medium rounded-sm px-2 w-full text-white"
            >
              Login
            </button>
            <p>By clicking on login, I accept the Terms and Conditions</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
