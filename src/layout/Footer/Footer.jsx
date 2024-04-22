import React from 'react'
import './Footer.css'
import Logo from '../../images/logo.webp'
import { FiFacebook } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";


const Footer = () => {
  return (
    <div>
        <div className='ftr1'>
            <div className='boxx1'>
                <div><img className='ftrlogo' src={Logo} alt="" /></div>
                <div className='biz'>Biz hər zaman istedadlı və yaradıcı insanların axtarışındayıq. Özünüzü tanıtmaqdan çəkinməyin!</div>
                <div className='ftricons'>
                    <div className='iconbox'><FiFacebook /></div>
                    <div className='iconbox'><FaInstagram /></div>
                </div>
            </div>
            <div className='boxx1'>
                <div className='mainword'>Xüsusiyyətlər</div>
                <div className='boxx'>
                    <a href="">Destek</a>
                    <a href="">Abunəlik</a>
                    <a href="">Mağaza</a>
                    <a href="">QR kodlar</a>
                    <a href="">Patreon Alternativi</a>
                </div>
            </div>
            <div className='boxx1'>
                <div className='mainword'>İnteqrasiyalar</div>
                <div className='boxx'>
                    <a href="">Facebook</a>
                    <a href="">Instagram</a>
                    <a href="">TikTok</a>
                    <a href="">Telegram</a>
                    <a href="">Wordpress</a>
                </div>
            </div>
            <div className='boxx1'>
                <div className='mainword'>Kofeal</div>
                <div className='boxx'>
                    <a href="">Haqqımızda</a>
                    <a href="">Qaydalar</a>
                    <a href="">Məxfilik</a>
                </div>
            </div>
        </div>
        <div className='ftr2'>Copyright © 2024 BONPARA layihəsi. Bütün hüquqlar qorunur.</div>
    </div>
  )
}

export default Footer