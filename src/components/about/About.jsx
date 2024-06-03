'use client'
import React, { useEffect } from "react";
import Container from "../Container";
import Title from "../home/Title";
import Link from "next/link";
import initializeAOS from "@/aos/aosSetup";

const About = () => {

  useEffect(()=>{
    initializeAOS()
  },[])
  return (
    <div className="mt-24 overflow-hidden">
      <Container>
        <div className="flex flex-col lg:flex-row justify-between relative sm:overflow-y-hidden pb-10">
          <div className="lg:w-[50%] flex flex-col overflow-hidden">
            <div data-aos='fade-right' data-aos-duration='300' data-aos-delay='220'>
              <Title t1={"О нашей"} t2={"компании"} />
            </div>
            <img className="w-full xl:max-w-[430px] lg:max-w-[380px] absolute lg:static  lg:h-auto mt-14" src="/about.svg" alt="" />
          </div>
          <div className="lg:w-[50%] flex flex-col gap-10 mt-14 lg:mt-0 overflow-hidden">
            <div data-aos='fade-down-left' data-aos-duration='300' data-aos-delay='320' className="border-2 border-main relative h-[280px] sm:h-[400px] group">
              <img className="w-full lg:max-w-[800px] object-cover absolute bottom-[-4%] left-[-2%] group-hover:bottom-0 group-hover:left-0 transition-all duration-500 h-full" src="/about-2.jpg" alt="" />
            </div>
            <p data-aos='fade-up' data-aos-duration='300' data-aos-delay='220' className="sm:text-xl text-[16px] text-gray-500 max-w-[1000px]">
              Мы не просто создаём проекты, мы создаем новые возможности. Строя
              объекты государственного масштаба, мы строим будущее. Мы заботимся
              об окружающей среде: компания берет на себя полную ответственность
              за экологические аспекты, связанные со строительством и
              эксплуатацией зданий и инфраструктуры.
            </p>
            <Link data-aos='fade-up' data-aos-duration='300' data-aos-delay='220' className="relative ml-3 sm:ml-6 border-[1px] border-main block h-[45px] sm:h-[55px] w-[120px] sm:w-[150px] lg:h-[60px] lg:w-[205px] group" href="/projects">
                <span className='w-full h-full sm:text-[16px] text-sm text-white absolute flex items-center justify-center group-hover:left-0 group-hover:bottom-0 left-[-10%] bottom-[-20%] transition-all duration-500 bg-main border-[1px] border-main'>
                    Проекты
                </span>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default About;
