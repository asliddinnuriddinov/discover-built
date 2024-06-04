import React from 'react'
import Container from '../Container'
import NewsCard from '../home/NewsCard'

const News = () => {
  return (
    <div className='overflow-hidden md:mt-24 sm:mt-16 mt-10'>
        <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-rows-[510px,510px] md:grid-rows-[440px,440px] grid-rows-[370px,370px,370px,370px] sm:grid-rows-[440px,440px,440px,440px] gap-5 md:gap-6 lg:gap-4 mb-12">
        <NewsCard id={'1'} date={'2022-12-31'} img={'/news1.webp'} title={'Компания Discover Invest поздравляет всех с наступающим 2023 годом!'} />
        <NewsCard id={'2'} date={'2022-10-02'} img={'/news2.webp'} title={'ДЕНЬ ПРИНЯТИЯ КОНСТИТУЦИИ РЕСПУБЛИКИ УЗБЕКИСТАН'} />
        <NewsCard id={'3'} date={'2022-12-19'} img={'/news3.webp'} title={'Мы продолжаем знакомить Вас с многофункциональными объектами Discover Invest.'} />
        <NewsCard id={'4'} date={'2023-01-27'} img={'/news4.webp'} title={'Кто такой менеджер строительного проекта?'} />
        </div>
        </Container>
    </div>
  )
}

export default News