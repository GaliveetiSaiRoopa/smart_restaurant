import React from 'react'
import SignUp from '../components/Authentication/SignUp'


interface SignUpPageProps {
  toggleSignUpForm: ()=>void;
  isSignUpOpen: boolean;
}

const SignUpPage: React.FC<SignUpPageProps>= ({toggleSignUpForm,isSignUpOpen}) => {

  return (
    <>
   {isSignUpOpen && <SignUp closeForm = {toggleSignUpForm}/>}
    </>
  )
}

export default SignUpPage