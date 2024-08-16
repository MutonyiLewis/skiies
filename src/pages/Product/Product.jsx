import React, { useState } from 'react'
import './Product.scss'
import useFetch from '../../components/hooks/useFetch'
import {AddShoppingCart, FavoriteBorder, BalanceOutlined,} from '@mui/icons-material/';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cartReducer';

const Product = () => {

  const id = useParams().id
  const [selectedImage, setSelectedImage] = useState("img")
  const [quantity, setQuantity] = useState(1)
  const dispatch = useDispatch()
  

  const {data, loading, error} = useFetch(
    `/products/${id}?populate=*`
  )

  
  return (
    <div className='product'>
    {loading ? "loading" : (<>
    <div className="left">
      <div className="images">
        <img src={process.env.REACT_APP_UPLOAD_URL+data?.attributes?.img?.data?.attributes?.url} alt='No first image' onClick={e=>setSelectedImage("img")}/>
        <img src={process.env.REACT_APP_UPLOAD_URL+data?.attributes?.img2?.data?.attributes?.url} alt='No second image' onClick={e=>setSelectedImage("img2")}/>
      </div>
      <div className="mainImg">
      <img src={process.env.REACT_APP_UPLOAD_URL+data?.attributes?.[selectedImage].data?.attributes?.url} alt=' 1' />
      </div>
    </div>
    <div className="right">
      <h1>{data?.attributes?.title}</h1>
      <span className='price'>Ksh. {data?.attributes?.price}</span>
      <p>{data?.attributes?.desc}</p>
      <div className="quantity">
        <button onClick={()=>setQuantity(prev=> (prev === 1 ? 1 : prev - 1))}>-</button>
        {quantity}
        <button onClick={()=>setQuantity(prev=>prev+1)}>+</button>
      </div>
      <button className="add" onClick={()=>dispatch(addToCart({
        id:data.id,
        title:data.attributes.title,
        desc: data.attributes.desc,
        price: data.attributes.price,
        img:data.attributes.img.data.attributes.url,
        quantity,
      }))
      }>
        
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
        <span>Category: {data?.attributes?.categories?.data[0]?.attributes?.title}</span>
        <span>Tag: {data?.attributes?.subcategories?.data[0]?.attributes?.title}</span>
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
    </>)}
    </div>
  )
}

export default Product