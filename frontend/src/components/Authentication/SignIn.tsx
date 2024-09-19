import React from 'react'

const SignIn = () => {
  return (
    <div className='w-1/3 bg-gray-200 gap-4 p-4 flex flex-col items-center'>
      <h1 className="font-bold text-xl text-center">Login</h1>
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

          <button type="submit" className=''>Submit</button>
    </div>
  )
}

export default SignIn