import Link from "next/link"
import logo from '../../../public/images/logo.png'
import Image from "next/image"
import ButtonInternal from "../buttons/ButtonInternal"
import { FaInstagramSquare, FaFacebookSquare } from "react-icons/fa";


export default function Footer() {
    const thisYear: number = new Date().getFullYear()

    return (
        <footer className="top-full sticky">
            <div className="custom-shape-divider-top-1708060917">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>
                </svg>
            </div>
            <div className="footer-content">
                <div className="bg-jungleGreen w-full h-full px-4 pb-16 pt-24 md:pb-24 bg-opacity-[.95] md:px-12 lg:px-[72px] 2xl:px-[360px]">
                    <div className="flex flex-col space-y-8 md:flex-row pb-8 md:space-y-0 md:pb-20">
                        <div className="md:w-2/3 ">
                            <h1 className="text-4xl text-center font-bold leading-[3rem] md:leading-[4rem] md:text-start md:text-5xl lg:text-6xl lg:leading-[5rem] text-white">
                                Start your Adventure today with Hike Hawaii
                            </h1>
                        </div>

                        <div className="md:flex md:justify-end md:items-center md:w-1/3 ">
                            <ButtonInternal
                                href="/contact"
                                title="Contact Us"
                            />
                        </div>
                    </div>

                    <hr />

                    <div className="text-white pt-16 md:pt-24">
                        <div className="grid grid-cols gap-y-10 [&>div]:flex [&>div]:flex-col md:grid-cols-2 md:gap-y-12 lg:grid-cols-4">

                            <div className='flex flex-col space-y-8'>
                                <Link href="/">
                                    <Image src={logo} alt="Site Icon" className='w-[12rem] h-[4rem]' />
                                </Link>
                                <p className="text-xs">
                                    &copy; {thisYear} Hike Hawaii. All rights reserved.
                                </p>
                            </div>

                            <div className='flex flex-col space-y-2 md:pl-32'>
                                <p className='text-xl font-semibold pb-4 underline text-gray-300'>Quick Links</p>
                                <Link href={'/'}>Home</Link>
                                <Link href={'/about'}>About</Link>
                                <Link href={'/services'}>Services</Link>
                                <Link href={'/contact'}>Contact</Link>
                            </div>

                            <div className='flex flex-col space-y-2 lg:pl-32'>
                                <p className='text-xl font-semibold pb-4 underline text-gray-300' >More</p>
                                <Link href={'/services'}>Help / FAQ</Link>
                                <Link href={'/services'}>Trip Advisor</Link>
                                <Link href={'/services'}>Low fare tips</Link>
                                <Link href={'/services'}>Press</Link>
                            </div>

                            <div className='flex flex-col space-y-2 md:pl-32'>
                                <p className='text-xl font-semibold pb-4 underline text-gray-300' >Get in Touch</p>
                                <Link className='flex flex-row items-center space-x-4' href={'https://www.facebook.com/people/SANN-Opticals/100057699240184/'} target='_blank'> <span>Facebook:</span> <span><FaFacebookSquare className='text-xl hover:text-limeGreen' /></span> </Link>
                                <Link className='flex flex-row items-center space-x-4' href={'https://instagram.com/calvinceochanda?igshid=OGQ5ZDc2ODk2ZA=='} target='_blank'> <span>Instagram:</span> <span><FaInstagramSquare className='text-xl hover:text-limeGreen' /></span> </Link>
                            </div>
                        </div>

                        <div className="top-full pt-12 flex space-x-6 items-center sticky text-gray-300 text-center">
                            <Link href={'/#'} className="text-xs hover:text-limeGreen">Privacy Policy</Link>
                            <Link href={'/#'} className="text-xs hover:text-limeGreen">Cookie Policy</Link>
                            <Link href={'/#'} className="text-xs hover:text-limeGreen">Terms of Service</Link>
                        </div>

                    </div>
                </div>
            </div>
        </footer>

    )
}
