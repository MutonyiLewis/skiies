import React from 'react'
import "./Card.scss"
import {Link} from "react-router-dom"


const Card = ({item}) => {
  return (
    <Link to={`/product/${item.id}`} className='link'>
    <div className="card">
        <div className="image">
            {item?.attributes.isNew && <span>New Collection</span>}
            <img src={process.env.REACT_APP_UPLOAD_URL+item.attributes.img?.data.attributes.url} alt="" className="mainImg" />
            <img src={process.env.REACT_APP_UPLOAD_URL+item.attributes?.img2?.data?.attributes.url} alt="" className="secondImg" />
        </div>
        <h2>{item?.attributes.title}</h2>
        <div className="prices">
            <h3>Ksh. {item?.attributes.oldPrice || item?.attributes.price + 200}</h3>
            <h3>Ksh. {item?.attributes.price}</h3>
        </div>
    </div>
    </Link>
  )
}

export default Card