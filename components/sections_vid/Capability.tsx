import React from 'react';

interface Capable {
  items: string[];
}

const cap: Capable[] = [
  {
    items: ["Short-form Videos", "Social media content", "Captions / subtitles"],
  },
  {
    items: ["Instagram / Facebook Reels", "Promotional videos", "Color correction"],
  },
];

const Capability = () => {
  return (
    <section id="about" className="mt-[8rem]">
      
      {/* Row Section 2 */}
      <div className="grid grid-cols-[12.5rem_1fr] border-b border-[rgba(13,25,38,0.1)]">
        <div className="border-r border-[rgba(13,25,38,0.1)] p-[2rem]">
          <span className="font-mono text-[0.75rem] tracking-widest text-gray-600">01 / CAPABILITIES</span>
        </div>
        <div className="p-[2rem] grid grid-cols-3 gap-[2rem]">
          {cap.map((group, index) => (
            <div key={index}>
              <ul className="list-disc space-y-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="font-sans text-[0.875rem] text-gray-600"
                  >{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Capability;