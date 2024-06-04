import Container from '@/components/Container'
import React from 'react'
import data1 from "../../data/data.json"
import News from '@/components/home/News'

const page = ({params}) => {
    const blogData=data1.filter(x=>x.id==params.id)[0]
  return (
    <div className='mt-20'>
        <div className='bg-cover bg-center bg-no-repeat sm:mb-24 mb-12 relative h-[600px] flex items-center' style={{backgroundImage:"url(/bg-blog.jpg)"}}>
            <div className='absolute w-full h-full top-0 left-0 bg-white opacity-80'></div>
            <Container>
                <div className='relative'>
                    <p className='md:text-lg text-[16px] text-gray-700 font-semibold'>Новости/{blogData.title}</p>
                    <h1 className='md:text-5xl sm:text-4xl text-3xl font-semibold mt-8 sm:mt-16'>{blogData.title}</h1>
                </div>
            </Container>
        </div>
        <Container>
            <div className='flex flex-col items-center justify-center gap-8 mb-16 sm:mb-32'>
                <div className=' overflow-hidden'>
            <img className='w-full max-w-[700px] object-cover hover:scale-125 transition-all duration-300' src={blogData.img} alt="" />

                </div>
                <p className='max-w-[700px] text-justify sm:text-xl text-lg font-semibold text-gray-700'>
                {blogData.description}
                </p>
            </div>
        </Container>
        <News/>
    </div>
  )
}

export default page