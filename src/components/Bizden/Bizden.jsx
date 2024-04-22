import React from 'react'
import './Bizden.css'
import reqem from '../../images/500.svg'
import startup from '../../images/brand-02.webp'
import forbes from '../../images/brand-05.webp'
import tech from '../../images/brand-03.webp'
import ip from '../../images/brand-06.webp'

const Bizden = () => {
  return (
    <div className='bizden-sec'>
        <div className='bizden'>Bizdən danışırlar</div>
        <div className='images'>
            <img className='img1' src={reqem} alt="" />
            <img className='img2' src={startup} alt="" />
            <img className='img2' src={forbes} alt="" />
            <img className='img1' src={tech} alt="" />
            <img className='img1' src={ip} alt="" />
        </div>
    </div>
  )
}

export default Bizden