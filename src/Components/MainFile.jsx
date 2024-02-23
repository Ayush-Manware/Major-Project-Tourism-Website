import React from 'react'
import Topbar from './Topbar/Topbar'
import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'

const MainFile = () => {
  return (
   <div className="main-container">
    <Topbar/>
    <Navbar/>
    <Footer/>
   </div>
  )
}

export default MainFile