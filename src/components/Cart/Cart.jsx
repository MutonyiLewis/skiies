import React, { useState } from 'react';
import './Cart.scss';
import { DeleteOutline } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem, resetCart } from '../../redux/cartReducer';
import axios from 'axios'; // Import axios for making HTTP requests

const Cart = () => {
    const products = useSelector(state => state.cart.products);
    const dispatch = useDispatch();
    const [phoneNumber, setPhoneNumber] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('mpesa'); // Default to M-Pesa
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const totalPrice = () => {
        let total = 0;
        products.forEach(item => {
            total += item.quantity * item.price;
        });
        return total.toFixed(2);
    };

    const handleCheckout = async () => {
        setLoading(true);
        setError(null);
        try {
            // Make a POST request to your backend server with phone number and total
            const response = await axios.post('http://localhost:5000/stkpush', {
                phoneNumber: phoneNumber,
                total: totalPrice(),
                paymentMethod: paymentMethod // Include selected payment method
            });
            console.log(response.data); // Handle success response
            // Display success message to the user
        } catch (error) {
            setError(error.response.data.message); // Handle error response
        }
        setLoading(false);
    };

    return (
        <div className="cart">
            <h1>Products in your cart</h1>
            {products?.map(item => (
                <div className="item" key={item.id}>
                    <img src={process.env.REACT_APP_UPLOAD_URL + item.img} alt='selected item' />
                    <div className="details">
                        <h1>{item.title}</h1>
                        <p>{item.desc?.substring(0, 100)}</p>
                        <div className="price">
                            {item.quantity} x {item.price}
                        </div>
                    </div>
                    <DeleteOutline className='delete' onClick={() => dispatch(removeItem(item.id))} />
                </div>
            ))}
            <div className="total">
                <span>Sub Total</span>
                <span>Ksh. {totalPrice()}</span>
            </div>
            <div className="payment-method">
                <label htmlFor="payment">Payment Method:</label>
                <select id="payment" value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)}>
                    <option value="mpesa">M-Pesa</option>
                    <option value="card">Credit/Debit Card</option>
                    {/* Add more payment methods as needed */}
                </select>
            </div>
            {paymentMethod === 'mpesa' && (
                <div className="mpesa-number">
                    <input
                        type="text"
                        placeholder="Enter your M-Pesa number"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                </div>
            )}
            <button className='button' onClick={handleCheckout} disabled={loading}>Proceed to Checkout</button>
            {error && <p className="error">{error}</p>}
            <span className='reset' onClick={() => dispatch(resetCart())}>Reset Cart</span>
        </div>
    );
};

export default Cart;
