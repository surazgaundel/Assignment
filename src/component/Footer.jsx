import React from 'react'
import {AiOutlineCopyrightCircle} from 'react-icons/ai';
export default function Footer() {
  return (
    <div className="bg-blue text-yellow flex items-center justify-around h-[10vh] text-sm md:text-base">
        <div className='md:w-1/3 text-2xl font-semibold'>
            <h1>XYZ <span className='text-sm'>company</span></h1>
        </div>
        <div className='flex gap-1 items-center'>
            <span><AiOutlineCopyrightCircle/></span>
            <p>All rights reserved.</p>
        </div>
    </div>
  )
}
