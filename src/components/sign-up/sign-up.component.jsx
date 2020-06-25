import React from "react"
import FormInput from "../form-input/form-component"

import { auth, createUserProfileDocument } from "../../firebase/firebase.utils"
import CustomButton from "../button/custom-button.component"
import "./sign-up.styles.scss"

class SignUp extends React.Component {
  constructor() {
    super()

    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
      errorMessage: false
    }
  }

  handleChange = e => {
    const { name, value } = e.target
    this.setState({
      [name]: value
    })
  }

  // 1. prevent the default behaivour
  // 2. return if password does't match
  // 3. create with email and password that user put
  // 4. send the data to firebase utils
  // 5. get the input field empty
  handleSubmit = async e => {
    e.preventDefault()

    const { password, confirmPassword, email, displayName } = this.state
    if (password !== confirmPassword) {
      this.setState({
        errorMessage: true
      })
      return
    } else {
      try {
        const { user } = await auth.createUserWithEmailAndPassword(email, password)
        await createUserProfileDocument(user, { displayName })
        this.setState({
          displayName: "",
          email: "",
          password: "",
          confirmPassword: ""
        })
      } catch (error) {
        console.log(error)
      }
    }
  }

  render() {
    const { displayName, email, password, confirmPassword, errorMessage } = this.state

    return (
      <div className='signUp'>
        <span>アカウントをお持ちでない方</span>

        <form className='sign-up-form' onSubmit={this.handleSubmit}>
          <FormInput handleChange={this.handleChange} label='アカウント名' value={displayName} name='displayName' required />
          <FormInput handleChange={this.handleChange} label='Eメール' value={email} name='email' required />
          <FormInput handleChange={this.handleChange} label='パスワード' value={password} name='password' required />
          <FormInput handleChange={this.handleChange} label='確認用パスワード' value={confirmPassword} name='confirmPassword' required />
          {errorMessage ? <p>パスワードが一致しません</p> : ""}
          <CustomButton>アカウントを登録する</CustomButton>
        </form>
      </div>
    )
  }
}

export default SignUp
