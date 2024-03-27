import React from 'react'
import './Cart.scss'
import{ DeleteOutline } from '@mui/icons-material'
import { useDispatch, useSelector } from 'react-redux'
import { removeItem, resetCart } from '../../redux/cartReducer';

const Cart = () => {

    const products = useSelector(state=>state.cart.products)
    const dispatch = useDispatch()
    const totalPrice = () => {
        let total = 0
        products.forEach(item=>
            total+=item.quantity*item.price)
            return total.toFixed(2)
    }

    console.log(products)
  return (
    <div className="cart">
        <h1>Products in your cart</h1>
        {products?.map(item=>(
            <div className="item" key={item.id}>
                <img src={process.env.REACT_APP_UPLOAD_URL+item.img} alt='selected item'/>
                <div className="details">
                    <h1>{item.title}</h1>
                    <p>{item.desc?.substring(0,100)}</p>
                    <div className="price">
                        {item.quantity} x {item.price}
                    </div>
                </div>
                <DeleteOutline className='delete' onClick={()=>dispatch(removeItem(item.id))}/>
            </div>
        ))}
        <div className="total">
            <span>Sub Total</span>
            <span>Ksh. {totalPrice()}</span>
        </div>
        <button>Proceed to CheckOut</button>
        <span className='reset' onClick={()=>dispatch(resetCart())}>Reset Cart </span>  
    </div>

    
  )
}

export default Cart
