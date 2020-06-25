import React from "react"
import SignUp from "../../components/sign-up/sign-up.component"
import SignIn from "../../components/sign-in/sign-in.component"
import "./sign-in-up.styles.scss"

const SignInUpPage = () => (
  <div className='sign-in-up-container'>
    <SignIn />
    <SignUp />
  </div>
)

export default SignInUpPage
