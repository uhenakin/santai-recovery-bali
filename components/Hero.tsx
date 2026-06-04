"use client";

import Image from "next/image";
import { useRef } from "react";
// @ts-ignore
import gsap from "gsap";
// @ts-ignore
import { useGSAP } from "@gsap/react"; 
import Link from "next/link";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(".hero-anim", {
      y: 40,
      opacity: 0,
      duration: 1.5,
      stagger: 0.2,
      ease: "expo.out",
      delay: 0.2
    });
  }, { scope: container });
  
  return (
    <section ref={container} className="relative w-full min-h-screen flex flex-col justify-center px-6 md:px-12 overflow-hidden bg-[#000000]">
      
      {/* BACKGROUND */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/images/bg/bg-hero.webp" 
          alt="Santai Recovery Spa"
          fill 
          sizes="100vw"
          className="object-cover object-center" 
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#000000]/80 via-[#000000]/30 to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(transparent_0%,#000000_100%)] opacity-60"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#000000]/20 via-[#000000]/20 to-[#000000]"></div>
      </div>

      {/* CONTENT CONTAINER */}
      <div className="relative z-10 max-w-5xl w-full mt-20 md:mt-16 mx-auto flex flex-col items-center text-center">
        
        {/* HEADER */}
        <div className="hero-anim w-full flex flex-col md:items-center mb-6 md:mb-8">
          <p className="hidden md:block text-xs lg:text-[14px] tracking-[0.3em] uppercase font-semibold text-white/90 text-center" style={{ fontFamily: "'Poppins', sans-serif" }}>
            <span>Santai Recovery Spa </span>
            <span className="text-[#C39953]">· Uluwatu, Bali · Est. 2023</span>
          </p>

          <div className="flex md:hidden flex-col w-full">
            <span className="text-[22px] sm:text-5xl text-white leading-[1.1] mb-2 drop-shadow-xl text-center uppercase whitespace-nowrap" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600 }}>
              Santai Recovery Spa
            </span>
            <span className="text-[10px] tracking-[0.25em] uppercase font-semibold text-[#C39953] text-center w-full" style={{ fontFamily: "'Poppins', sans-serif" }}>
              Uluwatu, Bali · Est. 2023
            </span>
          </div>
        </div>

        {/* JUDUL UTAMA */}
        <h1 className="font-serif text-4xl sm:text-6xl md:text-8xl lg:text-[110px] leading-[1.1] mb-8 md:mb-12 flex flex-col items-start text-left w-fit drop-shadow-2xl">
          <span className="hero-anim text-white block">Relax.</span>
          <span className="hero-anim bg-gradient-to-r from-[#D4AF37] via-[#F9D423] to-[#D4AF37] bg-clip-text text-transparent italic block">Refresh.</span>
          <span className="hero-anim text-white block">Recover.</span>
        </h1>

        <div className="mb-8 md:mb-10 hero-anim drop-shadow-md px-4">
          <p className="whitespace-nowrap text-[9px] sm:text-[11px] md:text-sm lg:text-[16px] tracking-[0.15em] sm:tracking-[0.2em] md:tracking-[0.25em] text-gray-200 mb-3 uppercase font-medium">
            Sauna · Ice Bath · Hot Pool · Swimming Pool
          </p>
          <p className="text-[11px] md:text-xs lg:text-[14px] tracking-wide text-gray-400 font-light">
            Set within a serene tropical garden oasis
          </p>
        </div>

        {/* OPENING HOURS */}
        <div className="mb-10 md:mb-12 hero-anim drop-shadow-md px-2">
          <p className="text-[10px] md:text-xs tracking-[0.2em] uppercase text-[#C39953] font-semibold mb-2">
            Opening Hours · Mon — Sun
          </p>
          <p className="text-[10px] md:text-xs lg:text-[13px] tracking-[0.1em] md:tracking-[0.15em] text-gray-300 uppercase font-bold leading-relaxed"> 8:00 AM — 9:00 PM
          </p>
        </div>

        {/* TOMBOL */}
        <div className="flex flex-col sm:flex-row gap-4 md:gap-5 hero-anim justify-center w-full sm:w-auto px-6 sm:px-0">
          <Link href="/pricelist" className="bg-gradient-to-r from-[#D4AF37] to-[#C39953] text-[#000000] text-[10px] tracking-[0.2em] uppercase px-6 py-3 md:px-10 md:py-4 font-bold hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:brightness-110 transition-all duration-300 w-full sm:w-auto text-center">
            View Prices
          </Link>
          <Link href="/#services" className="bg-white/5 backdrop-blur-md border border-white/20 text-white text-[10px] tracking-[0.2em] uppercase px-6 py-3 md:px-10 md:py-4 hover:bg-white/10 hover:border-white/40 transition-all duration-300 w-full sm:w-auto text-center">
            Our Services
          </Link>
        </div>
      </div>
    </section>
  );
}