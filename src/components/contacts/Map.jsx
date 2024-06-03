import React from 'react'

const Map = () => {
  return (
    <div className='w-full md:h-[500px] sm:h-[430px] h-[400px]'>
        <iframe className='w-full h-full' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d446.19894709495213!2d69.21696746664215!3d41.207456193310094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae613e22e1db9b%3A0x4621b72561980ca2!2sMakhallinskiy%20Komitet%20Tashabbus!5e0!3m2!1sen!2s!4v1717079654766!5m2!1sen!2s" width={600} height={700} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    </div>
  )
}

export default Map