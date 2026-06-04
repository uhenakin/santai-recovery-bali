"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import { trackAndRedirect } from "@/lib/trackClick";
import useEmblaCarousel from "embla-carousel-react";

export default function SwimmingPoolPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Path sudah menggunakan .webp dan 10 file yang berformat 'swimmingX'
  const galleryImages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => `/images/swimmingpool/swimming${n}.webp`);

  const [galleryEmblaRef] = useEmblaCarousel({ loop: true, align: "start" });
  
  const [servicesEmblaRef] = useEmblaCarousel({
    loop: true,
    align: "start",
    breakpoints: { '(max-width: 768px)': { align: "center" } }
  });

  const otherServices = [
    { title: "Sauna", tag: "Heat Therapy", desc: "Deep relaxation and detoxification in our premium Finnish-style sauna.", image: "/images/card/card-sauna.webp", href: "/sauna" },
    { title: "Ice Bath", tag: "Cold Therapy", desc: "Invigorating 6°C cold plunge therapy to reduce inflammation.", image: "/images/card/card-icebath.webp", href: "/icebath" },
    { title: "Hot Pool", tag: "Warm Immersion", desc: "Soothing warmth, deep relaxation, and ultimate recovery.", image: "/images/card/card-hotpool.webp", href: "/hotpool" },
  ];

  return (
    <main className="w-full bg-[#000000] text-white">
      <Navbar />

      {/* HERO */}
      <section className="relative w-full min-h-[65vh] md:min-h-[70vh] flex flex-col justify-center pt-32 pb-16">
        <div className="absolute inset-0 z-0">
          <Image src="/images/bg/bg-swimmingpool.webp" alt="Swimming Pool" fill sizes="(max-width: 768px) 85vw, 33vw" className="object-cover object-center" priority />
          <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/40 to-black"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-8 w-full flex flex-col items-start drop-shadow-2xl mt-4">
          <p className="text-[11px] tracking-[0.4em] uppercase text-[#D4AF37] mb-4 font-bold">Active Recovery</p>
          <h1 className="font-serif text-5xl md:text-7xl mb-6 md:mb-8 leading-tight">
            Swimming <span className="text-[#D4AF37] italic">Pool</span>
          </h1>
          <div className="space-y-4 md:space-y-6 text-white text-sm md:text-base font-light leading-relaxed max-w-2xl font-medium">
            <p>Engage in low-impact cardio or simply float to experience weightlessness. Our swimming pool is designed to support active recovery, helping you maintain mobility without straining your joints.</p>
            <p>Whether you are cooling down after a sauna session or looking to do some gentle laps, the spacious pool environment provides the perfect balance of activity and serenity.</p>
          </div>
          <div className="mt-8 md:mt-12 flex gap-8 pt-6 md:pt-8 w-full max-w-xl">
            <div>
              <p className="text-[#D4AF37] text-[10px] tracking-widest uppercase font-bold mb-1">Temperature</p>
              <p className="font-serif text-2xl text-white">Ambient</p>
            </div>
            <div>
              <p className="text-[#D4AF37] text-[10px] tracking-widest uppercase font-bold mb-1">Duration</p>
              <p className="font-serif text-2xl text-white">As Desired</p>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="relative z-10 py-20 bg-gradient-to-b from-black via-[#111111] to-black">
        <div className="max-w-7xl mx-auto px-8 mb-12">
          <h2 className="font-serif text-3xl text-[#D4AF37]">Facility Gallery</h2>
        </div>
        <div className="overflow-hidden w-full cursor-grab active:cursor-grabbing" ref={galleryEmblaRef}>
          <div className="flex touch-pan-y -ml-4">
            {galleryImages.map((img, i) => (
              <div key={i} className="flex-[0_0_85%] md:flex-[0_0_33.333%] min-w-0 pl-4">
                <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-xl cursor-pointer group bg-[#000]" onClick={() => setSelectedImage(img)}>
                  <Image src={img} alt={`Swimming Pool ${i + 1}`} fill sizes="(max-width: 768px) 85vw, 33vw" className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500 z-10" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OTHER SERVICES */}
      <section className="relative z-10 py-24 bg-gradient-to-b from-black via-[#111111] to-black">
        <div className="max-w-7xl mx-auto px-8 mb-12 flex flex-col items-center">
          <h2 className="font-serif text-4xl text-[#D4AF37] text-center">Explore Other Oasis</h2>
          <p className="text-[10px] tracking-[0.3em] uppercase text-gray-400 mt-4 text-center">Discover Our Complete Recovery Ecosystem</p>
        </div>
        <div className="w-full max-w-7xl mx-auto px-8">
          <div className="overflow-hidden w-full cursor-grab active:cursor-grabbing" ref={servicesEmblaRef}>
            <div className="flex touch-pan-y -ml-4 md:-ml-6">
              {otherServices.map((service, index) => (
                <div key={index} className="flex-[0_0_85%] md:flex-[0_0_33.333%] min-w-0 pl-4 md:pl-6">
                  <Link href={service.href} className="group relative block w-full h-[450px] xl:h-[550px] overflow-hidden rounded-2xl bg-gray-900 shadow-2xl transition-transform duration-500 hover:-translate-y-2">
                    <Image src={service.image} alt={service.title} fill sizes="(max-width: 768px) 85vw, 33vw" className="object-cover brightness-[0.65] group-hover:brightness-90 transition-all duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent" />
                    <div className="absolute bottom-0 left-0 w-full p-6 xl:p-8 z-10 flex flex-col">
                      <p className="text-[9px] xl:text-[10px] tracking-[2px] xl:tracking-[3px] uppercase text-[#D4AF37] font-semibold mb-2">{service.tag}</p>
                      <h3 className="font-serif text-2xl xl:text-3xl text-white italic mb-2 xl:mb-3">{service.title}</h3>
                      <p className="text-xs xl:text-sm text-white/80 font-light leading-relaxed mb-4 xl:mb-6 line-clamp-3 text-justify min-h-[54px] xl:min-h-[66px]">{service.desc}</p>
                      <span className="text-[9px] xl:text-[10px] tracking-[2px] uppercase text-[#D4AF37] font-semibold flex items-center gap-3">
                        View Details <span className="w-5 xl:w-6 h-[1px] bg-[#D4AF37]" />
                      </span>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-16 flex justify-center">
            <button 
              onClick={() => trackAndRedirect('Klik WA - Halaman Swimming Pool', 'https://wa.me/6281234567890')}
              className="bg-[#D4AF37] text-black text-[11px] tracking-[0.3em] uppercase px-12 py-4 font-bold hover:bg-white transition-all duration-300 shadow-[0_0_15px_rgba(212,175,55,0.2)] text-center"
            >
              Book Now
            </button>
          </div>
        </div>
      </section>

      <footer className="relative z-10 w-full py-8 bg-black text-center text-[10px] tracking-widest text-gray-500 uppercase">
        © 2026 Santai Recovery Spa.
      </footer>

      {selectedImage && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 backdrop-blur-lg cursor-zoom-out" onClick={() => setSelectedImage(null)}>
          <button className="absolute top-6 right-6 md:top-10 md:right-10 text-white hover:text-[#D4AF37] transition-colors z-[10000] bg-black/50 p-2 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
          <div className="relative w-[95vw] h-[90vh] flex items-center justify-center">
            <Image src={selectedImage} alt="Enlarged Facility Detail" fill sizes="(max-width: 768px) 85vw, 33vw" className="object-contain" quality={100} priority />
          </div>
        </div>
      )}
    </main>
  );
}