import React from 'react'
import './Hero.css'
import profile_img  from '../../assets/profile_img .svg'

const Hero = () => {
  return (
    <div className='hero'>
      <img src={profile_img } alt="" />
      <h1><span>I'm Anay Jain,</span> Leader of Hack Club Vidisha.</h1>
      <p>Helo im glad you are here</p>
      <div className="hero-action">
        <div className="hero-connect">Connect with me</div>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  )
}

export default Hero 