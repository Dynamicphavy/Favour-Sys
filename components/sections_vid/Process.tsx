import React from 'react';

interface Steps {
  topic: string;
  description: string;
}

const step: Steps[] = [
  {
    topic: "Brief",
    description: "You share footage, references, and the goal -- views, sales, or brand awareness.",
  },
  {
    topic: "First Cut",
    description: "Structure, pacing, and hook come first. You review a draft within 48 hours.",
  },
  {
    topic: "Polish",
    description: "Robust server-side architecture using Express.js and Supabase for secure data management.",
  },
  {
    topic: "Delivery",
    description: "Bridging hardware and software via ESP32, Python bots, and custom sensor-based systems.",
  },
]

const Process = () => {
  return (
    <section id="services">
      <div className="flex justify-between border-b border-t border-[rgba(13,25,38,0.1)] font-mono p-[1.5rem] text-[0.75rem]">
        <p className="text-gray-600">04 / PROCESS</p>
      </div>
      <div className="grid grid-cols-4 font-sans">
        {step.map((step, index) => (
          <div key={index} className="group border-r last:border-r-0 border-[rgba(13,25,38,0.1)] p-5 flex flex-col gap-[1rem] hover:bg-[#F5EAE3] transition-colors">
            <h4 className="text-[0.938rem] font-bold">{step.topic}</h4>
            <p className="text-[0.75rem] text-gray-500">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Process;