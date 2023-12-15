import React from 'react'

import reactIcon from '../../assets/react-js-icon.png'
import solidityIcon from '../../assets/solidity-icon.png'
import pythonIcon from '../../assets/python-icon.png'
import smartContractIcon from '../../assets/smart-contracts.png'
import tailwindIcon from '../../assets/tailwind-css-icon.png'
import web3Icon from '../../assets/web-3-icon.png'

const Skills = () => {
  return (
    <>
        <div name='skills' className='w-full min-h-screen bg-[#0a192f] text-gray-300'>
        {/* Container */}
            <div className='max-w-[1350px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>Skills</p>
                    <p className='py-4'>// These are the technologies I've worked with</p>
                </div>
    
                <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>

                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-25 h-20 mx-auto' src={solidityIcon} alt="HTML icon" />
                        <p className='my-4'>Solidity</p>
                    </div>

                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-25 h-20 mx-auto' src={smartContractIcon} alt="HTML icon" />
                        <p className='my-4'>Smart Contracts</p>
                    </div>

                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-25 h-20 mx-auto' src={reactIcon} alt="HTML icon" />
                        <p className='my-4'>React</p>
                    </div>

                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-25 h-20 mx-auto' src={web3Icon} alt="HTML icon" />
                        <p className='my-4'>Web3</p>
                    </div>

                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-25 h-20 mx-auto' src={tailwindIcon} alt="HTML icon" />
                        <p className='my-4'>Tailwind CSS</p>
                    </div>

                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-25 h-20 mx-auto' src={pythonIcon} alt="HTML icon" />
                        <p className='my-4'>Python</p>
                    </div>
                    
                </div>
            </div>
      </div>
    </>
  )
}

export default Skills