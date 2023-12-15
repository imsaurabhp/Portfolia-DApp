import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import ProfileImg from '../../assets/ProfileImg.jpg'
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import ArrowLink from '../arrowLink/ArrowLink'

const Profile = () => {
  return (
    <>
    <div name="profile" className='w-full h-screen bg-[#0a192f]'>
    
    {/* Container */}
        <div className='max-w-[1350px] mx-auto px-8 flex flex-col justify-center h-full pt-16'>
            <img src={ProfileImg} alt='Profile Image' className='w-40 rounded-full'/>
            <p className='text-white font-bold'>Hi, my name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Saurabh Patil</h1>
            <p className='text-[#8892b0] py-4 max-w-[700px]'>An enthusiat who is looking to spread its wings in the world of Blockchain | Solidity | Ethereum | Smart Contracts | DApps</p>
            <div>
                <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#020305]'>View Projects 
                <span className='group-hover:rotate-90 duration-300'>
                  <ArrowLink />
                {/* <ScrollLink to="projects" smooth={true} duration={500} offset={-100}><HiArrowNarrowRight className='ml-3'/></ScrollLink> */}
                </span>
                </button>
            </div>

        </div>
    </div>
    </>
  )
}

export default Profile