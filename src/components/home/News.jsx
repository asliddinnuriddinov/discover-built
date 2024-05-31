'use client'
import React from 'react'
import Container from '../Container'
import Title from './Title'
import NewsCard from './NewsCard'
import {Swiper,SwiperSlide} from 'swiper/react'

import 'swiper/css';
import { Autoplay, FreeMode } from 'swiper/modules';

const News = () => {
  return (
    <div style={{backgroundImage:"url(/bg-news.svg)"}} className='bg-cover bg-center overflow-hidden pb-12 mb-36'>
        <Container>
            <div data-aos='fade-right' data-aos-duration='500' data-aos-delay='220'>
                <Title t1={'Новости'} t2={'компании'}/>
            </div>
            <div className='mb-32 mt-10'>
                <Swiper
                            slidesPerView={1}
                            spaceBetween={50}
                            breakpoints={{
                              320:{
                                slidesPerView:1,
                                spaceBetween:10
                              },
                              505: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                              },
                              768: {
                                slidesPerView: 2,
                                spaceBetween: 30,
                              },
                              1024: {
                                slidesPerView: 3,
                                spaceBetween: 50,
                              },
                            }}
                            modules={[Autoplay,FreeMode]}
                            loop={true}
                            grabCursor={true}
                            freeMode={true}
                            autoplay={{
                                delay:5000,
                                disableOnInteraction:false
                            }}
                            className='lg:h-[500px] md:h-[450px] sm:h-[380px] h-[350px] w-full '
                >
                    <SwiperSlide className='news__slide'>
                        <NewsCard date={'2022-12-31'} img={'/news1.webp'} title={'Компания Discover Invest поздравляет всех с наступающим 2023 годом!'} />
                    </SwiperSlide>
                    <SwiperSlide className='news__slide'>
                        <NewsCard date={'2022-10-02'} img={'/news2.webp'} title={'ДЕНЬ ПРИНЯТИЯ КОНСТИТУЦИИ РЕСПУБЛИКИ УЗБЕКИСТАН'} />
                    </SwiperSlide>
                    <SwiperSlide className='news__slide'>
                        <NewsCard date={'2022-12-19'} img={'/news3.webp'} title={'Мы продолжаем знакомить Вас с многофункциональными объектами Discover Invest.'} />
                    </SwiperSlide>
                    <SwiperSlide className='news__slide'>
                        <NewsCard date={'2023-01-27'} img={'/news4.webp'} title={'Кто такой менеджер строительного проекта?'} />
                    </SwiperSlide>
                </Swiper>
            </div>
            <div  className='flex justify-center'>
                <a className="relative border-[1px] border-main block h-[45px] sm:h-[55px] w-[120px] sm:w-[150px] lg:h-[60px] lg:w-[205px] group" href="/news">
                    <span className='w-full h-full sm:text-[16px] text-sm absolute flex items-center justify-center group-hover:bg-main group-hover:text-white group-hover:left-0 group-hover:bottom-0 left-[-10%] bottom-[-20%] transition-all duration-500 border-[1px] border-main'>
                    Все новости
                    </span>
                </a>
                </div>
        </Container>
    </div>
  )
}

export default News