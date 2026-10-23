import React from 'react';
import Image from 'next/image';

interface Projects {
  title: string;
  tag: string;
  description: string
  stack: string;
  image: string;
  view: string;
  code: string;
  layout: "image-left" | "image-right";
}

const projects: Projects[] = [
  {
    title: "Payhip Clone",
    tag: "PYTHON",
    description: "A digital product marketplace inspired by Payhip, built to help creators showcase and sell digital products through an online storefront. Features include product listings, shopping cart functionality, and a responsive user interface",
    stack: "NextJS · Go",
    image: "/images/payhip.png",
    view: "",
    code: "",
    layout: "image-left",
  },
  {
    title: "Wearable Health Sys",
    tag: "IOT / WEB",
    description: "A wearable health monitoring system powered by ESP32 and integrated with Firebase to collect and transmit vital signs to a web dashboard for remote monitoring. Design to support preventive healthcare through health data visualization and alerts for abnormal readings.",
    stack: "ESP32 · Firebase · Javascript · IoT Sensors",
    image: "/images/health.png",
    view: "https://lucky-rugelach-faf235.netlify.app",
    code: "https://github.com/Dynamicphavy/Health-Monitoring",
    layout: "image-right",
  },
  {
    title: "Health Information Management System",
    tag: "WEB",
    description: "A web-based health information management system designed to streamline patient record management, organize medical information, and improve access to healthcare data through a centralized platform.",
    stack: "NextJS · Tailwindcss · Supabase",
    image: "/images/management.png",
    imageBg: "bg-green-600",
    view: "",
    code: "",
    layout: "image-left",
  },
]

const Project = () => {
  return (
    <section id="projects">
      <div className="flex justify-between border-b border-[rgba(13,25,38,0.1)] font-mono p-[1.5rem] text-[0.75rem]">
        <p className="text-gray-600">03 / CASE STUDIES</p>
        <p className="text-[#E85E00]">3 ACTIVE MODULES</p>
      </div>
      {projects.map((project) => {
        const imageBlock = (
          <div
            className={`p-[2rem] flex justify-center items-center ${
              project.layout === "image-left"
                ? "border-r border-[rgba(13,25,38,0.1)]"
                : "border-l border-[rgba(13,25,38,0.1)]"
              }`}
          >
            <div className={`w-[31.25rem] h-[18.75rem]`}>
              <Image src={project.image} width={600} height={400} className="w-full h-full object-cover" alt={project.title} />
            </div>
          </div>
        );
        
        const contentBlock = (
          <div className="p-[2rem]">
            <div className="flex justify-between items-start w-[31.25rem] mb-[1rem]">
              <h3 className="font-sans font-bold text-[1.875rem]">{project.title}</h3>
              <span className="bg-[#0D1926] text-white font-mono text-[0.625rem] tracking-widest px-[0.75rem] py-[0.375rem]">{project.tag}</span>
            </div>
            <div className="mb-[1rem]">
              <p className="font-mono text-[#E85E00] text-[0.75rem] tracking-widest mb-[0.25rem]">DESCRIPTION</p>
              <p className="text-[#677481] leading-relaxed">{project.description}</p>
            </div>
            <p className="font-mono text-[0.75rem] text-gray-500 mb-[2rem]">{project.stack}</p>
            <div className="flex gap-[1.5rem]">
              <a href="" className="font-mono text-[0.75rem] tracking-widest hover:text-[#E85E00] border-b-2 border-[#E85E00] pb-[0.25rem] w-fit transition-colors">VIEW PROJECT</a>
              <a href="" className="font-mono text-[0.75rem] tracking-widest text-[#0D1926] border-b-2 border-gray-300 hover:border-[#0D1926] transition-colors">SOURCE CODE</a>
            </div>
          </div>
        );

        return (
          <div
            key={project.title}
            className={`grid border-b border-[rgba(13,25,38,0.1)] hover:bg-white transition-colors ${
              project.layout === "image-left"
                ? "grid-cols-[37.5rem_1fr]"
                : "grid-cols-[1fr_37.5rem]"
            }`}
          >
            {project.layout === "image-left" ? (
              <>
                {imageBlock}
                {contentBlock}
              </>
            ) : (
              <>
                {contentBlock}
                {imageBlock}
              </>
            )}
          </div>
        );
      })}
    </section>
  )
}

export default Project;