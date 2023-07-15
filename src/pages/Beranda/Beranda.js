import React from 'react'
import Header from '../../components/Header/Header'
import { Outlet } from 'react-router-dom'

const Beranda = () => {
  return (
  <div>
   <main>
    <Header />
    <Outlet />
   </main>
    </div>
  )
}

export default Beranda