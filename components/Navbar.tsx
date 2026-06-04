"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
// @ts-ignore
import { useLenis } from "@studio-freight/react-lenis";
import { trackSiteVisit } from "@/lib/trackVisit";

export default function Navbar() {
  const lenis = useLenis();
  const pathname = usePathname(); 
  
  // Pengecekan halaman aktif
  const isHomePage = pathname === "/";
  const isPricelist = pathname === "/pricelist";
  const isAboutPage = pathname === "/about"; 
  const isPartnershipPage = pathname === "/partnership";
  
  // Daftarkan semua URL halaman fasilitas agar dikenali sebagai "Services Page"
  const isServicesPage = 
    pathname === "/services" || 
    pathname === "/sauna" || 
    pathname === "/hotpool" || 
    pathname === "/icebath" || 
    pathname === "/swimmingpool";
  
  // State untuk melacak posisi scroll saat ini di Homepage
  const [menuPhase, setMenuPhase] = useState<"home" | "about" | "services" | "partnership" | "contact">("home");
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); 

  useEffect(() => {
    trackSiteVisit();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      // Navbar muncul saat scroll ke bawah
      if (window.scrollY > 50) {
        setIsNavbarVisible(true);
      } else {
        setIsNavbarVisible(false);
        if (window.scrollY === 0) setIsNavbarVisible(true); 
      }

      if (!isHomePage) return; 

      // Mendeteksi sedang berada di bagian/section mana pada Homepage
      const aboutSection = document.getElementById("about");
      const servicesSection = document.getElementById("services");
      const partnershipSection = document.getElementById("partnership");
      const contactSection = document.getElementById("contact");

      const scrollPosition = window.scrollY + 160; 

      if (contactSection && scrollPosition >= contactSection.offsetTop) {
        setMenuPhase("contact");
      } else if (partnershipSection && scrollPosition >= partnershipSection.offsetTop) {
        setMenuPhase("partnership");
      } else if (servicesSection && scrollPosition >= servicesSection.offsetTop) {
        setMenuPhase("services");
      } else if (aboutSection && scrollPosition >= aboutSection.offsetTop) {
        setMenuPhase("about");
      } else {
        setMenuPhase("home");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    setIsNavbarVisible(true); 
    handleScroll(); 

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage]); 

  // Fungsi smooth scroll hanya aktif di Homepage
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, target: string) => {
    if (!isHomePage) return; 
    e.preventDefault();
    setIsMobileMenuOpen(false); 
    if (lenis) {
      lenis.scrollTo(target, { offset: 0, duration: 1.5 });
    }
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 w-full z-[100] px-6 py-4 md:px-12 flex justify-between items-center bg-[#000000]/40 backdrop-blur-md border-b border-white/5 transition-all duration-300 ease-in-out ${
        isNavbarVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"
      }`}>
        
        {/* LOGO */}
        <Link href="/" className="flex items-center" onClick={(e) => { if (isHomePage) handleScrollTo(e as any, "top"); }}>
          <img src="/images/logo/santai.png" alt="Logo Santai" className="h-9 md:h-10 w-auto object-contain invert brightness-0 opacity-90" />
        </Link>

        {/* DESKTOP MENU - Menghilang secara dinamis */}
        <div className="hidden md:flex items-center gap-8">
          {!isHomePage ? (
            <>
              {!isAboutPage && <Link href="/#about" className="text-[10px] tracking-[0.25em] uppercase text-gray-200 hover:text-[#C39953] transition-all duration-300 font-medium">About</Link>}
              {!isServicesPage && <Link href="/#services" className="text-[10px] tracking-[0.25em] uppercase text-gray-200 hover:text-[#C39953] transition-all duration-300 font-medium">Services</Link>}
              {!isPricelist && <Link href="/pricelist" className="text-[10px] tracking-[0.25em] uppercase text-gray-200 hover:text-[#C39953] transition-all duration-300 font-medium">Pricelist</Link>}
              {!isPartnershipPage && <Link href="/#partnership" className="text-[10px] tracking-[0.25em] uppercase text-gray-200 hover:text-[#C39953] transition-all duration-300 font-medium">Partnership</Link>}
            </>
          ) : (
            <>
              {menuPhase !== "about" && (
                <a href="#about" onClick={(e) => handleScrollTo(e, "#about")} className="text-[10px] tracking-[0.25em] uppercase text-gray-200 hover:text-[#C39953] transition-all duration-300 font-medium">About</a>
              )}
              
              {menuPhase !== "home" && menuPhase !== "services" && (
                <a href="#services" onClick={(e) => handleScrollTo(e, "#services")} className="text-[10px] tracking-[0.25em] uppercase text-gray-200 hover:text-[#C39953] transition-all duration-300 font-medium">Services</a>
              )}
              
              {menuPhase !== "home" && (
                <Link href="/pricelist" className="text-[10px] tracking-[0.25em] uppercase text-gray-200 hover:text-[#C39953] transition-all duration-300 font-medium">Pricelist</Link>
              )}
              
              {menuPhase !== "partnership" && (
                <a href="#partnership" onClick={(e) => handleScrollTo(e, "#partnership")} className="text-[10px] tracking-[0.25em] uppercase text-gray-200 hover:text-[#C39953] transition-all duration-300 font-medium">Partnership</a>
              )}
            </>
          )}
          
          <Link href="/#contact" className="bg-[#C39953] text-[#0a0a0a] text-[10px] tracking-[0.25em] uppercase px-6 py-3 font-bold hover:bg-white transition-all duration-300">Book Now</Link>
        </div>

        {/* BURGER BUTTON (MOBILE) */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
          className="flex md:hidden flex-col justify-center items-center gap-1.5 w-8 h-8 z-[110] relative focus:outline-none"
        >
          <span className={`h-0.5 w-6 bg-white transition-transform duration-300 ${isMobileMenuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`h-0.5 w-6 bg-white transition-opacity duration-300 ${isMobileMenuOpen ? "opacity-0" : ""}`} />
          <span className={`h-0.5 w-6 bg-white transition-transform duration-300 ${isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </nav>

      {/* MOBILE MENU OVERLAY */}
      <div 
        onClick={() => setIsMobileMenuOpen(false)}
        className={`fixed inset-0 bg-gradient-to-r from-black via-black/70 to-transparent backdrop-blur-sm z-[90] md:hidden transition-opacity duration-300 ${
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* MOBILE MENU PANEL - MENAMPILKAN SEMUANYA */}
      <div 
        className={`fixed top-0 right-0 h-screen w-[75vw] bg-black/40 backdrop-blur-md border-l border-white/10 z-[95] flex flex-col justify-center items-start pl-8 pr-6 md:hidden transform transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col gap-8 w-full drop-shadow-lg">

          {!isHomePage ? (
            <>
              {/* Tampilkan SEMUA menu di Mobile tanpa batasan */}
              <Link href="/#about" onClick={() => setIsMobileMenuOpen(false)} className="text-lg tracking-[0.2em] uppercase text-gray-200 hover:text-[#C39953] transition-colors">About</Link>
              <Link href="/#services" onClick={() => setIsMobileMenuOpen(false)} className="text-lg tracking-[0.2em] uppercase text-gray-200 hover:text-[#C39953] transition-colors">Services</Link>
              <Link href="/pricelist" onClick={() => setIsMobileMenuOpen(false)} className="text-lg tracking-[0.2em] uppercase text-gray-200 hover:text-[#C39953] transition-colors">Pricelist</Link>
              <Link href="/#partnership" onClick={() => setIsMobileMenuOpen(false)} className="text-lg tracking-[0.2em] uppercase text-gray-200 hover:text-[#C39953] transition-colors">Partnership</Link>
            </>
          ) : (
            <>
              {/* Tampilkan SEMUA menu di Mobile tanpa batasan */}
              <a href="#about" onClick={(e) => handleScrollTo(e, "#about")} className="text-lg tracking-[0.2em] uppercase text-gray-200 hover:text-[#C39953] transition-colors">About</a>
              <a href="#services" onClick={(e) => handleScrollTo(e, "#services")} className="text-lg tracking-[0.2em] uppercase text-gray-200 hover:text-[#C39953] transition-colors">Services</a>
              <Link href="/pricelist" onClick={() => setIsMobileMenuOpen(false)} className="text-lg tracking-[0.2em] uppercase text-gray-200 hover:text-[#C39953] transition-colors">Pricelist</Link>
              <a href="#partnership" onClick={(e) => handleScrollTo(e, "#partnership")} className="text-lg tracking-[0.2em] uppercase text-gray-200 hover:text-[#C39953] transition-colors">Partnership</a>
            </>
          )}

          <Link 
            href="/#contact" 
            onClick={() => setIsMobileMenuOpen(false)} 
            className="mt-4 bg-[#C39953] text-black text-xs tracking-[0.2em] uppercase py-4 font-bold text-center hover:bg-white transition-colors shadow-lg"
          >
            Book Now
          </Link>
        </div>
      </div>
    </>
  );
}