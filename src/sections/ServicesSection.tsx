import FadeIn from '../components/FadeIn';

const SERVICES = [
  {
    num: "01",
    name: "Content Writing",
    desc: "Writing captions, articles, and campaign copy that sound human — clear, on-brand, and easy for the right audience to connect with."
  },
  {
    num: "02",
    name: "Social Media",
    desc: "Planning content calendars and managing posting schedules to keep a page active, consistent, and easy to recognize."
  },
  {
    num: "03",
    name: "Event Communications",
    desc: "Supporting event promotion and coverage — from press invites to on-site content — so the story doesn't end when the event does."
  },
  {
    num: "04",
    name: "Public Relations",
    desc: "Drafting press releases and media materials, and learning how to keep a brand's message clear and consistent across channels."
  },
  {
    num: "05",
    name: "Photo & Video",
    desc: "Shooting and editing photo and video content for social platforms, built to support the story rather than distract from it."
  }
];

export default function ServicesSection() {
  return (
    <section className="bg-white rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32">
      <div className="max-w-5xl mx-auto flex flex-col">
        <FadeIn delay={0} y={20}>
          <span className="block text-[#4A90D9] font-semibold uppercase tracking-[0.3em] text-xs sm:text-sm text-center mb-4">
            03 — The Toolkit
          </span>
        </FadeIn>

        <FadeIn delay={0.05}>
          <h2 className="text-[#0C0C0C] font-black uppercase text-center text-[clamp(3rem,12vw,160px)] leading-none mb-6">
            Services
          </h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p className="text-[#0C0C0C]/60 font-light text-center max-w-xl mx-auto mb-16 sm:mb-20 md:mb-28 text-[clamp(0.9rem,1.6vw,1.15rem)]">
            Here&apos;s the mix of skills I rely on to turn that noise into a message people actually remember.
          </p>
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
