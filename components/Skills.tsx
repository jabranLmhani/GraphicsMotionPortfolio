'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  SiAdobeaftereffects,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiAdobepremierepro,
  SiAdobexd,
  SiBlender,
  SiFigma,
  SiCinema4D,
} from 'react-icons/si';
import { FaFilm, FaPenNib, FaLayerGroup, FaUsers, FaBullhorn } from 'react-icons/fa';

const skillCategories = [
  {
    title: 'Motion Graphics & Animation',
    skills: [
      { name: 'After Effects', icon: SiAdobeaftereffects },
      { name: 'Motion Design', icon: FaFilm },
      { name: 'Kinetic Typography', icon: FaPenNib },
      { name: '2D Animation', icon: FaFilm },
      { name: 'Visual Effects (VFX)', icon: FaLayerGroup },
    ],
  },
  {
    title: 'Video Editing & Post-Production',
    skills: [
      { name: 'Premiere Pro', icon: SiAdobepremierepro },
      { name: 'Color Correction', icon: FaLayerGroup },
      { name: 'Sound Sync (No Audio Mix)', icon: FaFilm },
      { name: 'Final Cut Workflow', icon: FaFilm },
    ],
  },
  {
    title: 'Graphic Design & Visual Identity',
    skills: [
      { name: 'Photoshop', icon: SiAdobephotoshop },
      { name: 'Illustrator', icon: SiAdobeillustrator },
      { name: 'Brand Systems', icon: FaLayerGroup },
      { name: 'Social Media Visuals', icon: FaBullhorn },
    ],
  },
  {
    title: '3D & Advanced Visuals',
    skills: [
      { name: 'Blender', icon: SiBlender },
      { name: 'Cinema 4D', icon: SiCinema4D },
      { name: '3D Motion', icon: FaFilm },
      { name: 'Lighting & Rendering', icon: FaLayerGroup },
    ],
  },
  {
    title: 'Creative Direction & Team Leadership',
    skills: [
      { name: 'Storyboarding', icon: FaPenNib },
      { name: 'Art Direction', icon: FaLayerGroup },
      { name: 'Client Communication', icon: FaUsers },
      { name: 'Team Leadership', icon: FaUsers },
      { name: 'Creative Strategy', icon: FaBullhorn },
    ],
  },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="skills"
      className="section-padding bg-background-secondary relative overflow-hidden"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background-secondary to-background" />

      <div className="container-custom relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Skills & Expertise</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-white to-muted mx-auto rounded-full mb-8" />
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Tools, techniques, and creative leadership behind impactful motion visuals
          </p>
        </motion.div>

        {/* Skills */}
        <div className="flex flex-col gap-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
            >
              <h3 className="text-2xl font-bold text-foreground mb-8">
                {category.title}
              </h3>

              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
                {category.skills.map((skill, skillIndex) => {
                  const Icon = skill.icon;
                  return (
                    <motion.div
                      key={skillIndex}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{
                        duration: 0.5,
                        delay: categoryIndex * 0.1 + skillIndex * 0.05,
                      }}
                      className="group"
                    >
                      <div className="glass-card flex flex-col items-center p-6 hover:scale-105 transition-all duration-300">
                        <Icon className="text-3xl text-muted group-hover:text-white transition-colors mb-4" />
                        <p className="text-sm font-semibold text-foreground text-center">
                          {skill.name}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
