'use client'
import React, { useEffect } from "react";
import Container from "../Container";
import AboutCard from "./AboutCard";
import Title from "./Title";
import initializeAOS from "@/aos/aosSetup";

const About = () => {

  useEffect(()=>{
    initializeAOS()
  },[])
  return (
    <div className="relative pt-20 md:mb-32 mb-14 overflow-hidden">
      <img className="absolute h-[90vh] w-[80wh]" src="/about.svg" alt="" />
      <Container>
        <div data-aos='fade-right' data-aos-duration='500' data-aos-delay='220'>
        <Title  t1={'О компании'} t2={'DISCOVER INVEST'} />
        </div>
        <div className="flex flex-col justify-between md:flex-row mt-12 gap-y-8">
          <p data-aos='fade-up' data-aos-duration='500' data-aos-delay='220' className="md:max-w-[40%] lg:text-lg md:text-[16px] text-lg text-gray-800">
            Мы не просто создаём проекты, мы создаем новые возможности. Строя
            объекты государственного масштаба, мы строим будущее. Мы заботимся
            об окружающей среде: компания берет на себя полную ответственность
            за экологические аспекты, связанные со строительством и
            эксплуатацией зданий и инфраструктуры
          </p>
          <div data-aos='fade-down-left' data-aos-duration='570' data-aos-delay='290' className="grid lg:grid-cols-3 grid-cols-2 lg:grid-rows-[220px,220px,220px] sm:grid-rows-[180px,180px,180px,180px] grid-rows-[150px,150px,150px,150px]">
            <div></div>
            <AboutCard title={'4000+'} desc={'Количество сотрудников'}/>
            <AboutCard title={'150+'} desc={'Объекты'}/>
            <AboutCard title={'16'} desc={'Жилые комплексы'}/>
            <AboutCard title={'14'} desc={'14 лет на рынке'}/>
            <AboutCard title={'250+'} desc={'Спец.техника'}/>
            <div className="bg-main text-white lg:text-3xl text-2xl flex items-center justify-center">
            О компании
            </div>
            <AboutCard title={'9+'} desc={'Больницы'}/>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default About;
