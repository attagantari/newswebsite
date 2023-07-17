import React from 'react'
import Navbar from '../Navbar/Navbar'
import './Header.css'

const Header = () => {
  return (
    <div className='holder'>
      <header className='header'>
        <Navbar />
        <div className='header-content flex flex-c text-center  text-black'><br/>
          <h2 className='header-title text-capitalize'>Welcome To Buletin</h2>
          <p className='header-text fs-18 fw-3'>Narasi Kerajinan yang memicu inspirasi, pengetahuan, dan hiburan</p><br />
        </div>
      </header>
      <div className="container"><br />
        </div>
      </div>
  )
}

export default Header