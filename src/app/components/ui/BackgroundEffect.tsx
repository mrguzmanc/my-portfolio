"use client";

import { useEffect, useRef } from 'react';

interface VantaEffect {
  destroy: () => void;
}

export default function BackgroundEffect() {
  const vantaRef = useRef<HTMLDivElement>(null);
  const vantaEffect = useRef<VantaEffect | null>(null);

  useEffect(() => {
    const loadVanta = async () => {
      if (typeof window !== 'undefined') {
        const THREE = await import('three');
        const VANTA = await import('vanta/dist/vanta.waves.min.js');
        
        if (vantaRef.current && !vantaEffect.current) {
          vantaEffect.current = (VANTA as unknown as {
            default: (options: unknown) => VantaEffect;
          }).default({
            el: vantaRef.current,
            THREE,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 100.00,
            minWidth: 100.00,
            scale: 1.00,
            scaleMobile: 1.00,
            color: 0x23153c,
            shininess: 30.00,
            waveHeight: 15.00,
            waveSpeed: 1.00,
            zoom: 0.75
          });
        }
      }
    };

    loadVanta();

    return () => {
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
        vantaEffect.current = null;
      }
    };
  }, []);

  return (
    <div 
      ref={vantaRef}
      className="fixed inset-0 w-full h-full -z-10"
      style={{ opacity: 0.8 }}
    />
  );
} 