import React from 'react';

interface Feature {
  title: string;
  tag: string;
  description: string
  stack: string;
  video: string;
}

const vids: Feature[] = [
  {
    title: "Citadel AD",
    tag: "REEL",
    description: "The introduction of a new brand",
    stack: "9:16 · 22s · Motion Graphics · Sound design",
    video: "https://www.instagram.com/p/DSSlt1NksUm/embed",
  },
  {
    title: "Anticipate",
    tag: "REEL",
    description: "To get the hype of the customers",
    stack: "9:16 · 14s · Motion Graphics · Sound design",
    video: "https://www.instagram.com/p/DSX0FwZElQA/embed",
  },
  {
    title: "AI Ad",
    tag: "REEL",
    description: "AI edited clips talking about the brand",
    stack: "9:16 · 37s · Captions · Sound design",
    video: "https://www.instagram.com/p/DSdAzVNEmUD/embed",
  },
  {
    title: "Announcement",
    tag: "REEL",
    description: "Talking about the event and when it is going to happen",
    stack: "9:16 ·  50s · Captions · Sound design",
    video: "https://www.instagram.com/reel/DOO6WgMjNzM/embed",
  },
]

const Featured = () => {
  return (
    <section id="featured">
      <div className="flex justify-between border-b border-[rgba(13,25,38,0.1)] font-mono p-[1.5rem] text-[0.75rem]">
        <p className="text-gray-600">02 / FEATURED EDITS</p>
        <p className="text-[#E85E00]">4 REELS ON DECK</p>
      </div>
      <div className="grid grid-cols-4 font-sans">
        {vids.map((vid, index) => (
          <div key={index} className="w-[18.75rem] h-[37.5rem] border-r last:border-r-0 border-[rgba(13,25,38,0.1)] flex flex-col justify-center items-center gap-[0.625rem]">
            <div className="w-[15.625rem] h-[28.125rem] overflow-hidden">
              <iframe
                src={vid.video}
                className="w-full h-full border-0"
                allowFullScreen
                scrolling="no"
                loading="lazy"
                title={vid.title}
              />
            </div>
            <div className="w-[15.625rem] flex justify-between items-center">
            <h3 className="font-sans text-[0.938rem] font-bold">{vid.title}</h3>
            <span className="bg-[#0D1926] text-white font-mono text-[0.625rem] tracking-widest px-[0.75rem] py-[0.375rem]">{vid.tag}</span>
            </div>
            <div className="w-[15.625rem] flex flex-col gap-1">
              <p className="font-sans text-sm">{vid.description}</p>
              <p className="font-mono text-[0.625rem]">{vid.stack}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Featured;