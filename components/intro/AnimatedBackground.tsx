'use client';

import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import { useEffect, useMemo, useState } from 'react';
import type {IOptions, RecursivePartial} from "@tsparticles/engine";

export default function AnimatedBackground() {
  const [engineReady, setEngineReady] = useState(false);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    // Initialize tsParticles with slim bundle to keep size small
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setEngineReady(true));

    // Respect prefers-reduced-motion
    if (typeof window !== 'undefined' && 'matchMedia' in window) {
      const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
      const handler = () => setReduced(mq.matches);
      handler();
      mq.addEventListener?.('change', handler);
      return () => mq.removeEventListener?.('change', handler);
    }
  }, []);

  const options: RecursivePartial<IOptions> = useMemo(() => ({
    fpsLimit: 60,
    background: { color: 'transparent' },
    detectRetina: true,
    fullScreen: { enable: true },
    particles: {
      number: { value: reduced ? 30 : 65, density: { enable: true, area: 1200 } },
      color: { value: ['#ffffff', '#1b242f', '#05c2c8', '#e31b6d'] },
      opacity: { value: 0.18, animation: { enable: true, speed: 0.3, minimumValue: 0.05, sync: false } },
      size: { value: { min: 1, max: 3 }, animation: { enable: true, speed: 2, minimumValue: 0.2, sync: false } },
      move: {
        enable: true,
        speed: reduced ? 0.3 : 0.7,
        direction: "none",
        outModes: { default: 'out' },
        random: true,
        straight: false,
        attract: { enable: false },
      },
      links: {
        enable: true,
        distance: 140,
        color: '#67e8f9',
        opacity: 0.12,
        width: 1,
      },
      shape: { type: 'circle' },
    },
    interactivity: {
      events: {
        onHover: { enable: !reduced, mode: 'repulse' },
        resize: { enable: true },
      },
      modes: {
        repulse: { distance: 80, duration: 0.4 },
      },
    },
  }), [reduced]);

  if (!engineReady) return null;

  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 z-0"
    >
      <Particles id="intro-bg" options={options} />
    </div>
  );
}
