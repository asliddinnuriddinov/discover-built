import React from 'react'
import { BsBuildingsFill } from "react-icons/bs";

const HistoryCard = ({title,desc}) => {
  return (
    <div className='flex flex-col md:flex-row items-center justify-center gap-12 sm:gap-20'>
        <div className=''>
            <BsBuildingsFill className='sm:text-[220px] text-[150px] text-main'/>
        </div>
        <div className='max-w-[600px]'>
            <h3 className='sm:text-4xl text-3xl text-center md:text-left font-bold text-black mb-7 sm:mb-16'>{title}</h3>
            <p className='sm:text-xl text-lg text-center md:text-left font-semibold'>
                {desc}
            </p>
        </div>
    </div>
  )
}

export default HistoryCard