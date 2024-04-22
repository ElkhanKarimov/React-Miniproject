import React from 'react'
import './Map.css'
import map from '../../images/map.png'

const Map = () => {
    return (
        <div className='map-sec'>
            <img className='map' src={map} alt="" />
            <div className='maptexts'>
                <div className='ucun'>Yaradıcı Şəxslər üçün unikal dəstək platforma.</div>
                <div className='yarat1'>Yarat 🎉 Paylaş 🚀 Qazan ☕</div>
                <div><button className='qeyd'>Qeydiyyat</button></div>
            </div>
        </div>
    )
}

export default Map