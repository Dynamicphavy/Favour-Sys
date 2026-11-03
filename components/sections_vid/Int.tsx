import React from 'react';

const Int = () => {
  return (
    <section className="px-[4.75rem] flex flex-col gap-[1.25rem] mt-[9rem]">
      <p className="text-[6.25rem] font-extrabold font-sans text-[#0D1926] leading-none">Edits that hold <br /> attention.</p>
      <p className="text-[1.3rem] font-sans text-[#677481]">Reels, ads, shorts, and cinematic cuts -- edited for the first three seconds and built <br /> to keep people watching until the last frame</p>
      <div className="w-[24rem] h-[5.625rem] flex flex-row justify-center items-center gap-[0.938rem]">
        <a href="#featured" className="w-[18.75rem] h-[3.75rem] flex justify-center items-center font-mono text-[#FFF] bg-[#0D1926] hover:bg-[#E85E00] transition-colors">WATCH FEATURED EDITS</a>
        <a href="#contact" className="w-[12.5rem] h-[3.75rem] flex justify-center items-center font-mono border border-[rgba(13,25,38,0.1)] hover:border-[rgba(13,25,38)] transition-colors">BOOK AN EDIT</a>
      </div>
    </section>
  )
}

export default Int;