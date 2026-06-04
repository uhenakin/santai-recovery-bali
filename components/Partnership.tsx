"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const offers = [
  { logo: "/images/logo/Logo pemegang KITAS Indonesia.png", title: "KITAS Holders", discount: "15%", label: "ON ALL SERVICES" },
  { logo: "/images/logo/btc.webp", title: "Bali Training Centre", discount: "25%", label: "ON ALL SERVICES" },
  { logo: "/images/logo/LEB.png", title: "Local & Expat Bali", discount: "15%", label: "ON ALL SERVICES" },
];

export default function SpecialOffers() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".offer-header", 
        { y: 30, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 1.2, stagger: 0.15, ease: "power3.out", scrollTrigger: { trigger: sectionRef.current, start: "top 80%" } }
      );
      gsap.fromTo(".offer-card-wrapper", 
        { y: 50, opacity: 0, scale: 0.95 }, 
        { y: 0, opacity: 1, scale: 1, duration: 1.2, stagger: 0.2, ease: "back.out(1.5)", scrollTrigger: { trigger: sectionRef.current, start: "top 70%" } }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section 
      id="partnership" 
      ref={sectionRef} 
      className="relative w-full min-h-screen bg-[#000000] flex flex-col justify-center py-16 px-4 md:px-12 lg:px-20 overflow-hidden"
    >
      
      <div className="relative z-10 w-full max-w-[1400px] mx-auto">
        
        {/* HEADER */}
        <div className="mb-6 md:mb-16 text-center">
          <h2 className="offer-header font-serif text-[clamp(36px,6vw,72px)] font-normal text-[#D4AF37] leading-[1.1] mb-1 md:mb-2 opacity-0">
            Partnerships
          </h2>
          <p className="offer-header font-serif text-[clamp(22px,4vw,36px)] text-white mb-2 md:mb-3 opacity-0">
            Special <span className="text-[#D4AF37] italic">Offers</span>
          </p>
          <p className="offer-header font-sans text-[11px] md:text-[14px] text-white/80 font-light leading-[1.5] opacity-0 max-w-sm mx-auto">
            Exclusive discounts for our lifestyle partners and community members.
          </p>
        </div>

        {/* CARDS — mobile: 1 kolom, desktop: 3 kolom */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 w-full max-w-sm md:max-w-none mx-auto">
          {offers.map((offer, index) => (
            <div 
              key={index} 
              className="offer-card-wrapper p-[2px] rounded-[20px] md:rounded-[40px] bg-gradient-to-br from-white via-gray-700 to-black opacity-0 w-full"
            >
              <div className="w-full px-6 py-6 md:p-12 text-center flex flex-row md:flex-col items-center md:justify-between bg-white rounded-[18px] md:rounded-[38px] gap-4 md:gap-0 md:h-full">
                
                {/* Logo */}
                <div className="h-[56px] w-[56px] md:h-[100px] md:w-auto shrink-0 flex justify-center items-center md:mb-8">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img 
                    src={offer.logo} 
                    alt={offer.title} 
                    className="max-h-full max-w-[56px] md:max-w-[150px] object-contain" 
                  />
                </div>

                {/* Title */}
                <h3 className="font-serif text-[15px] md:text-[28px] font-semibold text-black leading-tight flex-1 md:flex-none text-left md:text-center md:mb-4">
                  {offer.title}
                </h3>

                {/* Discount */}
                <div className="flex flex-col items-center md:items-center shrink-0">
                  <div className="font-serif text-black flex items-baseline justify-center gap-1 md:gap-2 md:mb-3">
                    <span className="text-[10px] md:text-[18px] italic font-normal text-gray-500">Get</span>
                    <span className="text-[24px] md:text-[52px] font-medium leading-none">{offer.discount}</span>
                    <span className="text-[10px] md:text-[18px] italic font-normal text-gray-500">Off</span>
                  </div>
                  <p className="font-sans text-[8px] md:text-[12px] tracking-[1px] md:tracking-[4px] uppercase text-[#D4AF37] font-bold">
                    {offer.label}
                  </p>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>

      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#000000] to-transparent pointer-events-none z-0"></div>
    </section>
  );
}