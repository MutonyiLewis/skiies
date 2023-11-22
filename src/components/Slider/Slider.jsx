import React from 'react'
import './Slider.scss'
import EastOutLinedIcon from "@mui/icons-material/EastOutlined"
import WestOutlinedIcon from '@mui/icons-material/WestOutlined';
import { useState } from 'react';

const Slider = () => {

  const [currentSlide, setCurrentSlide] = useState(0)

    const data = [
        "/img/KahushnSkiies.jpg",
        "/img/CollectionTwoTwo.jpg",
        "/img/CollectionTwo.jpg",
        "/img/CollectionThree.jpg",
        "/img/gang.jpg",
    ];

  const previousSlide=()=>{
    setCurrentSlide(currentSlide === 0 ? 4 : (prev) => prev-1)
  };
  const nextSlide=()=>{
    setCurrentSlide(currentSlide === 4 ? 0 : (prev) => prev+1)
  };


  
  return (
    <div className='slider'>
      <div className="container" style={{transform:`translateX(-${currentSlide * 102}vw)`}}>
        <img src={data[0]} alt="Slider"/>
        <img src={data[1]} alt="Slider"/>
        <img src={data[2]} alt="Slider"/>
        <img src={data[3]} alt="Slider"/>
        <img src={data[4]} alt="Slider"/>
      </div>
      <div className="icons">
        <div className="icon" onClick={previousSlide}>
          <WestOutlinedIcon/>
        </div>
        <div className="icon" onClick={nextSlide}>
          <EastOutLinedIcon/>
        </div>
      </div>
    </div>
  )
}

export default Slider