'use client'
// import Container from '@/utils/Utils';
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { FaFacebookF,FaTelegramPlane,FaPhoneAlt   } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { BiChevronDown } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import Container from './Container';
import { usePathname } from 'next/navigation';

const Nav = () => {
    const [navbarSolid,setNavbarSolid]=useState(false)
    const [isOpen,setIsOpen]=useState(false)
    const [isMd,setIsmd]=useState(false)
    const pathname=usePathname()
    console.log(pathname);

    useEffect(() => {
        const handleScroll = () => {
            const isTop = window.scrollY < 100;
            const size=window.innerWidth>=768;
            size&&setIsOpen(false)
            setIsmd(!size)
            setNavbarSolid(!isTop);
        };
    
        // Initial check for scroll position and screen size
        handleScroll();
    
        // Event listener for scroll and resize events
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize',handleScroll)
    
        // Cleanup
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.addEventListener('resize',handleScroll)
        };
    }, []);
  return (
    <nav className={`${navbarSolid||isOpen&&isMd ? 'bg-white' : 'bg-transparent'} py-6 fixed top-0 left-0 w-full z-50 transition-colors duration-500`}>
        <Container>
        <div className='hidden md:flex items-center justify-between'>

        <div className='flex items-center gap-1 lg:gap-12'> 
        <div>
            <Link href={'/'}>
                <img className='w-full max-w-[125px] lg:max-w-[150px] object-contain' src={navbarSolid?'/logo-dark.svg':'/logo.svg'} alt="" />
            </Link>
        </div>
        
        <ul className='flex items-center gap-0 lg:gap-8'>
            <li>
              <Link href={'/about'} className={`flex items-center gap-4 group text-[14px] lg:text-[16px] ${navbarSolid?'text-black':'text-white'} transition-colors duration-300`}>
                <div className={`w-[7px] h-[7px] bg-main rotate-45 scale-0 opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100 ${pathname=='/about'&&'scale-100 opacity-100'}`}>
                </div>
                О компании
                </Link> 
            </li>
            <li>
                <Link href={'/projects'} className={`flex items-center gap-4 group text-[14px] lg:text-[16px] ${navbarSolid?'text-black':'text-white'} transition-colors duration-300`}>
                <div className='w-[7px] h-[7px] bg-main rotate-45 scale-0 opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100'>
                </div>
                Проекты
                </Link> 
            </li>
            <li>
                <Link href={'/'} className={`flex items-center gap-4 group text-[14px] lg:text-[16px] ${navbarSolid?'text-black':'text-white'} transition-colors duration-300`}>
                <div className='w-[7px] h-[7px] bg-main rotate-45 scale-0 opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100'>
                </div>
                Новости
                </Link> 
            </li>
            <li>
                <Link href={'/'} className={`flex items-center gap-4 group text-[14px] lg:text-[16px] ${navbarSolid?'text-black':'text-white'} transition-colors duration-300`}>
                <div className='w-[7px] h-[7px] bg-main rotate-45 scale-0 opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100'>
                </div>
                Контакты
                </Link> 
            </li>
        </ul>
        </div>

        <div className='flex items-center gap-5 lg:gap-10'>
        <div className='flex items-center gap-4'>
            <Link className={`text-lg ${navbarSolid?'text-black':'text-white'} hover:text-main hover:scale-125 transition-all duration-300`} href={'https://business.facebook.com/latest/home?asset_id=866538573482797&nav_ref=push'}>
                <FaFacebookF/>
            </Link>
            <Link className={`text-[16px] lg:text-xl ${navbarSolid?'text-black':'text-white'} hover:text-main hover:scale-125 transition-all duration-300`} href={'https://www.instagram.com/discover_invest/?igshid=ZDdkNTZiNTM%3D'}>
                <RiInstagramFill/>
            </Link>
            <Link className={`text-xl ${navbarSolid?'text-black':'text-white'} hover:text-main hover:scale-125 transition-all duration-300`} href={'https://t.me/discovery_invest'}>
                <FaTelegramPlane/>
            </Link>
        </div>

        <div className="relative group cursor-pointer">
              <p className={`text-[14px] uppercase flex items-center ${navbarSolid?'text-black':'text-white'}`}>en <BiChevronDown className='text-2xl text-main'/></p>
              <div className="flex-col gap-1 bg-main overflow-hidden text-white text-[12px] lg:text-[14px] px-4 py-2 absolute transition-all duration-300 transform scale-0 top-full left-1/2 -translate-x-1/2 opacity-0 group-hover:scale-100 group-hover:opacity-100 group-hover:flex">
                <button  className="p-1 border-b-[1px] border-b-transparent hover:border-b-white">
                  EN
                </button>
                <button  className="p-1 border-b-[1px] border-b-transparent hover:border-b-white">
                  RU
                </button>
                <button  className="p-1 border-b-[1px] border-b-transparent hover:border-b-white">
                  UZ
                </button>
              </div>
        </div>


            <Link className='text-white text-[14px] lg:text-xl bg-main p-[5px] lg:p-2' href={'tel:+998712888888'}>
                <FaPhoneAlt/>
            </Link>
        </div>

        </div>



        <div className='flex md:hidden items-center justify-between'>
            <Link href={'/'}>
                <img className='w-full max-w-[150px] object-contain' src={navbarSolid||isOpen?'/logo-dark.svg':'/logo.svg'} alt="" />
            </Link>

            <div className='flex items-center gap-7'>
                <div className='border-main border-2 p-2 flex items-center justify-center pulse__animation'>
                    <Link className={`${navbarSolid||isOpen?'text-black':'text-white'} transition-colors duration-500 text-lg`} href={'tel:+998712888888'}>
                        <FaPhoneAlt/>
                    </Link>
                </div>
                {
                    !isOpen?
                    <button onClick={e=>setIsOpen(true)}>
                        <GiHamburgerMenu className={`${navbarSolid?'text-black':'text-white'} transition-colors duration-500 text-3xl`}/>
                    </button>
                    :
                    <button onClick={e=>setIsOpen(false)}>
                        <IoClose className={`${navbarSolid||isOpen?'text-black':'text-white'} transition-colors duration-500 text-3xl`}/>
                    </button>
                }
            </div>


            <div className={`bg-white md:hidden absolute w-full left-0 py-5 ${!isOpen?'top-[-360%]':'top-[100%]'} transition-all duration-500`}>
                <Container>
                    <ul className='flex flex-col gap-8'>
                        <li>
                        <Link href={'/a'} className={`text-[16px] sm:text-lg`}>
                            О компании
                            </Link> 
                        </li>
                        <li>
                            <Link href={'/projects'} className={`text-[16px] sm:text-lg`}>
                            Проекты
                            </Link> 
                        </li>
                        <li>
                            <Link href={'/'} className={`text-[16px] sm:text-lg`}>
                            Новости
                            </Link> 
                        </li>
                        <li>
                            <Link href={'/'} className={`text-[16px] sm:text-lg`}>
                            Контакты
                            </Link> 
                        </li>
                        <li>
                            <div className="flex justify-start gap-3">
                                <button className="hover:bg-white sm:text-[16px] text-sm hover:text-black font-bold">
                                EN
                                </button>
                                <button className="hover:bg-white sm:text-[16px] text-sm hover:text-black font-bold">
                                RU
                                </button>
                                <button className="hover:bg-white sm:text-[16px] text-sm hover:text-black font-bold">
                                UZ
                                </button>
                            </div>
                        </li>
                        <li>
                            <div className='flex items-center gap-4'>
                                <Link className={`sm:text-[18px] text-[16px] hover:text-main transition-colors duration-300`} href={'https://business.facebook.com/latest/home?asset_id=866538573482797&nav_ref=push'}>
                                    <FaFacebookF/>
                                </Link>
                                <Link className={`sm:text-xl text-lg hover:text-main transition-colors duration-300`} href={'https://www.instagram.com/discover_invest/?igshid=ZDdkNTZiNTM%3D'}>
                                    <RiInstagramFill/>
                                </Link>
                                <Link className={`sm:text-xl text-lg hover:text-main transition-colors duration-300`} href={'https://t.me/discovery_invest'}>
                                    <FaTelegramPlane/>
                                </Link>
                            </div>
                        </li>
                    </ul>
                </Container>
            </div>
        </div>
        </Container>
    </nav>
  )
}

export default Nav