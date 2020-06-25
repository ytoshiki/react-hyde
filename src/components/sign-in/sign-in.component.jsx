import React from "react"
import { signInWithGoogle, auth } from "../../firebase/firebase.utils"
import FormInput from "../form-input/form-component"
import CustomButton from "../button/custom-button.component"
import "./sign-in.styles.scss"

class SignIn extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      email: "",
      password: ""
    }
  }

  //1. using email and password to login
  //2. get the input field empty
  handleSubmit = async e => {
    e.preventDefault()

    const { email, password } = this.state

    try {
      await auth.signInWithEmailAndPassword(email, password)
      this.setState({
        email: "",
        password: ""
      })
    } catch (error) {
      console.log(error)
    }
  }

  //Store value in the state, so later reference it when needed

  handleChange = e => {
    const { name, value } = e.target

    this.setState({
      [name]: value
    })
  }

  render() {
    return (
      <div className='signIn'>
        <span>すでに登録している方</span>
        <form onClick={this.handleSubmit}>
          <FormInput handleChange={this.handleChange} type='email' name='email' value={this.state.email} label='Eメール' required />
          <FormInput handleChange={this.handleChange} type='password' name='password' value={this.state.password} label='パスワード' required />

          <div className='buttons'>
            <CustomButton type='submit' value='Submit'>
              ログインする
            </CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              グーグルでログインする
            </CustomButton>
          </div>
        </form>
      </div>
    )
  }
}

export default SignIn
