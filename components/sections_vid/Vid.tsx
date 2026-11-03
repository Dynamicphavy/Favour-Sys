import React from 'react';
import Int from './Int';
import Capability from './Capability';
import Featured from './Featured';
import Process from './Process';
import Book from './Book';

const Vid = () => {
  return (
    <div className="border-x border-[rgba(13,25,38,0.1)] max-w-6xl mx-auto">

      {/* Introduction */}
      <Int />

      {/* Capability */}
      <Capability />

      {/* Videos */}
      <Featured />

      {/* Process */}
      <Process />

      {/* Contact */}
      <Book />
    </div>
  )
}

export default Vid;