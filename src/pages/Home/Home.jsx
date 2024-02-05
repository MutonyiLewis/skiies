import React from 'react'
//import Slider from '../../components/Slider/Slider'
import './Home.scss'
import Featured from '../../components/Featured/Featured'

const Home = () => {
  return (
    <div className='home'>
      {/* <Slider/> */}
      <Featured type="featured"/>
      <Featured type="trending" />
    </div>
  )
}

export default Home