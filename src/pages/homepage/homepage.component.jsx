import React from "react"
import "./homepage.styles.scss"
import ImageOne from "../../assets/image5-min.jpg"
import ImageTwo from "../../assets/image8-min.jpg"
import ImageThree from "../../assets/image9-min.jpg"
import Directory from "../../components/directory/directory.component"

const Homepage = () => (
  <div>
    <div className='sub-header'>
      <div className='sub-header_left'>
        <span className='catchCopy'>For</span>
        <span className='catchCopy'>Your</span>
        <span className='catchCopy cc2'>Dream</span>
        <span className='catchCopy cc2'>House</span>
      </div>

      <div className='sub-header_right'>
        <div className='image-container'>
          <img src={ImageOne} alt='' />
          <img src={ImageTwo} alt='' />
          <img src={ImageThree} alt='' />
        </div>
      </div>
    </div>

    <Directory />
  </div>
)

export default Homepage
