'use client'
import initializeAOS from '@/aos/aosSetup'
import React, { useEffect } from 'react'
import Container from '../Container'
import Link from 'next/link'


const Banner = () => {


    useEffect(()=>{
        initializeAOS()
    },[])
  return (
    <div className='relative h-[100vh]'>
        <div className="absolute top-0 left-0 w-full h-full z-[-1]">
            <video autoPlay muted loop className="object-cover w-full h-full">
            <source src="/banner.mp4" type="video/mp4" />
            Your browser does not support the video tag.
            </video>
        </div>

        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>

        <Container>
        <div className="h-[100vh] flex flex-col justify-center sm:justify-end sm:pb-32 text-white relative">
            <h1 data-aos='zoom-in' data-aos-duration='700' data-aos-delay='300' className="text-[40px] sm:text-[58px] md:text-[70px] lg:text-[80px] font-extrabold leading-normal uppercase tracking-widest">Discover<br />Invest</h1>
            <p data-aos='fade-right' data-aos-duration='700' data-aos-delay='340' className="mt-7 mb-8 text-[16px] sm:text-xl lg:text-2xl font-bold">Совершенство во всём</p>
            <div data-aos='fade-up' data-aos-duration='700' data-aos-delay='300' className="flex items-center gap-12">
                <a className="relative border-[1px] border-main block h-[45px] sm:h-[55px] w-[120px] sm:w-[150px] lg:h-[60px] lg:w-[205px] group" href="#projects">
                    <span className='w-full h-full sm:text-[16px] text-sm absolute flex items-center justify-center group-hover:left-0 group-hover:bottom-0 left-[-10%] bottom-[-20%] transition-all duration-500 bg-main border-[1px] border-main'>
                        проекты
                    </span>
                </a>
                <a className="relative border-[1px] border-main block h-[45px] sm:h-[55px] w-[120px] sm:w-[150px] lg:h-[60px] lg:w-[205px] group" href="#projects">
                    <span className='w-full h-full sm:text-[16px] text-sm absolute flex items-center justify-center group-hover:left-0 group-hover:bottom-0 left-[-10%] bottom-[-20%] transition-all duration-500 border-[1px] border-main'>
                        Контакты
                    </span>
                </a>
            </div>
        </div>
        </Container>

    </div>
  )
}

export default Banner