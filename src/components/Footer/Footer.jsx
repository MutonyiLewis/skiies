import React from 'react'
import './Footer.scss'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="top">
        <div className="item">
          <h1>Collections</h1>
          <span>The World is yours</span>
          <span>Skiies Central</span>
          <span>Picasso</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQs</span>
          <span>Pages</span>
          <span>Reach the skiies</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore est sunt repellat vitae? Quo odit quaerat debitis molestias fugit facere temporibus, officia exercitationem nemo aliquam suscipit, illo aspernatur modi. Ad.
          </span>
        </div>
        <div className="item">
          <h1>Contact Us</h1>
          <span>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta quisquam quae corrupti error, ad sapiente. Ut, aspernatur quam modi iusto fuga maxime in pariatur doloribus cumque blanditiis aliquam est esse!
          </span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo"><img src="/img/skiies.png" alt="studiologo" width={40}/></span>
          <span className="copyright">
           © Copyright 2023. All Rights Reserved. 
          </span>
        </div>
        <div className="right">
          <img src="/img/payment.png" alt="Payment options"/>
        </div>
      </div>
    </div>
  )
}

export default Footer