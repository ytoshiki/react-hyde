import React from "react"
import "./category-item.styles.scss"
import { setItemsToDisplay } from "../../redux/items/item.actions"
import { connect } from "react-redux"

const CategoryItem = ({ item, setItemsToDisplay }) => {
  const imageUrl = require(`../../assets/items/${item.imageUrl}`)
  return (
    <div onClick={() => setItemsToDisplay(item.items)} className='category-item-container' style={{ backgroundImage: `url(${imageUrl})` }}>
      <span className='category-item-name'>{item.name}</span>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  setItemsToDisplay: items => dispatch(setItemsToDisplay(items))
})

export default connect(null, mapDispatchToProps)(CategoryItem)
