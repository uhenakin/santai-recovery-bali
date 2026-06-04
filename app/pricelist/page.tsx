"use client";

import Link from "next/link";
import Image from "next/image";
import useEmblaCarousel from 'embla-carousel-react';
import Navbar from "@/components/Navbar";

const plans = [
  { id: 1, title: "Single Session", desc: "One-time access to all facilities", price: "Rp 200.000", valid: "PER VISIT", popular: false, link: "https://wa.me/yournumber" },
  { id: 2, title: "Day Pass", desc: "Unlimited access for 1 day", price: "Rp 300.000", valid: "VALID 1 DAY", popular: false, link: "https://wa.me/yournumber" },
  { id: 3, title: "Weekly Pass", desc: "Unlimited access for 7 days", price: "Rp 1.000.000", valid: "VALID 7 DAYS", popular: false, link: "https://wa.me/yournumber" },
  { id: 4, title: "10 Session Pass", desc: "10 sessions valid for 30 days", price: "Rp 1.500.000", valid: "VALID 30 DAYS", popular: false, link: "https://wa.me/yournumber" },
  { id: 5, title: "Monthly Pass", desc: "Unlimited access for 30 days", price: "Rp 2.500.000", valid: "VALID 30 DAYS", popular: true, link: "https://wa.me/yournumber" },
  { id: 6, title: "3 Months Pass", desc: "Unlimited access for 90 days", price: "Rp 5.000.000", valid: "VALID 90 DAYS", popular: false, link: "https://wa.me/yournumber" },
  { id: 7, title: "6 Months Pass", desc: "Unlimited access for 180 days", price: "Rp 8.000.000", valid: "VALID 180 DAYS", popular: false, link: "https://wa.me/yournumber" },
  { id: 8, title: "1 Year Pass", desc: "Unlimited access for 365 days", price: "Rp 15.000.000", valid: "VALID 365 DAYS", popular: false, link: "https://wa.me/yournumber" },
];

const inclusions = [
  { title: "Thermal Sauna", desc: "Deep detoxification to improve blood circulation and soothe muscles." },
  { title: "Ice Bath Plunge", desc: "Sub-zero recovery to drastically reduce inflammation and boost energy." },
  { title: "Hot Therapy Pool", desc: "Optimal temperature to dissolve stress and relax the central nervous system." },
  { title: "Tropical Oasis Pool", desc: "Access to our serene swimming pool and lush garden lounge area." },
  { title: "Premium Amenities", desc: "Complimentary fresh towels, secure digital lockers, and premium shower facilities." },
  { title: "Hydration Station", desc: "Unlimited access to fresh mineral water and botanical-infused herbal teas." },
];

const rules = [
  { title: "Quiet Sanctuary", desc: "Kindly lower your voice to preserve the tranquil atmosphere for all guests." },
  { title: "Shower First", desc: "A quick shower is mandatory before entering the cold plunge or hot pools." },
  { title: "Proper Attire", desc: "Appropriate swimwear must be worn at all times within the facility." },
  { title: "Digital Detox", desc: "We highly recommend keeping phone usage to an absolute minimum." },
];

