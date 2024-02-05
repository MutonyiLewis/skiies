import React from 'react'
import './Categories.scss'
import { Link } from 'react-router-dom'



const Categories = () => {
  return (
    <div className="categories">
        <div className="col">
            <div className="row">
                <img src='https://images.pexels.com/photos/1176618/pexels-photo-1176618.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt='Pic'></img>
                <button >
                    <Link className="link" to="products/1">Sale</Link>
                </button>
            </div>
            <div className="row">
                <img src='https://images.pexels.com/photos/1176618/pexels-photo-1176618.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt='Pic'></img>
                    <button >
                        <Link className="link" to="products/1">Caps</Link>
                    </button>
            </div>
        </div>
        <div className="col">
            <div className="row">
                <img src='https://images.pexels.com/photos/1176618/pexels-photo-1176618.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt='Pic'></img>
                <button >
                    <Link className="link" to="products/1">Hoodies</Link>
                </button>
            </div>
        </div>
        <div className="col col-l">
            <div className="row">
                <div className="col">
                    <div className="row">
                        <img src='https://images.pexels.com/photos/1176618/pexels-photo-1176618.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt='Pic'></img>
                        <button >
                            <Link className="link" to="products/1">Sweatshirts</Link>
                        </button>
                    </div>
                </div>
                <div className="col">
                    <div className="row">
                        <img src='https://images.pexels.com/photos/1176618/pexels-photo-1176618.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt='Pic'></img>
                        <button >
                            <Link className="link" to="products/1">Denim</Link>
                        </button>
                    </div>
                </div>
            </div>
            <div className="row">
                <img src='https://images.pexels.com/photos/1176618/pexels-photo-1176618.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt='Pic'></img>
                <button >
                    <Link className="link" to="products/1">T-shirts</Link>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Categories