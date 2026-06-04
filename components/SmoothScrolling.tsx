"use client";

// @ts-ignore
import { ReactLenis } from "@studio-freight/react-lenis";

export default function SmoothScrolling({ children }: { children: React.ReactNode }) {
  return (
    <ReactLenis root options={{ lerp: 0.05, duration: 1.5, smoothWheel: true, wheelMultiplier: 1.2 }}>
      {children}
    </ReactLenis>
  );
}