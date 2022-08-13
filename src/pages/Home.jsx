import React from 'react'
import "../App.css"
import Card from '../componenet/card/Card'
import Footer from '../componenet/footer/Footer'
import HeroSection from '../componenet/Hero/HeroSection'
function Home() {
  return (
    <>
        <HeroSection />
        <Card />
        <Footer />
    </>
  )
}

export default Home