"use client"
import initializeAOS from "@/aos/aosSetup";
import React, { useEffect } from "react";

const ProjectsCard = ({title,desc,img,ind}) => {

  useEffect(()=>{
    initializeAOS()
  },[])
  return (
    <div data-aos={ind%2==0?'fade-left':'fade-right'} data-aos-offset='170' data-aos-duration='600' style={{backgroundImage:`url(${img})`}} className="bg-cover bg-bottom relative p-5 overflow-hidden group">
        <div className="before:bg-[rgba(0,0,0,.5)] before:hidden group-hover:before:block before:transition-all before:duration-500 before:absolute before:top-0 before:left-0 before:w-full before:h-full"></div>
        <div className="relative translate-y-[305px] h-[340px] group-hover:translate-y-[2%] transition-transform duration-500 ease-in">
            <h3 className="text-white font-semibold text-2xl sm:text-3xl mb-5 group-hover:text-main transition-colors duration-500">{title}</h3>
            <p className="text-white h-[225px] mt-5 text-[16px] sm:text-lg">
                {desc}
            </p>
        </div>
    </div>
  );
};

export default ProjectsCard;
