import About from '@/components/about/About'
import Banner from '@/components/about/Banner'
import History from '@/components/about/History'
import Mission from '@/components/about/Mission'
import Ratings from '@/components/about/Ratings'
import React from 'react'

const page = () => {
  return (
    <>
      <Banner/>
      <About/>
      <Mission/>
      <History/>
      <Ratings/>
    </>
  )
}

export default page