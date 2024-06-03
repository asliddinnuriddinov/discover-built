'use client'
import React, { useEffect } from 'react'
import Container from '../Container'
import initializeAOS from "@/aos/aosSetup";

const Mission = () => {

    useEffect(()=>{
        initializeAOS()
      },[])
  return (
    <div className='bg-cover bg-left py-20 sm:py-32 mt-12 sm:mt-24 md:mt-32 overflow-hidden' style={{backgroundImage:"url(/bg-mission.svg)"}}>
        <Container>
            <div>
                <div className='flex flex-col lg:flex-row justify-between relative mb-14 lg:mb-0 lg:h-[700px]'> 
                    <div className='h-full lg:block hidden absolute left-5 xl:left-6 top-0 w-[4px] bg-main'></div>
                    <div data-aos='fade-up' data-aos-duration='390' data-aos-delay='340' className='lg:w-[40%] flex gap-4 items-start justify-between'>
                        <div className='min-h-[34px] sm:min-h-[40px]  xl:min-h-[50px] min-w-[34px] sm:min-w-[40px] xl:min-w-[50px] relative bg-main text-white text-lg sm:text-xl xl:text-3xl font-bold rounded-full flex items-center justify-center'>
                            1
                        </div>
                        <div>
                            <h2 className='font-bold text-3xl md:text-4xl lg:text-3xl xl:text-4xl mb-5 md:mb-9'>
                                Наша миссия
                            </h2>
                            <p className='xl:text-[22px] md:text-lg text-[16px] font-semibold leading-loose'>
                            Мы внедряем в Узбекистане самые передовые технологии в строительстве и создаём современные дизайнерские решения. Опираясь на первоклассных работников, мы строим доступное жильё и промышленные здания на многие годы.
                            </p>
                        </div>
                    </div>


                    <div data-aos='fade-down-left' data-aos-duration='390' data-aos-delay='340' className='xl:w-[55%] lg:w-[50%] xl:h-[550px] md:h-[450px] h-[330px] mt-8 lg:mt-0 border-2 border-main relative group'>
                        <img className='w-full h-full object-cover absolute bottom-[-2%] sm:bottom-[-4%] left-[-2%] sm:left-[-3%] group-hover:bottom-0 group-hover:left-0 transition-all duration-500' src="/mission1.jpg" alt="" />
                    </div>
                </div>


                <div className='flex flex-col lg:flex-row justify-between relative mb-14 lg:mb-0 lg:h-[700px]'> 
                    <div className='h-full lg:block hidden absolute left-5 xl:left-6 top-0 w-[4px] bg-main'></div>
                    <div data-aos='fade-up' data-aos-duration='390' data-aos-delay='340' className='lg:w-[40%] flex gap-4 items-start justify-between'>
                        <div className='min-h-[34px] sm:min-h-[40px]  xl:min-h-[50px] min-w-[34px] sm:min-w-[40px] xl:min-w-[50px] relative bg-main text-white text-lg sm:text-xl xl:text-3xl font-bold rounded-full flex items-center justify-center'>
                            2
                        </div>
                        <div>
                            <h2 className='font-bold text-3xl md:text-4xl lg:text-3xl xl:text-4xl mb-5 md:mb-9'>
                            Наше видение
                            </h2>
                            <p className='xl:text-[22px] md:text-lg text-[16px] font-semibold leading-loose'>
                            Создание лучшей в Средней Азии проектной компании, которая предоставляет возможность: - Обществу – повышать уровень жизни людей, задавая высокие стандарты в работе - Клиентам – получать удовольствие от совместной деятельности, строить долгосрочные и открытые отношения - Сотрудникам – постоянный карьерный рост как личностный, так и профессиональный.
                            </p>
                        </div>
                    </div>


                    <div data-aos='fade-down-left' data-aos-duration='390' data-aos-delay='340' className='xl:w-[55%] lg:w-[50%] xl:h-[550px] md:h-[450px] h-[330px] mt-8 lg:mt-0 border-2 border-main relative group'>
                        <img className='w-full h-full object-cover absolute bottom-[-2%] sm:bottom-[-4%] left-[-2%] sm:left-[-3%] group-hover:bottom-0 group-hover:left-0 transition-all duration-500' src="/mission2.jpg" alt="" />
                    </div>
                </div>



                <div className='flex flex-col lg:flex-row justify-between relative mb-14 lg:mb-0 lg:h-[700px]'> 
                    <div data-aos='fade-up' data-aos-duration='390' data-aos-delay='340' className='lg:w-[40%] flex gap-4 items-start justify-between'>
                        <div className='min-h-[34px] sm:min-h-[40px]  xl:min-h-[50px] min-w-[34px] sm:min-w-[40px] xl:min-w-[50px] relative bg-main text-white text-lg sm:text-xl xl:text-3xl font-bold rounded-full flex items-center justify-center'>
                            3
                        </div>
                        <div>
                            <h2 className='font-bold text-3xl md:text-4xl lg:text-3xl xl:text-4xl mb-5 md:mb-9'>
                            Наши ценности
                            </h2>
                            <p className='xl:text-[22px] md:text-lg text-[16px] font-semibold leading-loose'>
                            2008 году образовалась строительная компания Akfa Construction под брендовым названием Discover Invest. В 2009 году началась работа над первым строительным объектом. Это был завод по производству алюминиевых профилей. В 2011 появилась необходимость в приобретении собственного машинного парка, то есть можно представить какие были объемы у компании, что нам потребовался собственный машинный парк. В 2013 году был образован отдел дизайна и архитектуры.
                            </p>
                        </div>
                    </div>


                    <div data-aos='fade-down-left' data-aos-duration='390' data-aos-delay='340' className='xl:w-[55%] lg:w-[50%] xl:h-[550px] md:h-[450px] h-[330px] mt-8 lg:mt-0 border-2 border-main relative group'>
                        <img className='w-full h-full object-cover absolute bottom-[-2%] sm:bottom-[-4%] left-[-2%] sm:left-[-3%] group-hover:bottom-0 group-hover:left-0 transition-all duration-500' src="/mission3.jpg" alt="" />
                    </div>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Mission