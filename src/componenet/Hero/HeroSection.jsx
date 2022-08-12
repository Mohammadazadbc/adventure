import React from 'react'
import {Button} from "../Button"
import "./heroSection.css"
import "../../App.css"
import {AiFillPlayCircle} from "react-icons/ai"

function HeroSection() {
  return (
    <div className='hero-container'>
        <video src='/videos/video-1.mp4' autoPlay loop muted />
        <h1 >ADVENTURE AWAITS</h1>
        <p>What are you waiting for?</p>
        <div className="hero-btns">
            <Button className="btns" buttonStyle={"btn-outline"} buttonSize="btn--large" >GET STARTED</Button>
            <Button className="btns" buttonStyle={"btn-primary"} buttonSize="btn--large" >WATCH TRAILER <AiFillPlayCircle /> </Button>
        </div>
    </div>
  )
}

export default HeroSection