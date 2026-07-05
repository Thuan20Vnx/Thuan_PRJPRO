import React from 'react';
import FadeIn from '../components/FadeIn';

const SERVICES = [
  {
    num: "01",
    name: "Content Writing",
    desc: "Crafting clear, engaging copy and articles for social media, blogs, and campaigns that connect with the right audience."
  },
  {
    num: "02",
    name: "Social Media",
    desc: "Planning and managing content calendars, growing communities, and building a consistent voice across platforms."
  },
  {
    num: "03",
    name: "Event Communications",
    desc: "Coordinating media outreach, press materials, and on-the-ground coverage to bring events to life and reach a wider audience."
  },
  {
    num: "04",
    name: "Public Relations",
    desc: "Building relationships with media and partners, drafting press releases, and shaping a clear, consistent brand narrative."
  },
  {
    num: "05",
    name: "Photo & Video",
    desc: "Producing and editing photo and video content that supports storytelling across digital and social channels."
  }
];

export default function ServicesSection() {
  return (
    <section className="bg-white rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32">
      <div className="max-w-5xl mx-auto flex flex-col">
        <FadeIn delay={0}>
          <h2 className="text-[#0C0C0C] font-black uppercase text-center text-[clamp(3rem,12vw,160px)] leading-none mb-16 sm:mb-20 md:mb-28">
            Services
          </h2>
        </FadeIn>

        <div className="flex flex-col w-full">
          {SERVICES.map((service, index) => (
            <FadeIn 
              key={service.num} 
              delay={index * 0.1}
              className="flex items-start md:items-center py-8 sm:py-10 md:py-12 border-b border-[rgba(12,12,12,0.15)] last:border-b-0 gap-6 sm:gap-10 md:gap-16"
            >
              <div className="text-[#0C0C0C] font-black text-[clamp(3rem,10vw,140px)] leading-none shrink-0 w-20 sm:w-32 md:w-48">
                {service.num}
              </div>
              <div className="flex flex-col gap-3 sm:gap-4 flex-1 mt-2 md:mt-0">
                <h3 className="text-[#0C0C0C] font-medium uppercase text-[clamp(1rem,2.2vw,2.1rem)] leading-tight">
                  {service.name}
                </h3>
                <p className="text-[#0C0C0C] opacity-60 font-light leading-relaxed max-w-2xl text-[clamp(0.85rem,1.6vw,1.25rem)]">
                  {service.desc}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
