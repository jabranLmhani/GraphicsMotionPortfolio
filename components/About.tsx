'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  HiLocationMarker,
  HiGlobeAlt,
  HiAcademicCap,
  HiBriefcase,
  HiColorSwatch,
  HiFilm,
  HiUsers
} from 'react-icons/hi';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  const stats = [
    { number: '7+', label: 'Years in Motion Design' },
    { number: '10+', label: 'Videos Delivered' },
    { number: '4+', label: 'Brands & Clients' },
    { number: '4+', label: 'Team Members Led' },
  ];

  const expertise = [
    {
      icon: HiFilm,
      title: 'Motion Graphics',
      desc: 'Explainers, ads, reels, promos',
    },
    {
      icon: HiColorSwatch,
      title: 'Graphic Design',
      desc: 'Branding, social media, visual identity',
    },
    {
      icon: HiUsers,
      title: 'Creative Direction',
      desc: 'Storyboarding, art direction, team leadership',
    },
  ];

  const details = [
    { icon: HiLocationMarker, text: 'Rabat, Morocco' },
    { icon: HiGlobeAlt, text: 'Arabic • English • French' },
    { icon: HiAcademicCap, text: 'Design & Visual Communication' },
    { icon: HiBriefcase, text: 'Freelance • Remote Ready' },
  ];

  return (
    <section id="about" className="section-padding bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent" />

      <div className="container-custom relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="gradient-text">About Me</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-2 glass-card p-8"
          >
            <h3 className="text-xl font-bold text-foreground mb-4">
              Motion Graphics Team Leader
            </h3>

            <p className="text-muted leading-relaxed mb-4">
              Creative and results-driven <strong className="text-white">Motion & Graphic Designer</strong> with over
              <strong className="text-white"> 7 years</strong> of experience producing high-impact visuals for brands,
              startups, and digital campaigns.
            </p>

            <p className="text-muted leading-relaxed">
              I lead a small creative team delivering <strong className="text-white">motion graphics, brand visuals,
              and marketing videos</strong> — from concept and storyboard to final animation.
              My focus is clear storytelling, strong visual identity, and content that converts.
            </p>

            {/* Details */}
            <div className="flex flex-wrap gap-4 mt-6 pt-6 border-t border-white/10">
              {details.map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-muted">
                  <item.icon className="text-white/60" />
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass-card p-8"
          >
            <h3 className="text-xl font-bold text-foreground mb-6">Experience</h3>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <div key={i} className="text-center p-3 rounded-xl bg-white/5">
                  <div className="text-2xl md:text-3xl font-bold text-white">
                    {stat.number}
                  </div>
                  <div className="text-xs text-muted mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Expertise */}
          {expertise.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
              className="glass-card p-6 group hover:bg-white/10 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-4 group-hover:bg-white group-hover:text-black transition-all duration-300">
                <item.icon className="text-2xl" />
              </div>
              <h4 className="text-lg font-bold text-foreground mb-2">
                {item.title}
              </h4>
              <p className="text-sm text-muted">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
