import React from 'react';

const Contact = () => {
  return (
    <section id="contact">
      <div className="h-[18.75rem] flex flex-col justify-center items-center gap-[0.625rem]">
        <h2 className="text-[3.75rem] font-sans font-extrabold">Ready to build your idea?</h2>
        <a href="mailto:favourajayi308@gmail.com" className="text-[1.875rem] text-[#E85E00] font-mono hover:border-b-2">favourajayi308@gmail.com</a>
        <div className="w-[12.5rem] h-[1.563rem] flex justify-center items-center gap-[1.25rem] font-mono">
          <a href="" className="text-[0.813rem] text-gray-500 hover:text-black transition-colors">CV</a>
          <a href="https://card-tree.netlify.app" className="text-[0.813rem] text-gray-500 hover:text-black transition-colors">Card</a>
        </div>
      </div>
    </section>
  )
}

export default Contact;