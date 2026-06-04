"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
// @ts-ignore
import gsap from "gsap";
// @ts-ignore
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { trackAndRedirect } from "@/lib/trackClick";

gsap.registerPlugin(ScrollTrigger);

const contactInfo = [
  { id: "email",     title: "Email",     action: "Click Email",     href: "mailto:info@santaispa.com",                    icon: "/images/icon/mail.png" },
  { id: "whatsapp",  title: "WhatsApp",  action: "Click WhatsApp",  href: "https://wa.me/62881037601790",                 icon: "/images/icon/wa.png" },
  { id: "location",  title: "Location",  action: "Click Location",  href: "https://maps.google.com",                      icon: "/images/icon/maps.png" },
  { id: "instagram", title: "Instagram", action: "Click Instagram", href: "https://instagram.com/santai_recovery_spa",    icon: "/images/icon/Insatgram.png" },
];

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".contact-header", { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 1.2, stagger: 0.15, ease: "power3.out", scrollTrigger: { trigger: sectionRef.current, start: "top 80%" } });
      gsap.fromTo(".contact-item", { y: 50, opacity: 0, scale: 0.9 }, { y: 0, opacity: 1, scale: 1, duration: 1.2, stagger: 0.15, ease: "back.out(1.5)", scrollTrigger: { trigger: sectionRef.current, start: "top 70%" } });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="contact" className="relative w-full min-h-screen bg-[#000000] flex flex-col justify-center overflow-hidden px-6 lg:px-0">

      <div className="absolute inset-0 z-0">
        <Image 
          src="/images/bg/bg-contact.webp" 
          alt="Contact Section Backdrop"
          fill 
          className="object-cover object-center opacity-70 md:opacity-90" 
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#000000]/70 via-[#000000]/20 to-[#000000]/20"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#000000] via-transparent to-[#000000]"></div>
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto w-full drop-shadow-xl" style={{ textShadow: "0px 4px 10px rgba(0,0,0,0.8)" }}>

        <div style={{ textAlign: "center", maxWidth: "680px", margin: "0 auto 80px" }}>
          <p className="contact-header" style={{ fontSize: "14px", letterSpacing: "6px", textTransform: "uppercase", color: "#D4AF37", fontFamily: "var(--font-manrope)", fontWeight: 700, marginBottom: "16px", opacity: 0 }}>
            Get in touch
          </p>
          <h2 className="contact-header" style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(38px, 5vw, 60px)", fontWeight: 400, color: "#FFFFFF", lineHeight: 1.1, marginBottom: "24px", opacity: 0 }}>
            Ready to <span style={{ color: "#D4AF37", fontStyle: "italic" }}>recover?</span>
          </h2>
          <p className="contact-header" style={{ fontFamily: "var(--font-manrope)", fontSize: "14px", lineHeight: "1.9", color: "#FFFFFF", fontWeight: 500, letterSpacing: "0.5px", opacity: 0 }}>
            Start your recovery journey today. Whether you are an athlete, a professional, or simply seeking peace — Santai is your place to reset.
          </p>
        </div>

        <div style={{ maxWidth: "800px", margin: "0 auto", width: "100%" }}>
          <div className="grid grid-cols-2 gap-8 md:gap-[64px] justify-center text-center">
            {contactInfo.map((item) => (
              <button
                key={item.id}
                onClick={() => trackAndRedirect(item.action, item.href)}
                className="contact-item group flex flex-col items-center opacity-0 cursor-pointer transition-all duration-300 hover:-translate-y-1"
                style={{ background: "transparent", border: "none", padding: 0, textDecoration: "none" }}
                aria-label={item.title}
              >
                <div className="mb-3 h-12 w-12 md:h-20 md:w-20 flex items-center justify-center rounded-full border border-white/10 group-hover:border-[#D4AF37] transition-all duration-300">
                  <img src={item.icon} alt={item.title} className="w-5 h-5 md:w-8 md:h-8 object-contain opacity-70 group-hover:opacity-100 transition-all duration-300" />
                </div>
                <h4 className="font-sans text-[12px] md:text-[14px] tracking-[1px] text-white group-hover:text-[#D4AF37] font-semibold transition-colors duration-300">
                  {item.title}
                </h4>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}