"use client";

import { useEffect, useRef } from "react";
// @ts-ignore
import gsap from "gsap";

export default function Template({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Pastikan elemennya ada sebelum dianimasikan
    if (containerRef.current) {
      gsap.fromTo(
        containerRef.current,
        { opacity: 0, y: 30 }, // Mulai dari transparan dan agak di bawah
        { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" } // Muncul ke atas
      );
    }
  }, []);

  return (
    // KUNCI PERBAIKAN: style={{ opacity: 0 }} 
    // Ini memastikan halaman 100% tembus pandang sebelum GSAP bekerja, sehingga tidak ada kedipan
    <div ref={containerRef} style={{ opacity: 0 }}>
      {children}
    </div>
  );
}