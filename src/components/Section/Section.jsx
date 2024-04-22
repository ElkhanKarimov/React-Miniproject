import React from 'react'
import './Section.css'
import reqem from '../../images/500.svg'

const Section = () => {
    return (
        <div className='backsec'>
            <div className='sec1-texts'>
                <div className='backed'>Backed by <img src={reqem} alt="" /> brand Global</div>
                <div className='yaz'><span className='kitab'>Kitab yaz</span>, sevdiyin işlə məşğul ol,
                    izləyicilərindən dəstək qazan!</div>
                <div className='input-button'><input className='input' placeholder='kofe.al/username' type="text" /><button className='yarat'>Yarat</button></div>
                <div className='yarat1'>
                Yarat 🎉 Paylaş 🚀 Qazan ☕
                </div>
            </div>
        </div>
    )
}

export default Section