export default function PriceListPage() {
  const [emblaRef] = useEmblaCarousel({
    loop: true,
    align: 'center',
    breakpoints: { '(min-width: 768px)': { active: false } }
  });

  return (
    <main className="w-full min-h-screen bg-[#000000] text-white">
      
      <Navbar />

      {/* ================= AREA 1: PRICING ================= */}
      <section className="relative w-full min-h-[85vh] md:min-h-0 flex flex-col md:block justify-center pt-28 pb-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/bg/bg-pricelist.webp"
            alt="Santai Premium Recovery Plans"
            fill
            sizes="100vw"
            className="object-cover object-center md:object-[center_15%] opacity-60 md:opacity-55 scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#000000] via-black/20 md:via-transparent to-[#000000]"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">

          {/* Heading */}
          <div className="flex flex-col items-center text-center mb-16">
            <div className="w-px h-12 bg-gradient-to-b from-transparent to-[#C39953] mb-6" />
            <h2 className="font-serif text-3xl md:text-5xl text-white leading-tight tracking-wide drop-shadow-lg">
              Choose your <span className="text-[#C39953] italic">recovery plan</span>
            </h2>
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#C39953] to-transparent mt-6" />
          </div>

          {/* ── MOBILE: Embla Slider ── */}
          <div className="block md:hidden overflow-hidden w-full" ref={emblaRef}>
            <div className="flex touch-pan-y gap-0 pb-4">
              {plans.map((plan) => (
                <div key={plan.id} className="flex-[0_0_82%] min-w-0 px-2">
                  <div className={`relative h-full flex flex-col justify-between p-7 bg-[#050505]/90 backdrop-blur-sm
                    border border-[#C39953]/50 
                    ${plan.popular ? "bg-gradient-to-b from-[#C39953]/20 to-[#050505]/90" : "shadow-[0_0_15px_rgba(195,153,83,0.1)]"}
                  `}>
                    
                    {plan.popular && (
                      <span className="absolute top-4 right-4 text-[8px] tracking-[0.2em] uppercase text-[#C39953] font-bold border border-[#C39953]/40 px-2 py-1">
                        Popular
                      </span>
                    )}

                    <div className="mb-8">
                      <p className="text-[11px] tracking-[0.25em] uppercase text-[#C39953] font-bold mb-3">{plan.valid}</p>
                      <h3 className="font-serif text-2xl text-white font-normal mb-2">{plan.title}</h3>
                      <p className="text-white/85 text-xs font-light leading-relaxed">{plan.desc}</p>
                    </div>

                    <div>
                      <div className="w-full h-px bg-gradient-to-r from-[#C39953]/30 to-transparent mb-6" />
                      <p className="font-serif text-3xl text-[#C39953] font-normal mb-6 tracking-wide">{plan.price}</p>
                      <Link
                        href={plan.link}
                        target="_blank"
                        className="block w-full py-3 text-center text-[9px] tracking-[0.25em] uppercase font-semibold border border-[#C39953] text-[#C39953] hover:bg-[#C39953] hover:text-black transition-all duration-300"
                      >
                        Book Now
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── DESKTOP: Grid ── */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {plans.map((plan) => (
              <div
                key={plan.id}
                className={`relative flex flex-col justify-between p-8 bg-[#050505]/90 backdrop-blur-sm transition-all duration-500 group
                  hover:bg-[#111]/95 hover:shadow-[0_0_30px_rgba(195,153,83,0.25)] hover:-translate-y-1
                  border border-[#C39953]/40
                  ${plan.popular ? "shadow-[0_0_20px_rgba(195,153,83,0.15)] border-[#C39953]/80 bg-gradient-to-b from-[#C39953]/10 to-[#050505]/90" : ""}
                `}
              >

                {plan.popular && (
                  <span className="absolute top-6 right-6 text-[8px] tracking-[0.2em] uppercase text-[#C39953] font-bold border border-[#C39953]/50 px-3 py-1 bg-black/50">
                    Most Popular
                  </span>
                )}

                <div className="mb-8">
                  <p className="text-[10px] tracking-[0.25em] uppercase text-[#C39953] font-bold mb-4">{plan.valid}</p>
                  <h3 className="font-serif text-xl md:text-2xl text-white font-normal mb-2 leading-tight">{plan.title}</h3>
                  <p className="text-white/85 text-sm font-light leading-relaxed">{plan.desc}</p>
                </div>

                <div className="flex flex-col gap-6">
                  <div className="w-12 h-px bg-gradient-to-r from-[#C39953]/60 to-transparent" />
                  <p className="font-serif text-2xl md:text-3xl text-[#C39953] font-normal tracking-wide drop-shadow-md">{plan.price}</p>
                  <Link
                    href={plan.link}
                    target="_blank"
                    className="block py-3 text-[10px] tracking-[0.25em] uppercase font-semibold transition-all duration-300 text-center border border-[#C39953]/80 text-[#C39953] hover:bg-[#C39953] hover:text-black"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= AREA 2: INCLUSIONS & RULES ================= */}
      <section className="relative w-full pt-24 pb-32 overflow-hidden">
        <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
          <div className="mb-32">
            <div className="flex flex-col items-center text-center mb-16">
              <p className="text-[10px] tracking-[0.4em] uppercase text-[#C39953] mb-4 font-bold">All-Inclusive Access</p>
              <h3 className="font-serif text-3xl md:text-4xl text-white">What's Included in Your Pass</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#C39953]/20">
              {inclusions.map((inc, index) => (
                <div key={index} className="bg-[#050505]/95 backdrop-blur-sm p-8 group hover:bg-[#111] transition-all duration-300">
                  <div className="w-6 h-px bg-[#C39953]/50 mb-6 group-hover:w-10 transition-all duration-300" />
                  <h4 className="font-serif text-lg text-white mb-3 font-normal">{inc.title}</h4>
                  <p className="text-white/90 text-sm font-light leading-relaxed">{inc.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">
              <div className="lg:col-span-1">
                <p className="text-[10px] tracking-[0.4em] uppercase text-[#C39953] mb-4 font-bold">Harmonious Space</p>
                <h3 className="font-serif text-3xl md:text-4xl text-white mb-6 leading-tight font-normal">Spa Rules & <br/>Etiquette</h3>
                <div className="w-8 h-px bg-[#C39953]/50 mb-6" />
                <p className="text-white/90 text-sm font-light leading-relaxed">
                  To guarantee an unrivaled atmosphere of deep relaxation and recovery, we kindly ask all guests to honor these guidelines.
                </p>
              </div>
              <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-10">
                {rules.map((rule, index) => (
                  <div key={index}>
                    <h4 className="text-white font-semibold text-sm tracking-widest uppercase mb-2">{rule.title}</h4>
                    <p className="text-white/85 text-sm font-light leading-relaxed">{rule.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="relative z-10 w-full py-8 bg-black text-center text-[10px] tracking-widest text-gray-500 uppercase">
        © 2026 Santai Recovery Spa.
      </footer>

    </main>
  );
}