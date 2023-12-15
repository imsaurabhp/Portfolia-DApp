import React, { useState } from "react";
import {FaBars, FaTimes, FaGithub, FaLinkedin, FaFacebook, FaTwitter} from 'react-icons/fa'
import MetamaskIcon from '../../assets/metamask.svg';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import ABI from './ABI.json'
import Web3 from 'web3'

const Navbar = ({saveState}) => {
    const [connected, setConnected] = useState(true)
    
    const navLinks = [
        {linkName:"Profile" ,linkto:"profile"},
        {linkName:"Projects" ,linkto:"projects"},
        {linkName:"Skills" ,linkto:"skills"},
        {linkName:"Experience" ,linkto:"experience"},
        {linkName:"Socials" ,linkto:"socials"}
    ]
    
    const init = async() =>{
        try{
            const web3 = new Web3(window.ethereum);
            await window.ethereum.request({method: 'eth_requestAccounts'});
            const contract = new web3.eth.Contract(ABI, "0x82867b6ce8af19250493e8920d4c738bc18ca9fd");
            saveState({web3:web3, contract:contract}) // Setting state in App.jsx
            setConnected(false)
        }
        catch(error){
            setConnected(true)
            alert("Please log into MetaMask!");
        }
    }
    
    const [open, setOpen] = useState(false);

    const handleMenu = () => {
        setOpen((prev) => !prev);
    }

    const closeMenu = () => {
        setOpen(false);
    };

    return (
        <>
            <div className="sticky top-0 w-full bg-[#0a192f]" style={{ zIndex: 10 }}>
                <div className="mx-auto px-4 sm:px-6 lg-px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center">
                            <button onClick={init} disabled={!connected} className={`border-2 px-6 py-2 rounded-full flex items-center ${connected ? 'bg-orange-500 text-white border-orange-500 hover:bg-orange-300' : 'bg-green-500 border-green-500 text-white'}`}>
                                <span className="mr-2">{!connected ? 'Connected' : 'Connect'} </span>
                                <img className="h-5" src={MetamaskIcon} alt="MetaMask" />
                            </button>
                        </div>
                        {/* navLinks */}
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-4">
                                {navLinks.map((navLink, index) => (
                                    <ScrollLink className='text-gray-300 transition-all duration-500 hover:bg-gray-600 hover::text-white px-3 py-2 rounded-md text-md font-medium cursor-pointer' to={navLink.linkto} smooth={true} duration={1500} offset={-100}>{navLink.linkName}</ScrollLink>
                                ))}
                            </div>
                        </div>
                        {/* hamburger button */}
                        <div className="-mr-2 flex md:hidden">
                            <button type="button" onClick={handleMenu} className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                                <span className="sr-only">Open Main Menu</span>
                                {open === true ? <FaTimes /> : <FaBars />}
                            </button>
                        </div>
                    </div>
                </div>
                {/* mobile-menu */}
                {open ? (
                    <div className="min-h-screen md:hidden">
                        <div className="ox-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navLinks.map((navLink, index) => (
                            <ScrollLink key={index} className='text-gray-300 hover:bg-gray-700 hover:text-white block pl-6 py-2 rounded-md text-base font-medium cursor-pointer' to={navLink.linkto} smooth={true} duration={1500} offset={-750} onClick={closeMenu}>
                                <span className="border-b border-gray-300">{navLink.linkName}</span>
                            </ScrollLink>
                        ))}
                        </div>
                    </div>
                ) : null}
                
            </div>
        </>
    );
};

export default Navbar;
