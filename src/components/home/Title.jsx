import React from 'react'

const Title = ({t1,t2}) => {
  return (
    <h2 className="lg:text-6xl md:text-5xl sm:text-4xl text-3xl tracking-tight sm:tracking-wide font-bold pl-14">
    <span className="relative sm:before:w-[55px] before:w-[35px] before:sm:h-[5px] before:h-[3px] before:bg-main before:absolute before:top-[50%] sm:before:right-[103%] before:right-[105%]">
      {t1}
    </span>
    {
        t2&&
        <>
        <br />
        <span className="sm:pl-20 pl-0 mt-3 block">{t2}</span>
        </>

    }
  </h2>
  )
}

export default Title