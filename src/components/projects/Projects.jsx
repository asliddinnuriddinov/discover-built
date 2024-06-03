import React from 'react'
import Container from '../Container'
import ProjectsCard from '../home/ProjectsCard'

const Projects = () => {
  return (
    <div className='overflow-hidden md:mt-24 sm:mt-16 mt-10'>
        <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-[370px,370px,370px] gap-5 md:gap-6 lg:gap-12 mb-12">
                    <ProjectsCard ind={1} img={'/magic.webp'} title={'Magic City'} desc={"t('projects.p1')"} />
                    <ProjectsCard ind={2} img={'/gardens.webp'} title={'Gardens Residence'} desc={"t('projects.p2')"} />
                    <ProjectsCard ind={3} img={'/fonon.webp'} title={'Fonon'} desc={"t('projects.p3')"} />
                    <ProjectsCard ind={4} img={'/invento.webp'} title={'Invento'} desc={"t('projects.p4')"} />
                    <ProjectsCard ind={5} img={'/school.webp'} title={'Presedential School'} desc={"t('projects.p5')"} />
                    <ProjectsCard ind={6} img={'/boulevard.webp'} title={'Boulevard'} desc={"t('projects.p6')"} />
        </div>
        </Container>
    </div>
  )
}

export default Projects