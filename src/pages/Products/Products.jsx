import React, { useState } from 'react'
import './Products.scss'
import List from '../../components/List/List'
import { useParams } from 'react-router-dom'
import useFetch from '../../components/hooks/useFetch'

const Products = () => {
  const catId = parseInt(useParams().id)
  const [maxPrice,setMaxPrice] = useState(5000)
  const [sort, setSort] = useState(null)
  const [selectedSubCats, setSelectedSubCats] = useState([])

  const {data, loading, error} = useFetch(`/subcategories?[filters][categories][id][$eq]=${catId}`)
  const handleSubChange = (e) => {
    const value = e.target.value;
    const  isChecked = e.target.checked;

    setSelectedSubCats(isChecked 
      ? [...selectedSubCats, value] 
      : selectedSubCats.filter((item) => item !== value)
      );


  }


  return (
    <div className='products'>
      <div className="left">
        <div className="filterItem">
          <h2>Product Categories</h2>


          {data?.map((item) => (
          <div className="inputItem" key={item.id}>
            <input type='checkbox' id={item.id} value={item.id} onChange={handleSubChange}/>
            <label  htmlFor={item.id}>{item.attributes.title}</label><br />
          </div>
          ))}
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
        <List catId={catId} maxPrice={maxPrice} sort={sort} subCats={selectedSubCats}/>
      </div>
    </div>
  )
}

export default Products