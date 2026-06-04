"use client";

import { useRef } from "react";
// @ts-ignore
import gsap from "gsap";
// @ts-ignore
import { ScrollTrigger } from "gsap/ScrollTrigger";
// @ts-ignore
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const container = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.from(".about-anim", {
      y: 40,
      opacity: 0,
      scale: 0.95,
      duration: 1.2,
      stagger: 0.15,
      ease: "power3.out",
      scrollTrigger: {
        trigger: container.current,
        start: "top 70%",
      }
    });
  }, { scope: container });

  return (
    <section id="about" ref={container} className="relative w-full min-h-screen bg-[#000000] flex flex-col justify-center px-6 md:px-12 lg:px-24 overflow-hidden">
      
      <div className="relative z-10 max-w-7xl w-full mx-auto">

        {/* Judul About */}
        <div className="about-anim w-full mb-10">
          <h2 className="font-serif text-[clamp(40px,6vw,72px)] font-normal text-[#D4AF37] leading-[1.1]">
            About
          </h2>
        </div>

        {/* Layout dua kolom — SELALU row, di mobile maupun desktop */}
        <div className="about-anim flex flex-row items-start gap-8 md:gap-16 lg:gap-24 w-full">

          {/* KOLOM KIRI: Judul + Paragraf */}
          <div className="flex flex-col gap-6 flex-1 min-w-0">
            <h3 className="font-serif text-[clamp(16px,2.5vw,28px)] text-white leading-tight tracking-[0.05em] uppercase">
              More than a spa — <br />
              <span className="text-[#C39953] italic normal-case">a sanctuary</span>
            </h3>
            <div className="space-y-4 text-gray-300 text-[12px] sm:text-[13px] lg:text-[15px] font-light leading-relaxed tracking-wide">
              <p>SANTAI RECOVERY SPA is a premium recovery and relaxation destination, established in 2023.</p>
              <p>Born from the need for a high-quality sanctuary amid modern lifestyle demands, we provide a holistic space to restore your body and mind.</p>
              <p>Our approach combines the proven benefits of warm water immersion, sauna therapy, and ice baths to optimize your recovery journey.</p>
            </div>
          </div>

          {/* KOLOM KANAN: Stats 1x4 — selalu di kanan */}
          <div className="flex flex-col gap-5 shrink-0">
            {[
              { val: "4",    label: "FACILITIES"  },
              { val: "6°",   label: "ICE BATH"    },
              { val: "2023", label: "ESTABLISHED" },
              { val: "40°",  label: "HOT POOL"    },
            ].map((item, i) => (
              <div key={i} className="flex flex-col gap-0.5">
                <div className="font-serif text-2xl md:text-4xl lg:text-5xl text-[#D4AF37] leading-none">
                  {item.val}
                </div>
                <p className="text-[8px] md:text-[9px] tracking-[0.2em] uppercase text-white font-semibold whitespace-nowrap">
                  {item.label}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}