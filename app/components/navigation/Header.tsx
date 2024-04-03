"use client"

import Link from 'next/link'
import { useState } from 'react'
import Image from 'next/image'
import logo from '../../../public/images/logo.png'
import { FaMobile } from 'react-icons/fa'

export default function Header() {

    const [ isOpen, setIsOpen ] = useState(true);
    const [ isHidden, setIsHidden ] = useState(true);
    const [ isAboutClosed, setIsAboutClosed ] = useState(true);

    const handleOpen = () => {
        setIsOpen(!isOpen);
    }

    const handleHidden = () => {
        setIsHidden(!isHidden);
    }

    const handleAbout = () => {
        setIsAboutClosed(!isAboutClosed)
    }

    return (
        <nav className={`${isOpen ? '' : 'sticky'} bg-gradient-to-r from-jungleGreen via-darkGreen to-jungleGreen z-30 w-full top-0 px-4 py-[0.375rem] md:py-2 md:px-12   2xl:px-[200px]`}>
            <div className="flex items-center space-x-10 justify-between">
                <Link href="/">
                    <Image src={logo} alt="Site Icon" className='w-[4rem] h-[2.5rem] md:w-[6rem] md:h-[4rem]' />
                </Link>

                <div className="hidden space-x-5 text-white text-lg [&>a]:font-semibold [&>div>div>span]:font-semibold [&>div>div>div>a]:font-semibold [&>div>div>div>a]:text-lg md:flex md:flex-wrap md:items-center md:justify-center lg:space-x-7 lg:text-xl">
                    {/* <div className="hidden"> */}
                    <Link href="/" className="hover:text-limeGreen">Home</Link>
                    {/* <Link href="/services" className="hover:text-limeGreen">Services</Link>
                    <Link href="/about" className="hover:text-limeGreen">About</Link> */}
                    {/* <div onMouseEnter={handleAbout} onMouseLeave={handleAbout} onClick={handleAbout} className="cursor-pointer z-30">
                        <div className="hover:text-limeGreen flex items-center space-x-1">
                            <span>Branches</span>
                            <span>{isAboutClosed ? <MdOutlineKeyboardArrowDown /> : <MdOutlineKeyboardArrowUp />}</span>
                        </div>
                        {isAboutClosed ? '' :
                            <div className="z-50">
                                <div className="bg-white absolute pr-9 pl-3 py-3 flex flex-col space-y-3 shadow-md hover:[&>a]:text-limeGreen">
                                    <Link onClick={handleAbout} href="/branches/mombasa" >Mombasa Branch</Link>
                                    <Link onClick={handleAbout} href="/branches/taveta" >Taveta Branch</Link>
                                    <Link onClick={handleAbout} href="/branches/kilifi" >Kilifi Branch</Link>
                                    <Link onClick={handleAbout} href="/branches/hola" >Hola Branch</Link>
                                    <Link onClick={handleAbout} href="/branches/voi" >Voi Branch</Link>
                                    <Link onClick={handleAbout} href="/branches/mpeketoni" >Mpeketoni Branch</Link>
                                </div>
                            </div>}
                    </div> */}
                    {/* <Link href="/components/contact" className="hover:text-limeGreen">Contact Us</Link> */}
                    <button
                        className='bg-limeGreen
                            px-8 py-3 rounded-full text-jungleGreen text-sm
                            hover:scale-105 hover:ease-in-out hover:duration-200'
                    >
                        <Link className='flex items-center space-y-2 flex-col' href={`/#`}>
                            <span className='flex items-center space-x-3'>
                                <span> <FaMobile /> </span>
                                <span>Call Us</span>
                            </span>
                            <span>+198-(112)-67232</span>
                        </Link>
                    </button>
                </div>


                <button
                    onClick={() => { handleOpen(); handleHidden() }}
                    aria-label='Hamburger Menu'
                    className={`hamburger ${isOpen ? '' : 'open'} block md:hidden focus:outline-none hover:text-[#ec4949]`}
                >
                    <div>
                        <span className="hamburger-top"></span>
                        <span className="hamburger-middle"></span>
                        <span className="hamburger-bottom"></span>
                    </div>
                </button>
            </div>

            <div className="md:hidden">
                <div id="menu" className={`flex-col ${isHidden ? 'hidden' : 'flex'} absolute text-white self-end py-8 bg-gradient-to-r from-jungleGreen via-darkGreen to-jungleGreen bg-opacity-95 sm:w-auto sm:self-center left-0 right-0 drop-shadow-md`}>
                    <div className="mr-auto flex flex-col space-y-6 pl-4">
                        <Link onClick={() => { handleOpen(); handleHidden() }} href="/">Home</Link>
                        {/* <Link onClick={() => { handleOpen(); handleHidden() }} href="/services">Services</Link> */}
                        {/* <Link onClick={() => { handleOpen(); handleHidden() }} href="/about">About</Link> */}
                        {/* <div onClick={handleAbout} className="cursor-pointer">
                            <div className="flex items-center space-x-1">
                                <span>Branches</span>
                                <span>{isAboutClosed ? <MdOutlineKeyboardArrowDown /> : <MdOutlineKeyboardArrowUp />}</span>
                            </div>
                            {isAboutClosed ? '' :
                                <div className="z-50">
                                    <div className="relative shadow-md pt-2 flex flex-col space-y-4 [&>a]:border-b [&>a]:pb-2 hover:[&>a]:border-lightBlue">
                                        <Link onClick={() => { handleOpen(); handleHidden() }} href="/branches/mombasa" >Mombasa Branch</Link>
                                        <Link onClick={() => { handleOpen(); handleHidden() }} href="/branches/taveta" >Taveta Branch</Link>
                                        <Link onClick={() => { handleOpen(); handleHidden() }} href="/branches/kilifi" >Kilifi Branch</Link>
                                        <Link onClick={() => { handleOpen(); handleHidden() }} href="/branches/hola" >Hola Branch</Link>
                                        <Link onClick={() => { handleOpen(); handleHidden() }} href="/branches/voi" >Voi Branch</Link>
                                        <Link onClick={() => { handleOpen(); handleHidden() }} href="/branches/mpeketoni" >Mpeketoni Branch</Link>
                                    </div>
                                </div>
                            }
                        </div> */}
                        {/* <Link onClick={() => { handleOpen(); handleHidden() }} href="/contact">Contact Us</Link> */}
                        <button
                            className='bg-limeGreen
                            px-4 py-2 rounded-md text-jungleGreen text-sm
                            hover:scale-105 hover:ease-in-out hover:duration-200'
                        >
                            <Link className='flex items-center space-y-1 flex-col' href={`/#`}>
                                <span className='flex items-center space-x-3'>
                                    <span> <FaMobile /> </span>
                                    <span>Call Us</span>
                                </span>
                                <span>+198-(112)-67232</span>
                            </Link>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    )
}
