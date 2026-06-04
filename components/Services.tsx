"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Link from "next/link";

const services = [
  { tag: "Heat Therapy", title: "Sauna", desc: "Deep relaxation and detoxification in our premium Finnish-style sauna.", image: "/images/card/card-sauna.webp", href: "/sauna" },
  { tag: "Cold Therapy", title: "Ice Bath", desc: "Invigorating 6°C cold plunge therapy to reduce inflammation.", image: "/images/card/card-icebath.webp", href: "/icebath" },
  { tag: "Warm Immersion", title: "Hot Pool", desc: "Soothing warmth, deep relaxation, and ultimate recovery.", image: "/images/card/card-hotpool.webp", href: "/hotpool" },
  { tag: "Active Recovery", title: "Swimming Pool", desc: "Perfect for mindful laps, peaceful floating, and active recovery.", image: "/images/card/card-swimmingpool.webp", href: "/swimmingpool" },
];

export default function Services() {
  const [emblaRef] = useEmblaCarousel({ loop: true, align: "center" });

  return (
    <section id="services" className="relative w-full min-h-screen bg-[#000000] flex flex-col justify-center py-16 lg:py-24 overflow-hidden">
      
      {/* =========================================
          BACKGROUND
          ========================================= */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/images/bg/bg-service.webp" 
          alt="Services Background"
          fill 
          sizes="100vw"
          className="object-cover object-center opacity-50 md:opacity-70" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#000000] via-transparent to-[#000000]"></div>
      </div>

      {/* HEADER UTAMA */}
      <div className="relative z-10 text-center mb-12 lg:mb-20 px-6">
        <h2 className="font-playfair text-4xl lg:text-5xl text-white mb-3 drop-shadow-lg">
          What We <span className="text-[#D4AF37] italic">Offer</span> 
        </h2>
        <p className="font-montserrat text-[10px] lg:text-xs tracking-[4px] lg:tracking-[6px] uppercase text-white/90 drop-shadow-md">
          Our <span className="text-[#D4AF37] font-semibold">Services</span>
        </p>
      </div>

      {/* VERSI MOBILE & TABLET (INFINITY SLIDER) */}
      <div className="relative z-10 block lg:hidden w-full overflow-hidden px-6" ref={emblaRef}>
        <div className="flex touch-pan-y pb-10 -ml-4">
          {services.map((s, i) => (
            <div key={i} className="flex-[0_0_85%] md:flex-[0_0_50%] min-w-0 pl-4">
              <Link href={s.href} className="block relative w-full h-[450px] md:h-[500px] rounded-xl overflow-hidden bg-gray-900 shadow-2xl flex flex-col justify-end transition-transform duration-500 hover:-translate-y-2">
                <Image src={s.image} alt={s.title} fill sizes="(max-width: 768px) 85vw, 50vw" className="object-cover brightness-75" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent" />
                <div className="relative p-6 md:p-8 z-10 w-full">
                  <p className="text-[10px] md:text-[11px] tracking-[3px] uppercase text-[#D4AF37] font-semibold mb-2">{s.tag}</p>
                  <h3 className="font-playfair text-3xl md:text-4xl text-white italic mb-3">{s.title}</h3>
                  <p className="text-xs md:text-sm text-white/80 font-light leading-relaxed mb-4 line-clamp-3 text-justify">{s.desc}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* VERSI DESKTOP */}
      <div className="relative z-10 hidden lg:grid grid-cols-4 gap-5 xl:gap-8 max-w-[1400px] mx-auto w-full px-8 xl:px-4">
        {services.map((s, i) => (
          <Link 
            key={i} 
            href={s.href} 
            className="group block relative w-full h-[500px] xl:h-[650px] rounded-2xl overflow-hidden bg-gray-900 shadow-2xl transition-all duration-500 hover:-translate-y-4 hover:shadow-[0_20px_40px_rgba(212,175,55,0.15)] flex flex-col justify-end"
          >
            <Image src={s.image} alt={s.title} fill sizes="(max-width: 768px) 100vw, 25vw" className="object-cover brightness-[0.65] group-hover:brightness-90 group-hover:scale-105 transition-all duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent" />
            
            <div className="relative p-6 xl:p-8 z-10 w-full flex flex-col">
              <p className="text-[10px] xl:text-[11px] tracking-[3px] xl:tracking-[4px] uppercase text-[#D4AF37] font-semibold mb-2 xl:mb-3">{s.tag}</p>
              <h3 className="font-playfair text-2xl xl:text-4xl text-white italic mb-3 xl:mb-4">{s.title}</h3>
              <p className="text-xs xl:text-sm text-white/85 font-light leading-relaxed mb-5 xl:mb-8 line-clamp-3 text-justify min-h-[54px] xl:min-h-[66px]">{s.desc}</p>
              <span className="text-[10px] xl:text-[11px] tracking-[2px] uppercase text-[#D4AF37] font-semibold flex items-center gap-3 mt-auto">
                View Details <span className="w-6 xl:w-8 h-[1px] bg-[#D4AF37] group-hover:w-12 transition-all duration-500" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}