import React, { useState } from 'react'
import './Products.scss'
import List from '../../components/List/List'
import { useParams } from 'react-router-dom'

const Products = () => {
  const catId = parseInt(useParams().id)
  //console.log(catId)
  const [maxPrice,setMaxPrice] = useState(5000)
  const [sort, setSort] = useState(null)


  return (
    <div className='products'>
      <div className="left">
        <div className="filterItem">
          <h2>Product Categories</h2>
          <div className="inputItem">
            <input type='checkbox' id='1' value={1}/>
            <label  htmlFor='1'>Sweats</label><br />
          </div>
          <div className="inputItem">
            <input type='checkbox' id='2' value={2}/>
            <label  htmlFor='2'>Shoes</label><br />
          </div>
          <div className="inputItem">
            <input type='checkbox' id='3' value={3}/>
            <label  htmlFor='3'>T-shirts</label><br />
          </div>
        </div>
        <div className="filterItem">
          <h2>Filter by price</h2>
          <div className="inputItem">
            <span>Ksh. 0</span>
            <input type='range' min={100} max={5000} onChange={(e) => setMaxPrice(e.target.value)}/>
            <span>Ksh. {maxPrice}</span>
          </div>
        </div>
        <div className="filterItem">
          <h2>Sort by:</h2>
          <div className="inputItem">
            <input type='radio' id='asc' value="asc" name='price' onChange={e=>setSort("asc")}/>
            <label htmlFor='asc'>Price Ascending &uarr;</label><br />
            </div>
            <div className="inputItem">
            <input type='radio' id='desc' value="desc" name='price' onChange={e=>setSort("desc")}/>
            <label htmlFor='desc'>Price Descending &darr;</label><br />
          </div>
        </div>
      </div>
      <div className="right">
        <img 
          className='catImg'
          src='https://images.pexels.com/photos/8721969/pexels-photo-8721969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' 
          alt='landing'
        /> 
        <List catId={catId} maxPrice={maxPrice} sort={sort}/>
      </div>
    </div>
  )
}

export default Products