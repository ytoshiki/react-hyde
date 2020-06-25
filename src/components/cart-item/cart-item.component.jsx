import React from "react"
import "./cart-item.styles.scss"
import { connect } from "react-redux"
import { removeItem, addItem, reduceQuantity } from "../../redux/cart/cart.actions"
import { ReactComponent as LeftLogo } from "../../assets/items/left-chevron (1).svg"
import { ReactComponent as RightLogo } from "../../assets/items/right-chevron.svg"

class CartItem extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      quantity: 1
    }
  }

  render() {
    const { name, price, imageUrl, id, quantity } = this.props.item
    const { removeItem, addItem, reduceQuantity } = this.props
    const imageSrc = require(`../../assets/items/${imageUrl}`)
    return (
      <div className='cart-item-layer'>
        <div className='cart-item-container_bottom'>
          <div className='cart-item'>
            <div className='cart-item-image'>
              <img src={imageSrc} alt='' />
            </div>
          </div>

          <div className='cart-item-details'>
            <div className='cart-item-name'>{name}</div>
            <div className='stock'>在庫あり</div>
            <div className='number-input'>
              <LeftLogo className='arrowLogo' onClick={() => reduceQuantity(this.props.item)} />
              <span className='cart-item-quantity'>{quantity}</span>
              <RightLogo className='arrowLogo' onClick={() => addItem(this.props.item)} />
            </div>
            <div className='delete-item' onClick={() => removeItem(id)}>
              削除
            </div>
          </div>
        </div>

        <div className='price-wrapper'>
          <span className='cart-item-price'>{price}円</span>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  removeItem: item => dispatch(removeItem(item)),
  addItem: item => dispatch(addItem(item)),
  reduceQuantity: item => dispatch(reduceQuantity(item))
})

export default connect(null, mapDispatchToProps)(CartItem)
