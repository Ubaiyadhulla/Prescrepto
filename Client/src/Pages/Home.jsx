import React from 'react'
import Hero from '../Componets/Hero'
import SpecalityHome from '../Componets/SpecalityHome'
import DoctorsHome from '../Componets/DoctorsHome'
import BannerHome from '../Componets/BannerHome'
import { useRef } from 'react'

const home = () => {
  const doctorRef = useRef(null);
  return (
    <div>
      <Hero doctorRef={doctorRef}/>
      <SpecalityHome/>
      <DoctorsHome doctorRef={doctorRef}/>
      <BannerHome/>
    </div>
  )
}

export default home
