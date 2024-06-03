'use client'
import React, { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import HistoryCard from './HistoryCard';
import Container from '../Container';

const History = () => {
    const [active,setActive]=useState(0)
    const swiperRef=useRef(null)

    const handleSlideChange = (swiper) => {
        setActive(swiper.realIndex); // Update active state with the real index of the slide
    }
    const handleYearChange=(index)=>{
        setActive(index)
        swiperRef.current.swiper.slideTo(index)
    }
  return (
    <div className='bg-cover bg-center py-16 sm:py-28' style={{backgroundImage:"url(/bg-timeline.jpg)"}}>
        <div className='flex items-center justify-around mb-16 sm:mb-28 relative'>
            <div className='w-full border-b-[5px] border-b-main border-dotted absolute bottom-3 sm:bottom-4 left-0'></div>
            <p onClick={e=>handleYearChange(0)} className={`${active==0?'sm:text-4xl text-3xl text-main':'sm:text-2xl text-xl'} transition-all duration-500 flex flex-col items-center gap-4 font-bold text-gray-500 cursor-pointer`}>
                2008
                <span className={`sm:w-[40px] w-[32px] sm:h-[40px] h-[32px]  bg-main rounded-full transition-all duration-500 ${active==0?'scale-100':"scale-0"}`}></span>
            </p>
            <p onClick={e=>handleYearChange(1)} className={`${active==1?'sm:text-4xl text-3xl text-main':'sm:text-2xl text-xl'} transition-all duration-500 flex flex-col items-center gap-4 font-bold text-gray-500 cursor-pointer`}>
                2009
                <span className={`sm:w-[40px] w-[28px] sm:h-[40px] h-[28px] bg-main rounded-full transition-all duration-500 ${active==1?'scale-100':"scale-0"}`}></span>
            </p>
            <p onClick={e=>handleYearChange(2)} className={`${active==2?'sm:text-4xl text-3xl text-main':'sm:text-2xl text-xl'} transition-all duration-500 flex flex-col items-center gap-4 font-bold text-gray-500 cursor-pointer`}>
                2011
                <span className={`sm:w-[40px] w-[28px] sm:h-[40px] h-[28px] bg-main rounded-full transition-all duration-500 ${active==2?'scale-100':"scale-0"}`}></span>
            </p>
            <p onClick={e=>handleYearChange(3)} className={`${active==3?'sm:text-4xl text-3xl text-main':'sm:text-2xl text-xl'} transition-all duration-500 flex flex-col items-center gap-4 font-bold text-gray-500 cursor-pointer`}>
                2013
                <span className={`sm:w-[40px] w-[28px] sm:h-[40px] h-[28px] bg-main rounded-full transition-all duration-500 ${active==3?'scale-100':"scale-0"}`}></span>
            </p>
        </div>
        <Container>
        <div>
            <Swiper
                ref={swiperRef}
                slidesPerView={1}
                modules={[Autoplay]}
                autoplay={{
                    delay:3000,
                    disableOnInteraction:false
                }}
                speed={1}
                className='w-full h-700px'
                onSlideChange={handleSlideChange}
            >
                <SwiperSlide className='history__slide'>
                    <HistoryCard title={'2008'} desc={'В 2008 году образовалась строительная компания Akfa Construction под брендовым названием Discover Invest.'} />
                </SwiperSlide>
                <SwiperSlide className='history__slide'>
                    <HistoryCard title={'2009'} desc={'В 2009 году началась работа над первым строительным объектом. Это был завод по производству алюминиевых профилей.'} />
                </SwiperSlide>
                <SwiperSlide className='history__slide'>
                    <HistoryCard title={'2011'} desc={'В 2011 появилась необходимость в приобретении собственного машинного парка, то есть можно представить какие были объемы у компании, что нам потребовался собственный машинный парк.'} />
                </SwiperSlide>
                <SwiperSlide className='history__slide'>
                    <HistoryCard title={'2013'} desc={'В 2013 году был образован отдел дизайна и архитектуры.'} />
                </SwiperSlide>
            </Swiper>
        </div>
        </Container>
    </div>
  )
}

export default History