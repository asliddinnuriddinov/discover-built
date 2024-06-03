import React from 'react'
import Container from '../Container'
import ProjectsCard from '../home/ProjectsCard'

const Projects = () => {
  return (
    <div className='overflow-hidden md:mt-24 sm:mt-16 mt-10'>
        <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-[370px,370px,370px] gap-5 md:gap-6 lg:gap-12 mb-12">
          <ProjectsCard ind={1} img={'/magic.webp'} title={'Magic City'} desc={"Это масштабный социально-значимый проект. Культурно-развлекательный кластер в Ташкенте является одной из новых достопримечательностей."} />
          <ProjectsCard ind={2} img={'/gardens.webp'} title={'Gardens Residence'} desc={"Многофункциональный жилой комплекс, созданный для обеспечения комфорта жителям Узбекистана."} />
          <ProjectsCard ind={3} img={'/fonon.webp'} title={'Fonon'} desc={"Fonon – завод по производству ювелирных изделий в Узбекистане построенный на основе итальянских в 2020 году. Fonon является единственным крупным предприятием в Средней Азии, производящим украшения из драгоценных металлов в европейском и восточном стиле."} />
          <ProjectsCard ind={4} img={'/invento.webp'} title={'Invento'} desc={"Грандиозный жилой квартал в сердце столицы."} />
          <ProjectsCard ind={5} img={'/school.webp'} title={'Presedential School'} desc={"Международный детский сад и школа расположенный в международном деловом центре Tashkent City."} />
          <ProjectsCard ind={6} img={'/boulevard.webp'} title={'Boulevard'} desc={"Это образовательное учреждение, которое даёт знание на международном уровне."} />
        </div>
        </Container>
    </div>
  )
}

export default Projects