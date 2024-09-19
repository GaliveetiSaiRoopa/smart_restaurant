import React from 'react'
import SignUp from '../components/Authentication/SignUp'


interface SignUpPageProps {
  toggleSignUpForm: ()=>void;
  isSignUpOpen: boolean;
}

const SignUpPage: React.FC<SignUpPageProps>= ({toggleSignUpForm,isSignUpOpen}) => {

  return (
    <div>
      
   {isSignUpOpen && <SignUp closeForm = {toggleSignUpForm}/>}
    </div>
  )
}

export default SignUpPage