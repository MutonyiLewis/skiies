import React, { useState } from 'react'
import './Product.scss'
import {AddShoppingCart, FavoriteBorder, BalanceOutlined,} from '@mui/icons-material/';

const Product = () => {

  const [selectedImage, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState(1)

  const images = [
    "https://images.pexels.com/photos/7411615/pexels-photo-7411615.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    "https://images.pexels.com/photos/17676050/pexels-photo-17676050/free-photo-of-model-in-checkered-skirt.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  ]
  return (
    <div className='product'>
      <div className="left">
        <div className="images">
          <img src={images[0]} alt=' 1' onClick={e=>setSelectedImage(0)}/>
          <img src={images[1]} alt=' 2' onClick={e=>setSelectedImage(1)}/>
        </div>
        <div className="mainImg">
        <img src={images[selectedImage]} alt=' 1' />
        </div>
      </div>
      <div className="right">
        <h1>Title</h1>
        <span className='price'>Ksh. 1200</span>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat quaerat nobis alias dolorem suscipit rerum minus adipisci fuga, deserunt ipsam. Necessitatibus fugit accusantium sed itaque, consequatur eveniet? Aspernatur, totam perspiciatis.</p>
        <div className="quantity">
          <button onClick={()=>setQuantity(prev=> (prev === 1 ? 1 : prev - 1))}>-</button>
          {quantity}
          <button onClick={()=>setQuantity(prev=>prev+1)}>+</button>
        </div>
        <button className="add">
          <AddShoppingCart /> Add  to Cart
        </button>
        <div className="links">
          <div className="item">
            <FavoriteBorder /> Add to wish list
          </div>
          <div className="item">
            <BalanceOutlined /> Add to Compare
          </div>
        </div>
        <div className="info">
          <span>Product: T-shirt</span>
          <span>Tag: T-shirt, Women, Men</span>
        </div>
        <hr  />
        <div className="info">
          <span>DESCRIPTION</span>
          <hr />
          <span>Additional info</span>
          <hr />
          <span>FAQ</span>
        </div>
      </div>
    </div>
  )
}

export default Product