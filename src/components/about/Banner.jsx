import React from 'react'
import Container from '../Container'

const Banner = () => {
  return (
    <div className='relative h-[100vh]'>
        <div className=' absolute top-0 left-0 w-full h-full z-[-1]'>
            <img className='object-cover h-full w-full' src="/bg-about.jpg" alt="" />
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60"></div>
        <Container>
            <div className='h-[100vh] flex flex-col justify-center md:justify-end sm:pb-32 text-white relative'>
                <h1 className='xl:text-8xl lg:text-7xl sm:text-6xl text-4xl font-bold tracking-wider'>О КОМПАНИИ</h1>
                <p className='lg:text-xl sm:text-lg text-sm font-semibold my-14 max-w-[700px]'>
                    Мы не просто создаём проекты, мы создаем новые возможности. Строя объекты государственного масштаба, мы строим будущее.
                </p>
                <a className="relative border-[1px] border-main block h-[45px] sm:h-[55px] w-[150px] sm:w-[190px] lg:h-[60px] lg:w-[205px] group" href="#projects">
                    <span className='w-full font-bold text-white h-full sm:text-[16px] text-[12px] absolute flex items-center justify-center group-hover:left-0 group-hover:bottom-0 left-[-4%] sm:left-[-10%] bottom-[-20%] transition-all duration-500 bg-main border-[1px] border-main'>
                        Скачать презентацию
                    </span>
                </a>
            </div>
        </Container>
    </div>
  )
}

export default Banner