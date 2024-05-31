import React from 'react'

const TeamCard = ({img,title,desc}) => {
  return (
    <div className='h-full w-full'>
        <div>
            <img className='object-contain w-full h-full md:max-h-[588px] max-h-[510px]' src={img} alt="" />
            <img className=' absolute top-3 right-6 object-contain w-full md:max-w-[90px] max-w-[80px]' src="/logo.svg" alt="" />
        </div>
        <h2 className='md:mt-5 mt-3 md:text-2xl text-xl md:h-[65px] h-[52px] font-semibold'>{title}</h2>
        <p className='md:text-xl text-lg text-gray-800'>{desc}</p>
    </div>
  )
}

export default TeamCard