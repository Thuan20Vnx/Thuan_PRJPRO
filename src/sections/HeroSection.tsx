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
    <section id="home" className="relative min-h-screen flex flex-col overflow-x-clip">
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

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col justify-between relative px-6 md:px-10 pt-10 md:pt-14 gap-10">

        {/* Heading */}
        <div className="overflow-hidden z-20 relative">
          <FadeIn delay={0.1} y={20}>
            <span className="inline-block text-[#4A90D9] font-semibold uppercase tracking-[0.3em] text-xs sm:text-sm mb-4">
              01 — The Problem
            </span>
          </FadeIn>

          <FadeIn delay={0.15} y={40} duration={0.9}>
            <h1 className="text-[#EBA746] font-black uppercase tracking-tight leading-none w-full text-[clamp(2.75rem,10vw,140px)]">
              HELLO, I&apos;M THẢO VÂN
            </h1>
          </FadeIn>

          <div className="flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-12 mt-6 sm:mt-8">
            <FadeIn delay={0.25} y={20} duration={0.8}>
              <p className="text-[#2B3440] font-medium max-w-xl text-[clamp(1rem,1.8vw,1.35rem)] leading-relaxed">
                Every day, brands lose their audience in three seconds of scrolling — buried under noise, forgotten before the message even lands.
              </p>
            </FadeIn>

            <div className="hidden md:flex items-center gap-4 shrink-0">
              <FadeIn delay={0.4} y={20} duration={0.8}>
                <div className="flex items-center gap-4 rounded-3xl border border-[#2B3440]/15 bg-white/50 backdrop-blur-sm px-6 py-5">
                  <span className="text-[#EBA746] font-black text-4xl lg:text-5xl leading-none">3s</span>
                  <span className="text-[#2B3440]/70 font-medium text-sm max-w-[140px] leading-snug">
                    is all it takes to lose your audience&apos;s attention
                  </span>
                </div>
              </FadeIn>

              <FadeIn delay={0.5} x={20} y={0} duration={0.8} className="hidden lg:block shrink-0">
                <div className="relative">
                  <div className="absolute -inset-3 rounded-[28px] bg-gradient-to-br from-[#EBA746]/30 to-[#4A90D9]/30 blur-xl" />
                  <img
                    src="/thao-van-portrait.jpg"
                    alt="Thảo Vân portrait"
                    className="relative w-[130px] h-[160px] xl:w-[150px] xl:h-[180px] object-cover rounded-3xl border-2 border-white shadow-xl"
                  />
                </div>
              </FadeIn>
            </div>
          </div>

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

          <FadeIn delay={0.5} y={20} id="contact">
            <ContactButton />
          </FadeIn>
        </div>

        {/* Scroll cue */}
        <FadeIn
          delay={0.7}
          className="hidden sm:flex flex-col items-center gap-2 absolute left-1/2 -translate-x-1/2 bottom-2 text-[#2B3440]/60"
        >
          <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
          <ArrowDown size={16} className="animate-bounce" />
        </FadeIn>
      </div>
    </section>
  );
}
