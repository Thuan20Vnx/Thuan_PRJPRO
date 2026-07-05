import FadeIn from '../components/FadeIn';
import AnimatedText from '../components/AnimatedText';
import ContactButton from '../components/ContactButton';

export default function AboutSection() {
  return (
    <section id="about" className="relative min-h-screen bg-transparent px-5 sm:px-8 md:px-10 py-20 flex flex-col items-center justify-center overflow-hidden">
      
      {/* Decorative 3D Elements */}
      <FadeIn delay={0.1} x={-80} y={0} duration={0.9} className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] w-[120px] sm:w-[160px] md:w-[210px]">
        <img src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png" alt="Moon icon" className="w-full h-auto object-contain pointer-events-none" />
      </FadeIn>

      <FadeIn delay={0.25} x={-80} y={0} duration={0.9} className="absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] w-[100px] sm:w-[140px] md:w-[180px]">
        <img src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png" alt="3D element" className="w-full h-auto object-contain pointer-events-none" />
      </FadeIn>

      <FadeIn delay={0.15} x={80} y={0} duration={0.9} className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] w-[120px] sm:w-[160px] md:w-[210px]">
        <img src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png" alt="Lego icon" className="w-full h-auto object-contain pointer-events-none" />
      </FadeIn>

      <FadeIn delay={0.3} x={80} y={0} duration={0.9} className="absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] w-[130px] sm:w-[170px] md:w-[220px]">
        <img src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png" alt="3D Group" className="w-full h-auto object-contain pointer-events-none" />
      </FadeIn>

      {/* Main Content */}
      <div className="z-10 flex flex-col items-center gap-10 sm:gap-14 md:gap-16 w-full max-w-7xl">
        <FadeIn delay={0} y={20}>
          <span className="block text-[#4A90D9] font-semibold uppercase tracking-[0.3em] text-xs sm:text-sm text-center mb-4">
            02 — The Approach
          </span>
        </FadeIn>

        <FadeIn delay={0.05} y={40}>
          <h2 className="hero-heading font-black uppercase leading-none tracking-tight text-center text-[clamp(3rem,12vw,160px)]">
            About me
          </h2>
        </FadeIn>

        <div className="flex flex-col md:flex-row items-center gap-12 sm:gap-16 md:gap-20 w-full">
          <FadeIn delay={0.1} x={-40} y={0} duration={0.9} className="shrink-0">
            <img
              src="/thao-van-portrait.jpg"
              alt="Thảo Vân portrait"
              className="w-[220px] h-[280px] sm:w-[260px] sm:h-[330px] md:w-[300px] md:h-[380px] object-cover rounded-[32px] sm:rounded-[40px] border-2 border-white shadow-xl"
            />
          </FadeIn>

          <div className="flex flex-col items-center md:items-start gap-10 sm:gap-12 md:gap-14">
            <AnimatedText
              text="I turn that noise into narratives worth stopping for. As a communications student, I combine content strategy, media production, and public relations to help brands earn attention — and keep it. Every story I shape is built to connect, not just to be seen."
              className="text-[#2B3440] font-medium text-center md:text-left leading-relaxed max-w-[560px] text-[clamp(1rem,2vw,1.35rem)]"
            />

            <FadeIn delay={0.2} y={30}>
              <ContactButton />
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
