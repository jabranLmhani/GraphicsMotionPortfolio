'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';

const videos = [
  {
    src: '/videos/motion-01.mp4',
    title: 'UM6P Branding',
    subtitle: 'Motion Graphics • Visual Identity',
  },
  {
    src: '/videos/motion-02.mp4',
    title: 'MRTB',
    subtitle: 'Commercial • Social Media',
  },
  {
    src: '/videos/motion-03.mp4',
    title: 'Mitochondria',
    subtitle: '3D Animation • Molecules',
  },
  {
    src: '/videos/motion-04.mp4',
    title: 'Online Shopping',
    subtitle: 'Experimental • Art Direction',
  },
];

export default function MotionShowcase() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  // store orientation per video
  const [isVertical, setIsVertical] = useState<Record<number, boolean>>({});

  const handleMetadata = (
    index: number,
    e: React.SyntheticEvent<HTMLVideoElement>
  ) => {
    const video = e.currentTarget;
    setIsVertical((prev) => ({
      ...prev,
      [index]: video.videoHeight > video.videoWidth,
    }));
  };

  return (
    <section
      id="motion"
      className="relative section-padding bg-background overflow-hidden"
    >
      {/* Film grain */}
      <div className="pointer-events-none absolute inset-0 bg-[url('/images/grain.png')] opacity-[0.06] mix-blend-overlay" />

      {/* Ambient light */}
      <div className="absolute top-1/3 -left-32 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 -right-32 w-[400px] h-[400px] bg-white/5 rounded-full blur-3xl" />

      <div className="container-custom relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-24"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Motion Graphics</span>
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Curated motion visuals designed with cinematic composition and
            timeless aesthetics.
          </p>
        </motion.div>

        {/* Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {videos.map((video, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`relative ${
                index % 2 === 0 ? 'md:translate-y-14' : ''
              }`}
            >
              {/* FRAME */}
              <div className="group relative w-full aspect-[16/10] rounded-2xl overflow-hidden border border-white/10 bg-black shadow-[0_30px_80px_rgba(0,0,0,0.6)]">
                {/* Video */}
                <video
                  src={video.src}
                  autoPlay
                  loop
                  muted
                  volume={0}
                  playsInline
                  preload="metadata"
                  onLoadedMetadata={(e) => handleMetadata(index, e)}
                  className={`
                    absolute inset-0 w-full h-full
                    ${
                      isVertical[index]
                        ? 'object-contain scale-95'
                        : 'object-cover scale-105 group-hover:scale-110'
                    }
                    transition-transform duration-700 ease-out
                  `}
                />

                {/* Matte overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />

                {/* Caption */}
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <p className="text-[11px] uppercase tracking-[0.25em] text-white/60 mb-2">
                    {video.subtitle}
                  </p>
                  <h3 className="text-2xl font-bold text-white leading-tight">
                    {video.title}
                  </h3>

                  {/* Placeholder */}
                  <p className="text-sm text-white/60 mt-3 italic max-w-md">
                    {/* Description goes here */}
                  </p>
                </div>

                {/* Vintage corners */}
                <span className="absolute top-3 left-3 w-3 h-3 border-t border-l border-white/30" />
                <span className="absolute top-3 right-3 w-3 h-3 border-t border-r border-white/30" />
                <span className="absolute bottom-3 left-3 w-3 h-3 border-b border-l border-white/30" />
                <span className="absolute bottom-3 right-3 w-3 h-3 border-b border-r border-white/30" />
              </div>

              {/* Label */}
              <div className="absolute -top-4 -left-4 bg-white text-black text-[10px] font-bold px-4 py-1.5 rounded-full tracking-widest shadow-lg">
                MOTION
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
