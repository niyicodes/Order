import React from 'react'
import star from '../assets/images/star.png'
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import { Divider } from '@mui/material';
const SmallNav = () => {
  return (
    <header className='small-nav' style={{borderBottomLeftRadius:'15px', borderBottomRightRadius:'15px'}}>
      <div className='flex gap-2 py-3 pl-[20px] items-center'>
        <img src={star} alt="star" className='w-auto'/>
        <p className='text-md font-medium'>Get 5% Off your first order, <small className='text-[#FC8A06]'>Promo:ORDER5</small></p>
      </div>
      <div className='flex justify-between gap-[20px] overflow-hidden'>
      <div className='flex gap-2 py-3 pl-[20px] items-center'>
        <FmdGoodIcon />
        <p className='text-md font-medium'>Regent Sreet, A4, AA2401, London, <small className='text-[#FC8A06]'>Change Location</small></p>
      </div>
        <div className='cart-area'>
          <ShoppingCartIcon />
          <Divider orientation="vertical" flexItem sx={{fill:'white'}}/>
          <p>23 items</p>
          <Divider orientation="vertical" flexItem />
          <p>GBP 79.89</p>
          <Divider orientation="vertical" flexItem />
          <ArrowCircleDownIcon />
        </div>
      </div>
    </header>
  )
}

export default SmallNav