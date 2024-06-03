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
                    <ProjectsCard ind={1} img={'/magic.webp'} title={'Magic City'} desc={"t('projects.p1')"} />
                    <ProjectsCard ind={2} img={'/gardens.webp'} title={'Gardens Residence'} desc={"t('projects.p2')"} />
                    <ProjectsCard ind={3} img={'/fonon.webp'} title={'Fonon'} desc={"t('projects.p3')"} />
                    <ProjectsCard ind={4} img={'/invento.webp'} title={'Invento'} desc={"t('projects.p4')"} />
                    <ProjectsCard ind={5} img={'/school.webp'} title={'Presedential School'} desc={"t('projects.p5')"} />
                    <ProjectsCard ind={6} img={'/boulevard.webp'} title={'Boulevard'} desc={"t('projects.p6')"} />
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