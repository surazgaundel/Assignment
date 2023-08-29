import React from 'react'
import { links } from '../utils/component'
import {AiOutlineShoppingCart} from 'react-icons/ai';
export default function NavBar() {
  return (
    <div className='container flex flex-row items-center justify-around shadow-md p-1 rounded-md'>
        <div className='md:w-1/3 text-2xl font-bold'>
            <h1>XYZ <span>company</span></h1>
        </div>
        <div className='md:flex justify-around gap-2 w-[50%] hidden md:text-xs lg:text-xl'>
            {links.map(link=>{
                const {id,name}=link;
                return(
                    <li key={id} className='list-none hover:text-red cursor-pointer hover:underline'>{name}</li>
                )
            })}
        </div>
        <div>
            <button className='flex items-center gap-1 bg-yellow px-2 py-1 rounded-md hover:bg-blue hover:text-yellow'>Cart<span><AiOutlineShoppingCart/></span></button>
        </div>
    </div>
  )
}
