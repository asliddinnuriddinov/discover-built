import React from 'react'

const AdvCard = ({iconop,title,desc}) => {
  return (
    <div className='md:w-[33%] flex flex-col gap-5'>
        <div className='group cursor-pointer flex flex-col justify-start items-start gap-5'>
            {iconop}
            <h3 className='group-hover:text-main font-semibold text-xl lg:text-2xl md:max-w-[70%]'>{title}</h3>
        </div>
        <p className='text-gray-700 lg:text-lg text-sm md:max-w-[480px]'>{desc}</p>
    </div>
  )
}

export default AdvCard