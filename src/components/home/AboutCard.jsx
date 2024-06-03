import React from 'react'

const AboutCard = ({title,desc}) => {
  return (
    <div className='flex relative  flex-col items-start justify-center gap-4 p-5 border-[1px] border-gray-700 group cursor-pointer'>
        <img className='absolute transition-all duration-500 top-0 left-0 w-full h-full object-cover opacity-0 group-hover:opacity-100' src="/about-card.jpg" alt="" />
        <h3 className='font-bold transition-all duration-500 lg:text-5xl sm:text-4xl text-3xl relative group-hover:text-main'>{title}</h3>
        <p className='lg:text-lg transition-all duration-500 sm:text-[16px] text-sm relative group-hover:text-white'>{desc}</p>
    </div>
  )
}

export default AboutCard