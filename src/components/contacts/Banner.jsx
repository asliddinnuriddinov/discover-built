import React from 'react'
import Container from '../Container'
import { HiArrowDown } from "react-icons/hi";

const Banner = () => {
  return (
    <div className='relative h-[100vh]'>
        <div className=' absolute top-0 left-0 w-full h-full z-[-1]'>
            <img className='object-cover h-full w-full' src="/bg-about.jpg" alt="" />
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60"></div>
        <Container>
            <div className='h-[100vh] flex flex-col items-start justify-center md:justify-end sm:pb-32 text-white relative'>
                <h1 className='xl:text-8xl lg:text-7xl sm:text-6xl text-4xl font-bold tracking-wider'>КОНТАКТЫ</h1>
                <p className='lg:text-xl sm:text-lg text-[16px] font-semibold my-14 max-w-[700px]'>
                    Оставьте свои контакты, заполнив текущую форму, и мы свяжемся с вами в ближайшее время.
                </p>
                <a href="#contact__form" className='border-[2px] border-main bg-transparent flex items-center justify-center md:p-4 md:text-4xl p-3 text-3xl text-main hover:text-white hover:bg-main transition-colors duration-300'>
                    <HiArrowDown/>
                </a>
            </div>
        </Container>
    </div>
  )
}

export default Banner