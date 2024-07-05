import React from 'react'
import { Outlet } from 'react-router-dom'
import SmallNav from '../Components/SmallNav'
import Navbar from '../Components/Navbar'

const HomeLayout = () => {
  return (
    <>
    <SmallNav />
    <Navbar />
    <div>
      <Outlet />
    </div>
    </>
  )
}

export default HomeLayout