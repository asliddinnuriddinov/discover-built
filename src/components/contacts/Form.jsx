'use client'
import React, { useState } from "react";
import Container from "../Container";
import Title from "../home/Title";
import { FaClock, FaLocationDot, FaPhone } from "react-icons/fa6";
import { useForm } from "react-hook-form";
import axios from "axios";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const Form = () => {
    const scheme = z.object({
        name: z.string().min(3, { message: "Пожалуйста, введите корректное имя" }),
        phone: z.string().refine(
            (value) => /^\+?[0-9]{1,12}$/.test(value.replace(/\s/g, "")),
            "Пожалуйста, введите корректный номер"
        ),
        section: z.string().min(1, { message: "Пожалуйста, выберите oтдел" }),
        message1: z.string().min(3, { message: "Пожалуйста, введите ваше сообщение" })
    });
    
    const [section,setSection]=useState("")

    const{register,handleSubmit, reset, clearErrors, formState:{isSubmitting,isDirty,errors}}=useForm({
        resolver: zodResolver(scheme)
    })

    console.log(isDirty);
    async function onSubmit({name,phone,section,message1}){
        try{
            const token="7230784351:AAHagbYJddycBVVKfvhB9Hs_VPkB5P4XW2M"
            const chat_id='1481089412'
            const url=`https://api.telegram.org/bot${token}/sendMessage`
            const message=`Name: ${name} \n Phone Number: ${phone} \n Section: ${section}\n Message: ${message1}`
            await axios({url:url,method:"POST",data:{'chat_id':chat_id,'text':message}})
            reset()
            setSection('')
        }
        catch(error){
            console.log(error);
        }
    }
  return (
    <div id="contact__form" style={{backgroundImage:"url(/bg-news.svg)"}} className="mt-32 pb-20 bg-cover bg-top bg-no-repeat">
      <Container>
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-20">
          <div className="md:w-[60%] w-full md:mt-0">
            <Title t1={"Как мы можем"} t2={"помочь?"} />
            <p className="md:pt-20 pt-12 text-lg max-w-[640px]">
              Оставьте свои контакты, заполнив текущую форму, и мы свяжемся с
              вами в ближайшее время.
            </p>
            <div className="flex flex-col flex-wrap md:flex-row gap-y-7 items-start justify-between mt-12 md:mt-14">
              <div className="flex gap-8 md:gap-3 items-start">
                <FaLocationDot className="text-main md:w-[20%] text-3xl md:text-2xl mt-1" />
                <div className=" max-md:w-[70%] md">
                  <h5 className="font-bold text-2xl">Адрес</h5>
                  <p className="md:max-w-[160px] text-gray-600 text-[16px] mt-3">
                    Узбекистан, Ташкент, Национальный парк Узбекистана имени
                    Алишера Навои
                  </p>
                </div>
              </div>

              <div className="flex gap-8 md:gap-3 items-start">
                <FaPhone className="text-main text-3xl md:text-2xl mt-1" />
                <div>
                  <h5 className="font-bold text-2xl">Телефон</h5>
                  <p className="md:max-w-[200px] text-gray-600 text-[16px] mt-3">
                    +998 71 288 88 88
                  </p>
                </div>
              </div>

              <div className="flex gap-8 md:gap-3 items-start">
                <FaClock className="text-main text-3xl md:text-2xl mt-1" />
                <div>
                  <h5 className="font-bold text-2xl">Время работы</h5>
                  <p className="md:max-w-[200px] text-gray-600 text-[16px] mt-3">
                    09:00 - 18:00 ПН-СБ
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white px-8 py-12 shadow-form w-full md:w-[40%] -mt-[250px] md:-mt-[440px] z-10">
            <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col gap-8">
                <div className="flex flex-col gap-3">
                    <label htmlFor="name_contact">Имя</label>
                    <input style={errors.name&&{border:"1px solid red",outline:"none"}} {...register('name')} className="w-full bg-bg-input py-3 indent-5 outline-main" id="name_contact" type="text" placeholder="Как вас зовут?"/>
                    <small className='-mt-2 ml-2 text-red-500'>{errors.name&&errors.name.message}</small>
                </div>

                <div className="flex flex-col gap-3">
                    <label htmlFor="phone_contact">Номер телефона</label>
                    <input style={errors.phone&&{border:"1px solid red",outline:"none"}} {...register('phone')} className="w-full bg-bg-input py-3 indent-5 outline-main" id="phone_contact" type="text" placeholder="+998"/>
                    <small className='-mt-2 ml-2 text-red-500'>{errors.phone&&errors.phone.message}</small>
                </div>

                <div className="flex flex-col gap-3">
                    <label htmlFor="section_contact">Отдел</label>
                    <select style={errors.section&&{border:"1px solid red",outline:"none"}} {...register('section')} className="bg-bg-input py-3 indent-5 outline-main" value={section} onChange={e=>{setSection(e.target.value);clearErrors('section')}} id="section_contact">
                        <option disabled hidden defaultValue={true} value="">Отдел</option>
                        <option value="Отдел продаж">Отдел продаж</option>
                        <option value="Отдел кадров">Отдел кадров</option>
                        <option value="Финансовый отдел">Финансовый отдел</option>
                        <option value="Бухгалтерия">Бухгалтерия</option>
                        <option value="Отдел закупок">Отдел закупок</option>
                        <option value="Канцелярия">Канцелярия</option>
                    </select>
                    <small className='-mt-2 ml-2 text-red-500'>{errors.section&&errors.section.message}</small>
                </div>

                <div className="flex flex-col gap-3">
                    <label htmlFor="message_contact">Ваш вопрос</label>
                    <textarea style={errors.message1&&{border:"1px solid red",outline:"none"}} {...register('message1')} className="resize-none bg-bg-input px-5 py-3 outline-main h-[130px]" id="message_contact" placeholder="Оставьте свой вопрос ..."></textarea>
                    <small className='-mt-2 ml-2 text-red-500'>{errors.message1&&errors.message1.message}</small>
                </div>

                <button disabled={!isDirty||isSubmitting} className='bg-main w-full text-white outline-none flex items-center justify-center  h-[52px] font-bold hover:bg-white hover:text-main hover:border-main border-[1px] border-transparent transition-all duration-500'>
                {
                  isSubmitting?
                  <img className='w-full max-w-[40px]' src="/spinner.svg" alt="" />
                  :
                  'Обратная связь'
                }
                </button>
            </form>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Form;
