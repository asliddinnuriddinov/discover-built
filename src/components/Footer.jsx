'use client'
import React from 'react'
import Title from './home/Title'
import { FaLocationDot,FaPhone,FaClock  } from "react-icons/fa6";
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { toast } from 'react-toastify';
import { z } from 'zod';
import {zodResolver} from '@hookform/resolvers/zod'

const Footer = () => {
  const scheme=z.object({
    name:z.string().min(3,{message:"Пожалуйста, введите корректное имя."}),
    phone:z.string().refine((value)=>/^\+?[0-9]{12}$/.test(value??""),"Пожалуйста, введите корректный номер."),
})
  const {handleSubmit,register, reset, formState:{isDirty,isSubmitting,errors}}=useForm({
    resolver: zodResolver(scheme)
  })

  const onSubmit =async({phone,name})=>{
    try{
      const token="7230784351:AAHagbYJddycBVVKfvhB9Hs_VPkB5P4XW2M"
      const chat_id='1481089412'
      const url=`https://api.telegram.org/bot${token}/sendMessage`
      const message=`Name: ${name} \n Phone Number: ${phone}`
      await axios({url:url,method:"POST",data:{'chat_id':chat_id,'text':message}})
      reset()
      toast.success("Sent")
    }catch{
      toast.error("Couldn't send")
    }
  }
  return (
    <footer className='flex flex-col xl:flex-row items-center'>
      <div style={{backgroundImage:"url(/bg-footer.png)"}} className='bg-cover bg-center w-full xl:w-[50%] px-5 md:px-12 py-5'>
          <Title t1={'Контакты'}/>
          <div className='flex flex-col md:flex-row gap-y-7 items-start justify-between mt-7 md:mt-14 mb-24'>
            <div className='flex gap-8 md:gap-3 items-start'>
              <FaLocationDot className='text-main w-[7%] md:w-[20%] text-3xl md:text-2xl mt-1'/>
              <div className='w-[80%] max-md:w-[70%] md'>
                <h5 className='font-bold text-2xl'>
                Адрес
                </h5>
                <p className='md:max-w-[160px] text-gray-600 text-[16px] mt-3'>
                Узбекистан, Ташкент, Национальный парк Узбекистана имени Алишера Навои
                </p>
              </div>
            </div>

            <div className='flex gap-8 md:gap-3 items-start'>
              <FaPhone className='text-main text-3xl md:text-2xl mt-1'/>
              <div>
                <h5 className='font-bold text-2xl'>
                Телефон
                </h5>
                <p className='md:max-w-[200px] text-gray-600 text-[16px] mt-3'>
                +998 71 288 88 88
                </p>
              </div>
            </div>

            <div className='flex gap-8 md:gap-3 items-start'>
              <FaClock className='text-main text-3xl md:text-2xl mt-1'/>
              <div>
                <h5 className='font-bold text-2xl'>
                Время работы
                </h5>
                <p className='md:max-w-[200px] text-gray-600 text-[16px] mt-3'>
                09:00 - 18:00 ПН-СБ
                </p>
              </div>
            </div>
          </div>

          <div className='bg-white p-8 shadow-form'>
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col md:flex-row md:items-end justify-between gap-4 h-full'>
              <div className='flex flex-col gap-2'>
                <label className='text-[12px]' htmlFor="phone">Номер телефона</label>
                <input style={errors.phone&&{border:"1px solid red"}} {...register('phone')} className='bg-bg-input outline-none border-[1px] p-4 w-full text-sm' type="text" placeholder='+998 (99) 999-99-99'/>
                {/* <small className='-mt-2 text-red-500 text-[12px]'>{errors.phone&&errors.phone.message}</small> */}
              </div>

              <div className='flex flex-col gap-2'>
                <label className='text-[12px]' htmlFor="name">Имя</label>
                <input style={errors.name&&{border:"1px solid red"}} {...register('name')} className='bg-bg-input outline-none border-[1px] p-4 w-full text-sm' type="text" placeholder='Как вас зовут?'/>
                {/* <small className='-mt-2 text-red-500 text-[12px]'>{errors.name&&errors.name.message}</small> */}
              </div>
              <button disabled={!isDirty||isSubmitting} className='bg-main text-white flex items-center justify-center md:w-[33%]  h-[52px] font-bold hover:bg-white hover:text-main hover:border-main border-[1px] border-transparent transition-all duration-500'>
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

      <div className='xl:w-[50%] w-full h-full'>
      <iframe className='w-full xl:h-[500px] h-[300px]' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d446.19894709495213!2d69.21696746664215!3d41.207456193310094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae613e22e1db9b%3A0x4621b72561980ca2!2sMakhallinskiy%20Komitet%20Tashabbus!5e0!3m2!1sen!2s!4v1717079654766!5m2!1sen!2s" width={600} height={700} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </footer>
  )
}

export default Footer