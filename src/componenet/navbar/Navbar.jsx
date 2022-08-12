import React from 'react'
import {Link} from "react-router-dom"
import {TiThMenu} from "react-icons/ti"
import {FaTimes} from "react-icons/fa"
import { useState } from 'react'
import {Button} from '../Button'
import "./navbar.css"
import { useEffect } from 'react'
function Navbar() {
    const [click, setClick] = useState(false)
    const [button, setButton] = useState(true)

    const showBtn = ()=>{
        if(window.innerWidth < 900){
            setButton(false)
        }
        else{
            setButton(true)
        }
    }

    window.addEventListener('resize', showBtn)
    const handleClick = ()=> {
        setClick(!click)
    } 
    const closeMobileMenu =()=> setClick(false)
        useEffect(()=>{
            showBtn()
        },[])
    return (
    <div>
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                    AZAD
                </Link>

                <div className="menu-icon" onClick={handleClick}>
                  {click ? <FaTimes color='white' size={35} /> : <TiThMenu color='white' size={35} /> }  
                </div>
                <ul className={click ? 'nav-menu  active' : "nav-menu"} >
                    <li className='nav-item'><Link to='/' className='nav-links' onClick={closeMobileMenu}  >Home</Link> </li>
                    <li className='nav-item'><Link to='/services' className='nav-links' onClick={closeMobileMenu} >Services</Link> </li>
                    <li className='nav-item'><Link to='/product' className='nav-links' onClick={closeMobileMenu} >Products</Link> </li>
                    <li className='nav-item'><Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu} >Sign Up</Link> </li>
                </ul>
                {button && <Button buttonStyle={'btn--outline'} >Sign up</Button>}
            </div>
        </nav>
    </div>
  )
}

export default Navbar