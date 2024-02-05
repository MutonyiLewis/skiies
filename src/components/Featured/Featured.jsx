import React from 'react'
import "./Featured.scss"
import Card from '../Card/Card';


const Featured = ({type}) => {

    const data = [
       {
        id: 1,
        img: "https://images.pexels.com/photos/1457983/pexels-photo-1457983.jpeg?auto-compress&cs=tinysrgb&w=1600",
        img2: "https://images.pexels.com/photos/2703433/pexels-photo-2703433.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        title: "Skirt",
        isNew:true,
        oldPrice: 19,
        price: 12,
       },
       {
        id: 2,
        img: "https://images.pexels.com/photos/1457983/pexels-photo-1457983.jpeg?auto-compress&cs=tinysrgb&w=1600",
        title: "Skirt",
        isNew:true,
        oldPrice: 19,
        price: 12,},
        {
            id: 3,
            img: "https://images.pexels.com/photos/1457983/pexels-photo-1457983.jpeg?auto-compress&cs=tinysrgb&w=1600",
            title: "Skirt",
            oldPrice: 19,
            price: 12,
        },
        {
            id: 4,
            img: "https://images.pexels.com/photos/1457983/pexels-photo-1457983.jpeg?auto-compress&cs=tinysrgb&w=1600",
            title: "Skirt",
            oldPrice: 19,
            price: 12,
            }
       ];
      
  return (
    <div className='featured'>
        <div className="top">
            <h1>{type} products</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae voluptas ratione beatae aperiam nulla excepturi ipsum fugit corporis nihil eos exercitationem culpa, repudiandae dicta reprehenderit pariatur iusto, omnis nisi consequatur.
            </p>
        </div>
        <div className="bottom">
            {data.map(item=>(
                <Card item={item} key={item.id}/>))}
        </div>
    </div>
  )
}

export default Featured