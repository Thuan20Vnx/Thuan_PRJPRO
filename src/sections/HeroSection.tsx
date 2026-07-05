import React from 'react';
import { Megaphone, PenLine, Camera, Users, ArrowDown } from 'lucide-react';
import ContactButton from '../components/ContactButton';
import FadeIn from '../components/FadeIn';

const NAV_ITEMS = [
  { label: 'Home page', href: '#home' },
  { label: 'About me', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

const SKILL_TAGS = [
  { icon: Megaphone, label: 'Public Relations' },
  { icon: PenLine, label: 'Content Writing' },
  { icon: Camera, label: 'Photo & Video' },
  { icon: Users, label: 'Social Media' },
];

export default function HeroSection() {
  const scrollToId = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="home" className="relative min-h-[auto] lg:min-h-screen flex flex-col overflow-x-clip">
      {/* Navbar */}
      <FadeIn delay={0} y={-20} as="nav" className="flex justify-between items-center px-6 md:px-10 pt-6 md:pt-8 w-full z-20">
        {NAV_ITEMS.map((item) => (
          <a
            key={item.label}
            href={item.href}
            onClick={(e) => scrollToId(e, item.href.slice(1))}
            className="text-[#2B3440] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200"
          >
            {item.label}
          </a>
        ))}
      </FadeIn>

      {/* Large portrait (desktop only) */}
      <FadeIn
        delay={0.3}
        x={60}
        y={0}
        duration={1}
        className="hidden lg:flex absolute right-0 xl:right-8 top-28 bottom-32 z-10 w-[320px] xl:w-[400px] items-center pointer-events-none"
      >
        <div className="relative w-full h-full">
          <div className="absolute -inset-8 rounded-full bg-gradient-to-br from-[#EBA746]/30 to-[#4A90D9]/30 blur-3xl" />
          <img
            src="/thao-van-portrait.jpg"
            alt="Thảo Vân portrait"
            className="relative w-full h-full object-cover rounded-[48px] border-2 border-white shadow-2xl"
          />
        </div>
      </FadeIn>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col justify-start lg:justify-between relative px-6 md:px-10 pt-10 md:pt-14 pb-12 lg:pb-0 gap-16 lg:gap-10">

        {/* Heading */}
        <div className="overflow-hidden z-20 relative lg:max-w-[65%]">
          <FadeIn delay={0.1} y={20}>
            <span className="inline-block text-[#4A90D9] font-semibold uppercase tracking-[0.3em] text-xs sm:text-sm mb-4">
              01 — The Problem
            </span>
          </FadeIn>

          <FadeIn delay={0.15} y={40} duration={0.9}>
            <h1 className="text-[#EBA746] font-black uppercase tracking-tight leading-none w-full text-[clamp(2.25rem,7vw,100px)]">
              HELLO, I&apos;M THẢO VÂN
            </h1>
          </FadeIn>

          <FadeIn delay={0.25} y={20} duration={0.8}>
            <p className="text-[#2B3440] font-medium max-w-xl mt-6 sm:mt-8 text-[clamp(1rem,1.8vw,1.35rem)] leading-relaxed">
              Every day, brands lose their audience in three seconds of scrolling — buried under noise, forgotten before the message even lands.
            </p>
          </FadeIn>

          {/* Skill tags */}
          <FadeIn delay={0.3} y={20} className="flex flex-wrap gap-3 mt-8 sm:mt-10 md:mt-12">
            {SKILL_TAGS.map(({ icon: Icon, label }) => (
              <span
                key={label}
                className="flex items-center gap-2 rounded-full border border-[#2B3440]/20 bg-white/60 backdrop-blur-sm px-4 py-2 text-xs sm:text-sm font-medium uppercase tracking-wide text-[#2B3440]"
              >
                <Icon size={16} strokeWidth={2} />
                {label}
              </span>
            ))}
          </FadeIn>
        </div>

        {/* Bottom Bar */}
        <div className="flex justify-between items-end pb-7 sm:pb-8 md:pb-10 z-20 w-full">
          <FadeIn delay={0.35} y={20}>
            <p className="text-[#2B3440] font-light uppercase tracking-wide leading-snug max-w-[160px] sm:max-w-[220px] md:max-w-[260px] text-[clamp(0.75rem,1.4vw,1.5rem)]">
              a communications student who makes sure yours doesn&apos;t
            </p>
          </FadeIn>

          <FadeIn delay={0.5} y={20} id="contact" className="relative z-20">
            <ContactButton />
          </FadeIn>
        </div>

        {/* Scroll cue */}
        <FadeIn
          delay={0.7}
          className="hidden sm:flex flex-col items-center gap-2 absolute left-1/2 -translate-x-1/2 bottom-2 text-[#2B3440]/60 z-20"
        >
          <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
          <ArrowDown size={16} className="animate-bounce" />
        </FadeIn>
      </div>
    </section>
  );
}
