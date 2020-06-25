import React from "react"
import { Link, withRouter } from "react-router-dom"
import { selectCartQuantity } from "../../redux/cart/cart.slector"
import "./header.styles.scss"
import { connect } from "react-redux"
import { ReactComponent as CartLogo } from "../../assets/cart.svg"
import { ReactComponent as UserLogo } from "../../assets/user.svg"

import "./header.styles.scss"
import { selectCurrentUser } from "../../redux/user/user.selector"

const Header = ({ history, selectCartQuantity, selectCurrentUser }) => {
  return (
    <div className='header'>
      <div className='container'>
        <div className='header_top'>
          <div onClick={() => history.push("/")}>
            <span className='store-name'>HYDE.</span>
          </div>
          <div className='logo-container'>
            <div className='logo user-logo' onClick={() => history.push("/signInUp")}>
              <UserLogo />
            </div>
            <div onClick={() => history.push("/cart")} className='logo cart-logo'>
              <CartLogo className='logo_img' />
              <span className='count'>{selectCartQuantity}</span>
            </div>
          </div>
        </div>
      </div>

      <div className='header_bottom'>
        <div className='container'>
          <nav>
            <Link to='/'>HOME</Link>

            {selectCurrentUser ? <span className='user'>{selectCurrentUser.displayName}様 ようこそ</span> : <span>ログアウト中</span>}
          </nav>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  selectCartQuantity: selectCartQuantity(state),
  selectCurrentUser: selectCurrentUser(state)
})
export default withRouter(connect(mapStateToProps)(Header))
