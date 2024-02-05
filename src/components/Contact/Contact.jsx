import React from 'react'
import './Contact.scss'
import {FacebookRounded, Instagram,Twitter,Google,Pinterest} from "@mui/icons-material";

const Contact = () => {
  return (
    <div className="contact">
        <div className="wrapper">
            <span>BE IN TOUCH WITH SKIIES</span>
            <div className="mail">
                <input  type='text' placeholder='Enter your message' />
                <button>JOIN US</button>
            </div>
            <div className="icons">
                <FacebookRounded />
                <Instagram />
                <Twitter />
                <Google />
                <Pinterest />
            </div>
        </div>
    </div>
  )
}

export default Contact