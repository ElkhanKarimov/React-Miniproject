import React from 'react'
import './Navbar.css'
import America from '../../images/az.png'
import Logo from '../../images/logo.webp'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
        <nav>
            <div><Link to="/"><img  className='logo' src={Logo} alt="" /></Link></div>
            <div className='menuLinks'>
                <Link className='links' to="/creators">Üzvlərimiz</Link>
                <Link className='links' to="/blog">Bloq</Link>
                <Link className='links' to="/faq">FAQ</Link>
            </div>
            <div className='buttons'>
                <button className='eng'><img className='flag' src={America} alt="" /> Azərbaycan</button>
                <button className='sign'>Daxil ol</button>
                <button className='join'>Qeydiyyat</button>
            </div>
        </nav>
    </div>
  )
}

export default Navbar