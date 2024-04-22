import React from 'react'
import './Creator.css'
import Veb from '../../images/web-design.jpg'
import Qrafik from '../../images/graphic-design.jpg'
import Inkisaf from '../../images/personal-development.jpg'
import Yazi from '../../images/author.png'
import Ince from '../../images/artist.png'
import Blog from '../../images/arts.jpg'
import Idman from '../../images/Sport.png'
import Musiqi from '../../images/musician.png'
import { Link } from 'react-router-dom'

const Creators = () => {
  return (
    <div className='container-box'>
      <Link className='creatorLink'>
          <div className='box33'>
            <img className='creator-img' src={Veb} alt="" />
          </div>
          <p className='ptext1'>Veb dizayn</p>
      </Link>
      <Link className='creatorLink'>
        <div className='box33'>
          <img className='creator-img' src={Qrafik} alt="" />
        </div>
          <p className='ptext2'>Qrafik dizayn</p>
      </Link>
      <Link className='creatorLink'>
        <div className='box33'>
          <img className='creator-img' src={Inkisaf} alt="" />
        </div>
          <p className='ptext3'>Şəxsi inkişaf</p>
      </Link>
      <Link className='creatorLink'>
        <div className='box33'>
          <img className='creator-img' src={Yazi} alt="" />
        </div>
          <p className='ptext4'>Yazıçılıq</p>
      </Link>
      <Link className='creatorLink'>
        <div className='box33'>
          <img className='creator-img' src={Ince} alt="" />
        </div>
          <p className='ptext5'>İncəsənət</p>
      </Link>
      <Link className='creatorLink'>
        <div className='box33'>
          <img className='creator-img' src={Blog} alt="" />
        </div>
          <p className='ptext6'>Blog</p>
      </Link>
      <Link className='creatorLink'>
        <div className='box33'>
          <img className='creator-img' src={Idman} alt="" />
        </div>
          <p className='ptext7'>İdman</p>
      </Link>
      <Link className='creatorLink'>
        <div className='box33'>
          <img className='creator-img' src={Musiqi} alt="" />
        </div>
          <p className='ptext8'>Musiqi</p>
      </Link>
    </div>
  )
}

export default Creators