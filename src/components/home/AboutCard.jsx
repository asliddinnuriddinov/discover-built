import React from 'react'

const AboutCard = ({title,desc}) => {
  return (
    <div className='flex relative flex-col items-start justify-center gap-4 p-5 border-[1px] border-gray-700 group cursor-pointer'>
        <img className='absolute top-0 left-0 w-full h-full object-cover hidden group-hover:block' src="/about-card.jpg" alt="" />
        <h3 className='font-bold lg:text-5xl sm:text-4xl text-3xl relative group-hover:text-main'>{title}</h3>
        <p className='lg:text-lg sm:text-[16px] text-sm relative group-hover:text-white'>{desc}</p>
    </div>
  )
}

export default AboutCard