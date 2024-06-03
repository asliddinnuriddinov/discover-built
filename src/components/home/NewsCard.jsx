import Link from 'next/link'
import React from 'react'

const NewsCard = ({date,img,title}) => {
  return (
    <div className='p-5 relative w-full h-full overflow-hidden group'>
        <img className='absolute top-0 left-0 w-full h-full object-cover group-hover:scale-110 transition-all duration-300' src={img} alt="" />
        <div className="before:bg-[rgba(0,0,0,.5)] before:absolute before:top-0 before:left-0 before:w-full before:h-full"></div>
            <div className='flex items-center gap-3 relative'>
                <span className='block w-[8px] h-[8px] bg-main rounded-full'></span>
                <p className='text-white font-semibold text-xl'>{date}</p>
            </div>
            <div className='w-full left-0 absolute bottom-[-11%] group-hover:bottom-0 transition-all duration-300 p-5 flex flex-col gap-9 group-hover:bg-gradient-to-t from-main via-[#fab3485a] to-transparent'>
                <h4 className='text-white text-lg'>{title}</h4>
                <Link className='decoration-2 underline underline-offset-8 text-white font-semibold' href={'/'}>
                    Подробнее
                </Link>
            </div>
    </div>
  )
}

export default NewsCard