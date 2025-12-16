'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const experiences = [
  {
    period: 'Mar 2025 — Present',
    title: 'Lead Developer',
    company: 'Enterprise Activity Management System',
    location: 'Kenitra',
    description: 'Lead Developer of a comprehensive activity management platform ensuring continuity and efficiency of all employees. Designed and developed the full-stack solution, integrating task tracking, workflow automation, and reporting features using modern web technologies to optimize organizational performance.',
    tags: ['Full-Stack', 'Task Management', 'Workflow Automation'],
  },
  {
    period: 'Jan 2024 — Present',
    title: 'Lead Developer',
    company: 'VR Artillery Training Simulator',
    location: 'Rabat',
    description: 'Developed VRtillery, a state-of-the-art virtual reality simulator for artillery operations as part of a government defense initiative. Designed realistic 3D environments, interactive training modules, and immersive VR mechanics to enhance operational readiness and training efficiency.',
    tags: ['Unity', 'VR/XR', '3D Modeling', 'Defense'],
  },
  {
    period: 'Aug 2023 — Present',
    title: 'Co-Founder & Lead Developer',
    company: 'Morochem',
    location: 'Casablanca',
    description: 'Co-founded Morochem, a comprehensive platform for Moroccan medicinal plants featuring advanced molecular docking capabilities and drug discovery. Personally developed the website and all core features, leveraging modern web technologies to create a user-friendly, research-driven experience.',
    tags: ['Next.js', 'Bioinformatics', 'Drug Discovery', 'Full-Stack'],
  },
  {
    period: 'Jun 2023 — Jul 2023',
    title: 'Mobile Pothole Detection App',
    company: 'Freelance',
    location: 'Remote',
    description: 'Designed and implemented a mobile application for pothole detection using YOLO v4, enabling real-time identification and reporting of road hazards, while leveraging advanced computer vision techniques to improve urban infrastructure monitoring and safety.',
    tags: ['YOLO v4', 'Computer Vision', 'Mobile Development'],
  },
  {
    period: 'Mar 2022 — Aug 2023',
    title: 'Junior Consultant',
    company: 'Deloitte',
    location: 'Casablanca',
    description: 'Worked as a junior consultant at Deloitte supporting clients across various industries by analyzing business processes, delivering actionable insights, and assisting in implementing strategic solutions to improve efficiency and performance.',
    tags: ['Consulting', 'Business Analysis', 'Strategy'],
  },
  {
    period: 'May 2021 — Dec 2021',
    title: 'E-Learning Platform',
    company: 'Freelance',
    location: 'Remote',
    description: 'Developed and maintained a cutting-edge e-learning platform providing multi-language Cloud and Desktop IDEs, along with a suite of developer tools, leveraging modern web technologies to enhance productivity and user experience across diverse environments.',
    tags: ['THEIA', 'Cloud IDE', 'Education', 'Full-Stack'],
  },
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="experience" className="section-padding bg-background-secondary relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background-secondary to-background" />

      <div className="container-custom relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-white to-muted mx-auto rounded-full" />
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-5xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-white/50 via-muted/30 to-white/50" />

          {/* Experience Items */}
          <div className="flex flex-col gap-16">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-5 h-5 bg-white rounded-full border-4 border-background shadow-lg shadow-white/10 z-10" />

                {/* Content Card */}
                <div className={`ml-20 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:ml-auto md:pl-12' : 'md:pr-12'}`}>
                  <div className="glass-card p-8">
                    <span className="inline-block bg-white/5 border border-white/20 rounded-full text-sm font-semibold text-white/80 px-5 py-2.5 mb-4">{exp.period}</span>
                    <h3 className="text-xl font-bold text-foreground mt-3 mb-2">{exp.title}</h3>
                    <p className="text-base font-semibold text-white/70">{exp.company}</p>
                    <p className="text-sm text-muted mb-5">{exp.location}</p>
                    <p className="text-base text-muted leading-relaxed mb-6">{exp.description}</p>
                    <div className="flex flex-wrap gap-3">
                      {exp.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="bg-white/5 border border-white/10 rounded-lg text-white/70 text-xs font-semibold px-4 py-2"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

