import React from "react"
import "./shop-item.styels.scss"
import { addItem } from "../../redux/cart/cart.actions"
import { connect } from "react-redux"

const ShopItems = ({ item, addItemToCart }) => {
  const { name, price, imageUrl } = item
  const imageSrc = require(`../../assets/items/${imageUrl}`)
  return (
    <div className='individual-item-container'>
      <div className='individual-item-image-container'>
        <img src={imageSrc} alt='' />
      </div>
      <div className='individual-item-details'>
        <span className='individual-item-name'>{name}</span>
        <span className='individual-item-price'>{price}円</span>
        <div className='stock'>在庫あり</div>
        <button onClick={() => addItemToCart(item)}>カートに入れる</button>
      </div>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  addItemToCart: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(ShopItems)
