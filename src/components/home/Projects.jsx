import React from 'react'
import Container from '../Container'
import Title from './Title'
import ProjectsCard from './ProjectsCard'
import Link from 'next/link'

const Projects = () => {
  return (
    <div className='pb-20 overflow-hidden'>
        <Container>
            <div>
                <div data-aos='fade-right' data-aos-duration='500' data-aos-delay='220' className='mb-14'>
                    <Title t1={'Наши'} t2={'проекты'}/>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-[370px,370px,370px] gap-5 md:gap-6 lg:gap-12 mb-12">
                    <ProjectsCard ind={1} img={'/magic.webp'} title={'Magic City'} desc={"Это масштабный социально-значимый проект. Культурно-развлекательный кластер в Ташкенте является одной из новых достопримечательностей."} />
                    <ProjectsCard ind={2} img={'/gardens.webp'} title={'Gardens Residence'} desc={"Многофункциональный жилой комплекс, созданный для обеспечения комфорта жителям Узбекистана."} />
                    <ProjectsCard ind={3} img={'/fonon.webp'} title={'Fonon'} desc={"Fonon – завод по производству ювелирных изделий в Узбекистане построенный на основе итальянских в 2020 году. Fonon является единственным крупным предприятием в Средней Азии, производящим украшения из драгоценных металлов в европейском и восточном стиле."} />
                    <ProjectsCard ind={4} img={'/invento.webp'} title={'Invento'} desc={"Грандиозный жилой квартал в сердце столицы."} />
                    <ProjectsCard ind={5} img={'/school.webp'} title={'Presedential School'} desc={"Международный детский сад и школа расположенный в международном деловом центре Tashkent City."} />
                    <ProjectsCard ind={6} img={'/boulevard.webp'} title={'Boulevard'} desc={"Это образовательное учреждение, которое даёт знание на международном уровне."} />
                </div>
                <div className='flex justify-center'>
                <Link className="relative border-[1px] border-main block h-[45px] sm:h-[55px] w-[120px] sm:w-[150px] lg:h-[60px] lg:w-[205px] group" href="/projects">
                    <span className='w-full h-full sm:text-[16px] text-sm absolute flex items-center justify-center group-hover:bg-main group-hover:text-white group-hover:left-0 group-hover:bottom-0 left-[-10%] bottom-[-20%] transition-all duration-500 border-[1px] border-main'>
                    Все проекты
                    </span>
                </Link>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Projects