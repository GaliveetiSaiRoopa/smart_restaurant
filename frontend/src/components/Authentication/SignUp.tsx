import React, { useState } from "react";

interface SignUpProps {
  closeForm: () => void;
}

const SignUp: React.FC<SignUpProps> = ({ closeForm }) => {
  // const [loginform, setLoginform] = useState({
  //   firstName: "",
  //   lastName: "",
  //   email: "",
  //   password: "",
  //   address: "",
  // });

  return (
    // <>
    //   {openForm && (
    <div className="flex justify-end">
      <div className="w-1/3">
        <div className="w-full relative h-12 bg-gray-200 ">
          <button
            className="m-4 px-2 absolute border border-gray-500 rounded-md "
            onClick={closeForm}
          >
            {" "}
            Close{" "}
          </button>
        </div>

        <div className="w-full flex flex-col justify-center items-center bg-gray-200 gap-4 p-6 shadow-slate-400">
          <h1 className="font-bold text-xl gap-4">Sign Up</h1>
          <input
            type="text"
            name="FirstName"
            placeholder="First Name"
            id="firstname"
            className="w-4/5 h-12 rounded-sm p-2"
          />

          <input
            type="text"
            name="LastName"
            placeholder="Last Name"
            id="lastname"
            className="w-4/5 h-12 rounded-sm p-2"
          />

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
          <input
            type="password"
            name="Confirm Password"
            placeholder="Confirm Password"
            id="password"
            className="w-4/5 h-12 rounded-sm p-2"
          />
          <input
            type="text"
            name="Address"
            placeholder="Address"
            id="address"
            className="w-4/5 h-12 rounded-sm p-2"
          />

          <div className="flex items-center mt-4 p-1">
            <input type="checkbox" id="terms" name="terms" className="mr-2" />
            <label htmlFor="terms" className="text-gray-800">
              {" "}
              I accept the Terms and Conditions
            </label>
          </div>

          <button
            type="submit"
            value="submit"
            className="w-1/3 bg-blue-600 h-8 text-base font-medium rounded-sm px-2"
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
    // )}
    // </>
  );
};

export default SignUp;
