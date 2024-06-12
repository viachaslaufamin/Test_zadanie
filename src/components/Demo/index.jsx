import React, { useState } from 'react'
import img from './img/image.png'
import frame from './img/Frame.png'
import s from './index.module.css'

export default function Demo() {
   const [isOpen, setIsOpen] = useState(false);
  return (
    <section className={s.conteiner}>
      {isOpen && (
        <div className={s.modal}>
          <div className={s.modal_content}>
            <div className={s.close} onClick={() => [setIsOpen(false)]}>X</div>
            <h2>Congratulations! </h2>
            <p>Your order has been successfully placed on the website.</p>
            <p>A manager will contact you shortly to confirm your order.</p>
          </div>
        </div>
      )}
      <div>
         <div className={s.content}>
            <h1>Демо-версия</h1>
            <div>
               <p>За 18 лет деятельности было реализовано более 500 крупных, а так же, не менее 2500 средних и малых проектов. Используя знания и накопленный опыт мы можем предложить</p>
               <div className={s.button} onClick={()=>setIsOpen(true)}>
                  <p>Попробовать бесплатно</p>
                  <img src={frame} alt="frame" />
               </div>
            </div>
         </div>
         <div className={s.image}>
            <img src={img} alt="img" />
         </div>
      </div>
    </section>
  )
}
