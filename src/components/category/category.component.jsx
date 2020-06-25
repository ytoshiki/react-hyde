import React from "react"
import { connect } from "react-redux"
import { selectFirstCategory, selectItemsToDisplay } from "../../redux/items/item.selector"
import CategoryItem from "../category-item/category-item.component"
import "./category.styles.scss"
import ShopItems from "../shop-item/shop-item.component"

const CategoryPage = ({ category, itemsToDisplay }) => {
  //categories is {categories: {}, id: 22}
  const { categories } = category

  //Turning object to array to use map
  const categoryArray = Object.keys(categories).map(key => categories[key])

  return (
    <div className='category-container'>
      <div className='category-header'>
        <span>カテゴリーを選ぶ</span>
      </div>

      <div className='category-select'>
        {categoryArray.map(array => (
          <CategoryItem key={array.id} item={array} />
        ))}
      </div>

      <div className='shop-item-container'>
        <div>{itemsToDisplay.length > 0 ? <span className='display-items'>商品一覧</span> : ""}</div>

        {itemsToDisplay.length > 0 ? itemsToDisplay.map(item => <ShopItems item={item} key={item.id} />) : ""}
      </div>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => ({
  category: selectFirstCategory(ownProps.match.params.categoryId)(state),
  itemsToDisplay: selectItemsToDisplay(state)
})

export default connect(mapStateToProps)(CategoryPage)
