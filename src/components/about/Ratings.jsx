import React from 'react'
import Container from '../Container'
import AboutCard from '../home/AboutCard'

const Ratings = () => {
  return (
    <div className='md:my-32 my-20'>
        <Container>
            <div className='grid gap-5 md:grid-cols-3 sm:grid-cols-2 rid-cols-1 lg:grid-rows-[300px,300px] md:grid-rows-[210px,210px] sm:grid-rows-[210px,210px,210px] grid-rows-[170px,170px,170px,170px,170px,170px]'>
            <AboutCard title={'4000+'} desc={'Количество сотрудников'}/>
            <AboutCard title={'150+'} desc={'Объекты'}/>
            <AboutCard title={'16'} desc={'Жилые комплексы'}/>
            <AboutCard title={'14'} desc={'14 лет на рынке'}/>
            <AboutCard title={'250+'} desc={'Спец.техника'}/>
            <AboutCard title={'9+'} desc={'Больницы'}/>
            </div>
        </Container>
    </div>
  )
}

export default Ratings