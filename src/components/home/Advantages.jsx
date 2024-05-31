'use client'
import React, { useEffect } from 'react'
import Container from '../Container'
import Title from './Title'
import { FaUsers } from "react-icons/fa";
import { PiChatsFill } from "react-icons/pi";
import { IoShieldCheckmark } from "react-icons/io5";
import AdvCard from './AdvCard';
import initializeAOS from '@/aos/aosSetup';

const Advantages = () => {

    useEffect(()=>{
        initializeAOS()
      },[])
  return (
    <div style={{backgroundImage:"url(/advantages.png)"}} className='md:py-32 py-14 bg-cover bg-cneter'>
        <Container>
            <div data-aos='zoom-in' data-aos-duration='500' data-aos-delay='220'>
                <Title t1={'Наши'} t2={'преимущества'} />
            </div>
            <div data-aos='fade-right' data-aos-duration='590' data-aos-delay='300' className='flex flex-col w-full md:flex-row md:items-center justify-evenly gap-14 md:gap-2 mt-14 md:mt-28'>
                <AdvCard iconop={<FaUsers className='group-hover:text-main text-6xl sm:text-7xl lg:text-8xl'/>} title={'Команда профессионалов'} desc={'Мы тщательно подбираем сотрудников с многолетним опытом работы.'}/>
                <AdvCard iconop={<PiChatsFill className='group-hover:text-main text-6xl sm:text-7xl lg:text-8xl'/>} title={'Положительные отзывы клиентов'} desc={'Которые вы можете посмотреть на нашем сайте и убедиться в качестве нашей работы.'}/>
                <AdvCard iconop={<IoShieldCheckmark className='group-hover:text-main text-6xl sm:text-7xl lg:text-8xl'/>} title={'Гарантия на все работы'} desc={'Мы уверены в том, что мы делаем, поэтому предоставляем гарантию на все виды работ.'}/>
            </div>
        </Container>
    </div>
  )
}

export default Advantages