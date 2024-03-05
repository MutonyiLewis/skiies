import React from 'react'
import "./Featured.scss"
import Card from '../Card/Card';
import useFetch from '../hooks/useFetch';


const Featured = ({type}) => {

       const {data, loading, error} = useFetch(`/products?populate=*&[filters][type][$eq]=${type}`)
      
  return (
    <div className='featured'>
        <div className="top">
            <h1>{type} products</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae voluptas ratione beatae aperiam nulla excepturi ipsum fugit corporis nihil eos exercitationem culpa, repudiandae dicta reprehenderit pariatur iusto, omnis nisi consequatur.
            </p>
        </div>
        <div className="bottom">
            {error 
            ? "Something went Wrong" 
            : loading ? "loading"
            : data.map(item=>(<Card item={item} key={item.id}/>))}
        </div>
    </div>
  )
}

export default Featured