import React from 'react';

const Intro = () => {
  return (
    <section id="home" className="px-[4.75rem] flex flex-col gap-[1.25rem] mt-[9rem]">
      <p className="text-[6.25rem] font-extrabold font-sans text-[#0D1926] leading-none">Hi, I'm Favour <br /> I build functional <br /> software systems.</p>
      <p className="text-[1.3rem] font-sans text-[#677481]">Computer Engineering graduate specializing in high-performance <br /> Web application, Flutter mobile experiences, and IoT-<br />integrated dashboards.</p>
      <div className="w-[24rem] h-[5.625rem] flex flex-row justify-center items-center gap-[0.938rem]">
        <a href="#projects" className="w-[12.5rem] h-[3.75rem] flex justify-center items-center font-mono text-[#FFF] bg-[#0D1926] hover:bg-[#E85E00] transition-colors">VIEW MY PROJECTS</a>
        <a href="#contact" className="w-[9.375rem] h-[3.75rem] flex justify-center items-center font-mono border border-[rgba(13,25,38,0.1)] hover:border-[rgba(13,25,38)] transition-colors">CONTACT ME</a>
      </div>
    </section>
  )
}

export default Intro;