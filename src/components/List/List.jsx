import React from 'react'
import './List.scss'
import Card from '../Card/Card';

const List = () => {
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
    <div className="list">
        {data?.map(item=>(
            <Card item={item} key={item.id}/>
        ))}
    </div>
  )
}

export default List