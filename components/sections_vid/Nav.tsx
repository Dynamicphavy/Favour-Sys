import React from 'react';
import Link from 'next/link';

const Nav = () => {
  return (
    <nav className="border-b border-[rgba(13,25,38,0.1)]">

      {/*Main navigation bar*/}
      <div className="p-4 flex justify-between items-center px-[25rem]">
        <h1 className="font-bold font-mono text-black">FAVOUR.SYS</h1>

        {/*Navigation links - hidden on small screens*/}
        <div className="flex items-center justify-center gap-[1.5rem] text-[0.813rem] font-mono">
          <Link href="/" className="hover:text-[#E85E00] transition-colors">SOFTWARE</Link>
          <Link href="/vid" className="hover:text-[#E85E00] transition-colors">VIDEO EDITING</Link> {/*FIXME: NO HOVER EFFECT*/}
        </div>
      </div>
    </nav>
  )
}

export default Nav;