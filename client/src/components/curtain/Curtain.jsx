import React from 'react'
import MetamaskIcon from '../../assets/metamask.svg';

const Curtain = () => {
  return (
    <>
        <div name="curtain" className='w-full h-screen bg-[#0a192f] text-gray-300'>
            <div className='w-full h-screen flex justify-center items-center text-center'>
                <h1 className='text-3xl flex items-center'>Connect Metamask <img className="h-20 w-20 mx-2" src={MetamaskIcon} alt="MetaMask" /> to view the portfolio!</h1>
            </div>
        </div>
    </>
  )
}

export default Curtain