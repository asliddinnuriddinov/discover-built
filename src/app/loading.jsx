import React from 'react'

const Loading = () => {
  return (
    <div className='flex items-center justify-center bg-main fixed top-0 left-0 w-full h-full z-50'>
        <img className='w-[130px]' src="/spinner-main.svg" alt="" />
    </div>
  )
}

export default Loading