import React from 'react';
import Intro from './Intro';
import About from './About';
import Project from './Project';
import Services from './Services';
import Contact from './Contact';


const Hero = () => {
  return (
    <div className="border-x border-[rgba(13,25,38,0.1)] max-w-6xl mx-auto">

      {/* Introduction */}
      <Intro />

      {/* About */}
      <About />

      {/* Projects */}
      <Project />

      {/* Services */}
      <Services />

      {/* Contact */}
      <Contact />
    </div>
  )
}

export default Hero;