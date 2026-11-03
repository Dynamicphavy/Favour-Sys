import React from 'react';

interface Service {
  topic: string;
  description: string;
  status?: string;
}

const services: Service[] = [
  {
    topic: "Mobile Apps",
    description: "Custom Flutter applications built for both iOS and Android with seamless cloud integration.",
    status: "AVAILABLE",
  },
  {
    topic: "Web Solutions",
    description: "High-performance React web applications optimized for speed, conversion, and scalability.",
    status: "AVAILABLE",
  },
  {
    topic: "Backend & APIs",
    description: "Robust server-side architecture using Express.js and Supabase for secure data management.",
    status: "AVAILABLE",
  },
  {
    topic: "IoT & Automation",
    description: "Bridging hardware and software via ESP32, Python bots, and custom sensor-based systems.",
    status: "AVAILABLE",
  },
]

const Services = () => {
  return (
    <section id="services">
      <div className="flex justify-between border-b border-[rgba(13,25,38,0.1)] font-mono p-[1.5rem] text-[0.75rem]">
        <p className="text-gray-600">04 / SERVICES</p>
      </div>
      <div className="grid grid-cols-4 font-sans">
        {services.map((service, index) => (
          <div key={index} className="group border-r last:border-r-0 border-[rgba(13,25,38,0.1)] p-5 flex flex-col gap-[1rem] hover:bg-[#F5EAE3] transition-colors">
            <h4 className="text-[0.938rem] font-bold">{service.topic}</h4>
            <p className="text-[0.75rem] text-gray-500">{service.description}</p>

            {service.status && (
              <span className="font-mono text-[0.625rem] tracking-widest text-[#E85E00] mt-auto pt-[1rem] opacity-0 group-hover:opacity-100 transition-opacity">→ {service.status}</span>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Services;