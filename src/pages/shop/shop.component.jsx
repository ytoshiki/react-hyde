import React from "react"
import { Route } from "react-router-dom"
import CategoryPage from "../../components/category/category.component"

const ShopPage = ({ match }) => (
  <div className='shop-page'>
    <Route exact path={match.path} />
    <Route path={`${match.path}/:categoryId`} component={CategoryPage} />
  </div>
)

export default ShopPage
