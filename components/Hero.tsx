'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { FaLinkedin, FaVimeoV } from 'react-icons/fa';
import Image from 'next/image';
import { useRef } from 'react';

export default function Hero() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section
      ref={ref}
      id="home"
      className="relative h-screen bg-background overflow-hidden"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-background to-white/5" />

      {/* Floating Orbs */}
      <motion.div
        style={{ y }}
        className="absolute top-10 right-10 w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-white/10 rounded-full blur-3xl"
      />
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], ['0%', '30%']) }}
        className="absolute bottom-10 left-10 w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 bg-white/5 rounded-full blur-3xl"
      />

      <div className="container-custom relative z-10 h-full flex items-center pt-20 lg:pt-0">
        <motion.div
          style={{ opacity }}
          className="flex flex-col lg:grid lg:grid-cols-2 items-center w-full gap-10 lg:gap-14"
        >
          {/* LEFT – TEXT */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col text-center lg:text-left items-center lg:items-start"
          >
            {/* Label */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
            >
              <span
                className="inline-block bg-white/5 border border-white/20 rounded-full tracking-wider text-white/80 uppercase font-mono"
                style={{
                  padding: '0.625rem 1.25rem',
                  fontSize: '0.6rem',
                  letterSpacing: '0.12em',
                }}
              >
                Motion Graphics Portfolio
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-[1.05] font-bold mt-5"
            >
              <span className="text-foreground">Jabran</span>
              <br />
              <span className="gradient-text">Lmhani</span>
            </motion.h1>

            {/* Role */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="text-lg md:text-xl lg:text-2xl text-foreground-muted font-light mt-4"
            >
              Motion Graphics Designer • Visual Storytelling • Animation
            </motion.p>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
              className="text-base md:text-md text-muted leading-relaxed mt-4 max-w-lg"
            >
              I design visually striking motion graphics that bring ideas to life —
              blending rhythm, typography, and cinematic movement to create
              memorable visual experiences.
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55 }}
              className="flex flex-wrap justify-center lg:justify-start gap-4 mt-8"
            >
              <a
                href="#motion"
                className="inline-block bg-white text-black font-semibold rounded-full hover:bg-white/90 hover:scale-105 transition-all duration-300"
                style={{ padding: '0.875rem 1.75rem', fontSize: '0.95rem' }}
              >
                Watch My Work
              </a>

              <a
                href="#contact"
                className="inline-block border border-white/30 text-white font-semibold rounded-full hover:bg-white/10 hover:scale-105 transition-all duration-300"
                style={{ padding: '0.875rem 1.75rem', fontSize: '0.95rem' }}
              >
                Let’s Collaborate
              </a>
            </motion.div>

            {/* Socials */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.65 }}
              className="flex gap-3 mt-8"
            >
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center glass-card hover:scale-110 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="text-xl text-white" />
              </a>
            </motion.div>
          </motion.div>

          {/* RIGHT – PORTRAIT */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="hidden lg:flex justify-end"
          >
            <div className="relative lg:w-[24rem] lg:h-[34rem] xl:w-[28rem] xl:h-[38rem]">
              {/* Soft glow */}
              <div className="absolute inset-0 bg-white/10 blur-[120px] opacity-40" />

              {/* Masked Image */}
              <div
                className="
                  relative w-full h-full overflow-hidden
                  [mask-image:
                    radial-gradient(ellipse_at_center,black_50%,transparent_78%),
                    linear-gradient(to_top,transparent_0%,black_35%,black_100%)
                  ]
                  [-webkit-mask-image:
                    radial-gradient(ellipse_at_center,black_50%,transparent_78%),
                    linear-gradient(to_top,transparent_0%,black_35%,black_100%)
                  ]
                "
              >
                <Image
                  src="/images/profile/jabran.jpg"
                  alt="Jabran Lmhani"
                  fill
                  priority
                  className="object-cover scale-105 opacity-90 grayscale-[8%]"
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted hover:text-white transition-colors duration-300"
        >
          <span className="text-xs font-semibold uppercase tracking-widest">
            Scroll
          </span>
          <div className="w-6 h-9 border-2 border-current rounded-full flex items-start justify-center p-1.5">
            <motion.div
              className="w-1.5 h-1.5 bg-current rounded-full"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            />
          </div>
        </a>
      </motion.div>
    </section>
  );
}
