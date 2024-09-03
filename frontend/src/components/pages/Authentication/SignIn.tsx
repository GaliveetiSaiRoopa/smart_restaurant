import React from "react";
import { useNavigate } from "react-router-dom";

interface SignInProps {
  onClose: () => void;
  openSignUp: () => void; // Add prop to open SignUp
}

const SignIn: React.FC<SignInProps> = ({onClose, openSignUp}) => {
  const navigate = useNavigate();
  return (
    <div className="inset-0">
      <div className=" bg-gray-200">
        <div className="w-full flex justify-end">
          <button
            className="m-4 px-2 border border-gray-500 rounded-md "
            onClick={onClose}
          >
            X
          </button>
        </div>
        <div className=" flex flex-col justify-center items-center bg-gray-200 gap-4 p-6 shadow-slate-400">
          <h1 className="font-bold text-xl gap-4">Login</h1>
          <input
            type="email"
            name="Email"
            placeholder="Email"
            id="email"
            className="w-4/5 h-12 rounded-sm p-2"
          />

          <input
            type="password"
            name="Password"
            placeholder="Password"
            id="password"
            className="w-4/5 h-12 rounded-sm p-2"
          />
        </div>
        <div>
          <p>Not SignedIn</p>
          <button
            className="underline decoration-slate-500"
            onClick={openSignUp}
          >
            Creat New Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
