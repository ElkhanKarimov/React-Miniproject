import React from 'react'
import './Destek.css'
import orxan from '../../images/1_coffee-n.webp'
import yemek from '../../images/kofe-al-types.webp'


const Destek = () => {
    
  return (
    <div className='destek-sec'>
        <div><img className='orxan' src={orxan} alt="" /></div>
        <div className='destek-text'>
            <div className='destek'>DƏSTƏK AL</div>
            <div className='bexsis'>Bəxşiş qəbul edin</div>
            <div className='kofe'>Kofe.al işlərinizi bəyənən
                 insanlardan dəstək mesajları
                  və bəxşiş almaq üçün unikal,
                əyləncəli və bəsit bir metodu
                təqdim edir! Kofealdan
                bəxşiş qutusu kimi
                istifadə edərək, 
                dəstəkçilərinizin məşğuliyyətinizə
                 töhfə verməsinə imkan verə bilərsiniz.</div>
            <div><img src={yemek} alt="" /></div>
        </div>
    </div>
  )
}

export default Destek