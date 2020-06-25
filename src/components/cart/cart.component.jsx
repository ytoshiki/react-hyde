import React from "react"
import "./cart.styles.scss"
import { connect } from "react-redux"
import { selectCartItems, selectCartTotalPrice, selectCartQuantity } from "../../redux/cart/cart.slector"
import CartItem from "../cart-item/cart-item.component"
import StripeCheckoutButton from "../stripe-button/stripe-button.component"

const Cart = ({ cartItems, selectCartTotalPrice, selectCartQuantity }) => (
  <div className='cart-container_top'>
    <div className='cart-container'>
      <div className='cart-header'>
        <div className='cart-header-detail'>商品</div>

        <div className='cart-header-detail_price'>値段</div>
      </div>
      {cartItems.length ? cartItems.map(cartItem => <CartItem item={cartItem} key={cartItem.id} />) : ""}
    </div>

    <div className='payment'>
      {cartItems.length ? (
        <div className='sum-total-wrapper'>
          <div className='sum-total-price'>
            <span>合計</span>
            <span>({selectCartQuantity}の商品)(税込)：</span>
            <span>￥{selectCartTotalPrice}</span>
          </div>

          <StripeCheckoutButton price={selectCartTotalPrice} />
        </div>
      ) : (
        ""
      )}
      <div className='credit-card'>
        <span className='credit-details'>カード番号：4242-4242-4242-4242</span>
        <br />
        <span className='credit-details'>MM/YY：今より先の日付</span>
        <br />
        <span className='credit-details'>CNC：お好きな番号4桁</span>
        <br />
        <span>をお使いください。</span>
      </div>
    </div>
  </div>
)

const mapStateToProps = state => ({
  cartItems: selectCartItems(state),
  selectCartTotalPrice: selectCartTotalPrice(state),
  selectCartQuantity: selectCartQuantity(state)
})

export default connect(mapStateToProps)(Cart)
