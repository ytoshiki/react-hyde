import React from "react"
import { withRouter } from "react-router-dom"
import "./menu-item.styles.scss"

const MenuItem = props => {
  const { title, imageUrl, linkUrl, history, match } = props
  const logo = require(`../../assets/${imageUrl}`)
  return (
    <div onClick={() => history.push(`${match.url}${linkUrl}`)} className='directory-menu-item'>
      <div className='background-image' style={{ backgroundImage: `url(${logo})` }}>
        <div className='content'>
          <h2 className='title'>{title}</h2>
          <span className='subtitle'>商品を見る</span>
        </div>
      </div>
    </div>
  )
}

export default withRouter(MenuItem)
