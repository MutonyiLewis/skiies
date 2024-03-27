import React, { useState } from 'react'
//import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'; 
import {Link} from "react-router-dom"
import "./Navbar.scss"
import Cart from '../Cart/Cart';
import { useSelector } from 'react-redux'

const Navbar = () => {

  const [open, setOpen] = useState(false)
  const products = useSelector(state=>state.cart.products)


  return (
    <div className='navbar'>
      <div className="wrapper">
        <div className="left">
          <div className="item">
            <Link className="link" to="/products/1">Collection 1</Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/2">Collection 2</Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/3">Collection 3</Link>
          </div>
        </div>
        <div className="center">
          <Link className="link" to="/"><img src="/img/skiies.png" alt="studiologo" width={40}/></Link>
        </div>
        <div className="right">
        <div className="item">
            <Link className="link" to="/">Home</Link>
          </div>
          <div className="item">
            <Link className="link" to="/Contact">Reach the skiies</Link>
          </div>
          <div className="icons">
            <SearchIcon/>
            <PersonOutlineIcon/>
            <FavoriteBorderIcon/>
            <div className="cartIcon" onClick={()=>setOpen(!open)}>
              <ShoppingCartIcon/>
              <span>{products.length}</span>
            </div>
        </div>
        </div>
      </div>
      {open && <Cart />}
    </div>
  )
}

export default Navbar