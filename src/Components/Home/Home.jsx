import React from 'react'
import Banner from './Banner/Banner'
import Footer from '../Footer/Footer'
import Content from './Content/Content'

const Home = () => {
  return (
    <div className="home-container">
      <Banner/>
      <Content/>
      <Footer/>
    </div>
  )
}

export default Home