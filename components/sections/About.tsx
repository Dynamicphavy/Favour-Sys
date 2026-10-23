import React from 'react';

interface ToolkitGroup {
  category: string;
  items: string[];
}

const toolkit: ToolkitGroup[] = [
  {
    category: "WEB",
    items: ["React / NextJS", "Javascript (ES6+)", "HTML5 / CSS3", "Tailwind CSS"],
  },
  {
    category: "MOBILE",
    items: ["Flutter", "Dart", "Firebase"],
  },
  {
    category: "BACKEND",
    items: ["Python", "Go", "Supabase / Firebase", "IoT (ESP32 / Arduino)", "ExpressJS", "Git / Github"]
  },
];

const About = () => {
  return (
    <section id="about" className="mt-[8rem]">
      
      {/* Row Section 1 */}
      <div className="grid grid-cols-[12.5rem_1fr] border-b border-[rgba(13,25,38,0.1)]">
        <div className="border-r border-[rgba(13,25,38,0.1)] p-[2rem]">
          <span className="font-mono text-[0.75rem] tracking-widest text-gray-600">01 / IDENTITY</span>
        </div>
        <div className="p-[2rem] flex items-center">
          <p className="text-[0.75rem] md:text-[1.875rem] text-gray-900 leading-snug">I bridge the gap between hardware and software. From Python bots that automate workflows to ESP32-powered health systems, I build tools that solve tangible problems for businesses and users.</p>
        </div>
      </div>
      
      {/* Row Section 2 */}
      <div className="grid grid-cols-[12.5rem_1fr] border-b border-[rgba(13,25,38,0.1)]">
        <div className="border-r border-[rgba(13,25,38,0.1)] p-[2rem]">
          <span className="font-mono text-[0.75rem] tracking-widest text-gray-600">02 / TOOLKIT</span>
        </div>
        <div className="p-[2rem] grid grid-cols-3 gap-[2rem]">
          {toolkit.map((group) => (
            <div key={group.category}>
              <div className="flex items-center gap-[0.5rem] mb-[1rem]">
                <span className="w-[0.375rem] h-[0.375rem] bg-[#E85E00] inline-block" />
                <span className="font-mono text-xs font-bold tracking-widest text-gray-900">{group.category}</span>
              </div>
              <ul className="space-y-2">
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

export default About;