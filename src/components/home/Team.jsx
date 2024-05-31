'use client'
import React, { useEffect } from 'react'
import Container from '../Container'
import Title from './Title'
import {Swiper,SwiperSlide} from 'swiper/react'

import 'swiper/css';
import { Autoplay, FreeMode } from 'swiper/modules';
import TeamCard from './TeamCard';
import initializeAOS from '@/aos/aosSetup'

const Team = () => {


    useEffect(()=>{
        initializeAOS()
    },[])
  return (
    <div className='mt-24'>
        <Container>
            <div data-aos='fade-right' data-aos-duration='500' data-aos-delay='220' className='mb-16'>
                <Title t1={'Наша'} t2={'команда'}/>
            </div>
            <div>
            <Swiper
            slidesPerView={1}
            spaceBetween={50}
            breakpoints={{
              320:{
                slidesPerView:1,
                spaceBetween:25
              },
              400: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 50,
              },
            }}
            modules={[Autoplay,FreeMode]}
            loop={true}
            grabCursor={true}
            freeMode={true}
            autoplay={{
                delay:3000,
                disableOnInteraction:false
            }}
            className="w-full md:h-[750px] sm:h-[640px] h-[620px]"
            >
                <SwiperSlide>
                    <TeamCard img={'/member1.webp'} title={'Норбеков Шавкат Бурибой угли'} desc={'Проект менеджер'} />
                </SwiperSlide>
                <SwiperSlide>
                    <TeamCard img={'/member2.webp'} title={'Артикбаев Сахобиддин Донийор угли'} desc={'Проект менеджер'} />
                </SwiperSlide>
                <SwiperSlide>
                    <TeamCard img={'/member3.webp'} title={'Кузиев Джахонгир Баходирович'} desc={'Начальник строительного участка'} />
                </SwiperSlide>
                <SwiperSlide>
                    <TeamCard img={'/member4.webp'} title={'Болтаев Обиджон Учкунович'} desc={'Проект менеджер'} />
                </SwiperSlide>
                <SwiperSlide>
                    <TeamCard img={'/member5.webp'} title={'Хусанхонов Акромхон Турахон угли'} desc={'Проект менеджер'} />
                </SwiperSlide>

            </Swiper>
            </div>
        </Container>
    </div>
  )
}

export default Team