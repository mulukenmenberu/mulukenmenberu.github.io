import { useState } from 'react'
import {VscDebugAll} from 'react-icons/vsc'
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';

const Header = ()=>{
  const [isactive, setActive] = useState('home')
  const changeActiveMenu = (title)=>{
    setActive(title)
  }
    return (
        <div className="header">
          <VscDebugAll className='logo'/>
          <div className='menus'>
            <ul>
                <li className={isactive==='home'? 'menu-icon active' : 'menu-icon'} onClick={()=>changeActiveMenu('home')}>Home </li>
                <li className={isactive==='about'? 'menu-icon active' : 'menu-icon'} onClick={()=>changeActiveMenu('about')}>About Me</li>
                <li className={isactive==='resume'? 'menu-icon active' : 'menu-icon'} onClick={()=>changeActiveMenu('resume')}>Resume</li>
                <li className={isactive==='portfolio'? 'menu-icon active' : 'menu-icon'} onClick={()=>changeActiveMenu('portfolio')}><Link to='#portfolio'>Portfolio</Link></li>
                <li className={isactive==='contact'? 'menu-icon active' : 'menu-icon'} onClick={()=>changeActiveMenu('contact')}>Testimonial</li>
            </ul>
          </div>
        </div>
    )
}

export default Header;