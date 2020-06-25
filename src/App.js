import React from "react"
import "./App.css"
import { connect } from "react-redux"
import { auth, createUserProfileDocument } from "./firebase/firebase.utils"
import { setUser } from "./redux/user/user.actions"
import { Switch, Route } from "react-router-dom"
import Header from "./components/header/header.component"
import SignInUpPage from "./pages/sign-in-up/sign-in-up.component"
import HomePage from "./pages/homepage/homepage.component"
import ShopPage from "./pages/shop/shop.component"
import Cart from "./components/cart/cart.component"

class App extends React.Component {
  unsubscribeFromAuth = null

  componentDidMount() {
    const { setUser } = this.props

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      // if userAuth exsists, fire a function that creates database if doesn't exist already, and return userReference(document reference)

      // Using the reference, set the data which is user's and store it in Reducer.
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth)

        userRef.onSnapshot(snapShot => {
          setUser({ id: snapShot.id, ...snapShot.data() })
        })
      } else {
        setUser(userAuth)
      }
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/signInUp' component={SignInUpPage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/cart' component={Cart} />
        </Switch>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  setUser: user => dispatch(setUser(user))
})

export default connect(null, mapDispatchToProps)(App)

// persistor.purge()
