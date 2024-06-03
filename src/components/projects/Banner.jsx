'use client'
import React, { useEffect } from 'react'
import Container from '../Container'
import initializeAOS from '@/aos/aosSetup'

const Banner = () => {


    useEffect(()=>{
        initializeAOS()
    },[])
  return (
    <div className='bg-[#f9f9f9] md:py-24 sm:py-16 py-8 mt-24 overflow-hidden'>
        <Container>
            <div className='flex flex-col md:flex-row md:items-center justify-between gap-6 sm:gap-10'>
                <h1 data-aos='fade-right' data-aos-duration='300' data-aos-delay='420' className='lg:text-7xl sm:text-5xl text-4xl font-semibold'>
                Проекты
                </h1>

                <p data-aos='fade-left' data-aos-duration='300' data-aos-delay='420' className='lg:text-lg sm:text-[16px] text-sm text-gray-500 md:max-w-[600px]'>
                Мы не просто создаём проекты, мы создаем новые возможности. Строя объекты государственного масштаба, мы строим будущее. 
                </p>
            </div>
        </Container>
    </div>
  )
}

export default Banner