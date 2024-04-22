import React from 'react'
import './Abunelik.css'
import abune from '../../images/abune.webp'

const Abunelik = () => {
    return (
        <div className='abune'>
            <div><img className='orxan' src={abune} alt="" /></div>
            <div className='destek-text'>
                <div className='destek'>ABUNƏLİK</div>
                <div className='bexsis'>Abunəlik təklif edin</div>
                <div className='kofe'>Aylıq abunəlik kanalı 
                    yaradaraq, izləyicilərinizin
                     eksklüziv üzvlərə çevrilməsinə
                      imkan yaradın ki, sizə hər
                       ay müxtəlif qiymət dərəcələrində
                        dəstək ola bilsinlər.
                    Rollar, eksklüziv kontent
                     və ya fiziki əşyalar kimi
                      unikal hədiyyələrlə üzvləri
                       mükafatlandırın.</div>
            </div>
        </div>
    )
}

export default Abunelik