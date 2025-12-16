'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { HiAcademicCap } from 'react-icons/hi';

const education = [
  {
    period: 'Aug 2020 — Oct 2022',
    degree: "Master's degree in Modeling Simulation And Data Analysis",
    institution: 'University Mohammed VI Polytechnic (UM6P)',
    location: 'Benguerir',
  },
  {
    period: '2016 — 2017',
    degree: 'University Diploma (DU) in Information and Communication Technology',
    institution: 'University Moulay Ismail (UMI)',
    location: 'Meknès',
  },
  {
    period: '2012 — 2015',
    degree: 'Fundamental Bachelor degree in Computer Engineering',
    institution: 'University Moulay Ismail (UMI)',
    location: 'Meknès',
  },
];

const certificates = [
  {
    period: '2025',
    title: 'Adobe Certified Professional – After Effects',
    issuer: 'Adobe / Certiport',
    description: 'Official industry certification validating visual effects & motion graphics skills using After Effects.',
  },
  {
    period: '2024',
    title: 'Adobe After Effects Motion Design Certificate',
    issuer: 'Online Motion Graphics Training',
    description: 'Certificate of completion demonstrating motion graphics and animation fundamentals, keyframing, effects, and visual storytelling.',
  },
  {
    period: '2023',
    title: 'Motion Graphics Certification Program',
    issuer: 'GraduateSchool.edu',
    description: 'Project-based motion graphics and visual effects training with Adobe After Effects & Premiere Pro, focusing on real-world workflows.',
  },
];

export default function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="education" className="section-padding bg-background relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 left-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl opacity-40 -translate-x-1/2" />

      <div className="container-custom relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Education & Certifications</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-white to-muted mx-auto rounded-full" />
        </motion.div>

        {/* Degrees */}
        <div className="grid md:grid-cols-3 max-w-6xl mx-auto" style={{ gap: '2.5rem' }}>
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="h-full glass-card flex flex-col hover:scale-[1.02] transition-all duration-300 p-8">
                <div className="w-16 h-16 flex items-center justify-center rounded-xl bg-white/10 text-white mb-6">
                  <HiAcademicCap className="text-3xl" />
                </div>

                <span className="inline-block bg-white/5 border border-white/20 rounded-full text-sm font-semibold text-white/80 w-fit px-5 py-2 mb-4">
                  {edu.period}
                </span>

                <h3 className="text-lg font-bold text-foreground mb-4">
                  {edu.degree}
                </h3>

                <div className="border-t border-border pt-4">
                  <p className="text-base font-semibold text-foreground mb-1">{edu.institution}</p>
                  <p className="text-sm text-muted">{edu.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certificates */}
        <div className="mt-20 max-w-4xl mx-auto">
          {certificates.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="glass-card p-6 mb-8 hover:scale-[1.02] transition-all duration-300"
            >
              <div className="flex justify-between items-center mb-3">
                <span className="text-sm text-white/60">{cert.period}</span>
                <span className="text-sm font-semibold text-muted">{cert.issuer}</span>
              </div>
              <h4 className="text-xl font-bold text-foreground mb-2">
                {cert.title}
              </h4>
              <p className="text-sm text-muted leading-relaxed">
                {cert.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
