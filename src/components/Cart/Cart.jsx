import React from 'react'
import './Cart.scss'
import{ DeleteOutline } from '@mui/icons-material'

const Cart = () => {

    const data = [
        {
        id: 1,
        img: "https://images.pexels.com/photos/1457983/pexels-photo-1457983.jpeg?auto-compress&cs=tinysrgb&w=1600",
        img2: "https://images.pexels.com/photos/2703433/pexels-photo-2703433.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        title: "Skirt",
        desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate quaerat nisi eius reprehenderit iure dolor rerum maxime architecto. Deserunt beatae nulla voluptas excepturi necessitatibus at sapiente dolores suscipit minus aut.",
        isNew:true,
        oldPrice: 1900,
        price: 1200,
       },
       {
        id: 2,
        img: "https://images.pexels.com/photos/1457983/pexels-photo-1457983.jpeg?auto-compress&cs=tinysrgb&w=1600",
        title: "Skirt",
        //desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate quaerat nisi eius reprehenderit iure dolor rerum maxime architecto. Deserunt beatae nulla voluptas excepturi necessitatibus at sapiente dolores suscipit minus aut.",
        isNew:true,
        oldPrice: 1900,
        price: 1200,
        },
    ];

  return (
    <div className="cart">
        <h1>Products in your cart</h1>
        {data?.map(item=>(
            <div className="item" key={item.id}>
                <img src={item.img} alt='selected item'/>
                <div className="details">
                    <h1>{item.title}</h1>
                    <p>{item.desc?.substring(0,100)}</p>
                    <div className="price">
                        1 x {item.price}
                    </div>
                </div>
                <DeleteOutline className='delete'/>
            </div>
        ))}
        <div className="total">
            <span>Sub Total</span>
            <span>Ksh. 2500</span>
        </div>
        <button>Proceed to CheckOut</button>
        <span className='reset'>Reset Cart </span>  
    </div>

    
  )
}

export default Cart
