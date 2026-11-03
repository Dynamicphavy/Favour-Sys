import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="border-b border-[rgba(13,25,38,0.1)]">

      {/*Main navigation bar*/}
      <div className="p-4 flex justify-between items-center px-[25rem]">
        <h1 className="font-bold font-mono text-black">FAVOUR.SYS</h1>

        {/*Navigation links - hidden on small screens*/}
        <div className="flex items-center justify-center gap-[1.5rem] text-[0.813rem] font-mono">
          {["ABOUT", "PROJECTS", "SERVICES", "CONTACT"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="hover:text-[#E85E00] transition-colors"
            >{item}</a>
          ))}
          <Link href="/vid" className="w-[7.5rem] h-[1.875rem] flex justify-center items-center border border-[#E85E00] text-[#E85E00] hover:bg-[#E85E00] hover:text-white transition-colors">VIDEO EDITING</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;