import React from 'react'
import './Magaza.css'
import magaza from '../../images/2-shop.webp'

const Magaza = () => {
    return (
        <div className='maga-sec'>
            <div className='magazatexts'>
                <div className='magazatest'>
                    <div className='destek1'>ONLAYN MAĞAZA</div>
                    <div className='bexsis'>Məhsul və Xidmətlərinizi satın</div>
                    <div className='kofe'>Kofe.al Mağazanızı açaraq,
                        dərhal rəqəmsal və ya fiziki
                        əşyalar əlavə edin. Heç bir
                        abunə və ya aktivləşdirmə
                        haqqı yoxdur. Sadəcə məhsul
                        və ya xidmətlərinizi yerləşdirərək,
                        dərhal satışa başlayın!</div>
                    <div className='ne'>Nə satmaq olar?:</div>
                    <div className='mehsul'>
                        <div className='mehsul1'>
                            <div>Fiziki məhsul</div>
                            <div>Digital məhsul</div>
                            <div>Affiliate məhsul</div>
                        </div>
                        <div className='mehsul1'>
                            <div>Xidmet</div>
                            <div>Tədbirə giriş</div>
                            <div>Çap işləri</div>
                        </div>
                    </div>
                </div>
                <div><img className='orxan' src={magaza} alt="" /></div>
            </div>
        </div>
    )
}

export default Magaza