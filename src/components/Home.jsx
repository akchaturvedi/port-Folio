import React from 'react'
import Profile from '../assets/profile.png'
import { Link } from 'react-scroll'
import {MdOutlineKeyboardArrowRight} from 'react-icons/md'
const Home = () => {
  return (
    <div name="home"
    className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 '>
      

      <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full  px-4 md:flex-row'>
        <div className='flex flex-col justify-center h-full pt-[90px]'>
            <h2 className='text-4xl md:text-7xl font-bold text-white'>I am a Frontend Developer</h2>
            <p className='text-gray-500 md:py-4 max-w-md'>
                I have started my Career in building and designing 
                software
                Currently, I love to work on web application using
                technologies like 
                React, Tailwind and CSS
            </p>
            <div>
                <Link to='portFolio' smooth duration={300} className='group text-white px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer w-[120px]'>
                    PortFolio 
                    <span className='group-hover:rotate-90 duration-300'>
                    <MdOutlineKeyboardArrowRight size={25} className='ml-1'/> 
                    </span>
                </Link>
            </div>
        </div>
        <div>
            <img src={Profile} alt="My profile" className='rounded-2xl mx-auto w-full' />
        </div>
        
      </div>
    </div>
  )
}

export default Home
