'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { HiExternalLink } from 'react-icons/hi';
import Image from 'next/image';

const projects = [
  {
    title: 'Enterprise Activity Management System',
    description: 'Full-stack activity management platform ensuring continuity and efficiency. Integrates task tracking, workflow automation, and comprehensive reporting features.',
    tags: ['Full-Stack', 'Task Management', 'Automation', 'Analytics'],
    image: '/images/projects/enterprise-system.jpg',
  },
  {
    title: 'VRtillery - VR Artillery Training Simulator',
    description: 'State-of-the-art virtual reality simulator for artillery operations developed for a government defense initiative. Features realistic 3D environments, interactive training modules, and immersive VR mechanics.',
    tags: ['Unity', 'VR/XR', 'C#', '3D Modeling', 'Defense'],
    image: '/images/projects/vr-artillery.jpg',
  },
  {
    title: 'Morochem - Medicinal Plants Platform',
    description: 'Comprehensive platform for Moroccan medicinal plants featuring advanced molecular docking capabilities and drug discovery tools. Built with modern web technologies for research-driven experience.',
    tags: ['Next.js', 'React', 'Bioinformatics', 'Full-Stack'],
    image: '/images/projects/morochem.jpg',
  },
  {
    title: 'Mobile Pothole Detection App',
    description: 'Real-time pothole detection using YOLO v4 computer vision. Enables identification and reporting of road hazards to improve urban infrastructure monitoring and safety.',
    tags: ['YOLO v4', 'Computer Vision', 'Mobile', 'AI/ML'],
    image: '/images/projects/pothole-detection.jpg',
  },
  {
    title: 'E-Learning Platform with Cloud IDE',
    description: 'Cutting-edge e-learning platform providing multi-language Cloud and Desktop IDEs (THEIA), along with developer tools for enhanced productivity across diverse environments.',
    tags: ['THEIA', 'Cloud IDE', 'Education', 'TypeScript'],
    image: '/images/projects/elearning.jpg',
  },
  {
    title: 'Remote Weapon Control Interface',
    description: 'Designed and optimized a remote weapon-control interface using Arduino hardware and software for Royal Armed Forces. Enhanced signal stability and implemented real-time feedback features.',
    tags: ['Arduino', 'IoT', 'Embedded Systems', 'Defense'],
    image: '/images/projects/weapon-control.jpg',
  },
  {
    title: 'Sentiment Analysis for Moroccan Dialect',
    description: 'Comprehensive study on sentiment classification in Moroccan dialect, analyzing state-of-the-art methodologies and reviewing key works in Arabic sentiment analysis.',
    tags: ['NLP', 'Machine Learning', 'Python', 'Data Science'],
    image: '/images/projects/data-analysis.jpg',
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [imageErrors, setImageErrors] = useState<{[key: number]: boolean}>({});

  return (
    <section id="projects" className="section-padding bg-background relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-3xl opacity-50" />

      <div className="container-custom relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-white to-muted mx-auto rounded-full mb-8" />
          <p className="text-lg text-muted max-w-2xl mx-auto">
            A showcase of my work spanning VR development, full-stack applications, AI/ML, and more
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full glass-card overflow-hidden flex flex-col">
                {/* Project Image */}
                <div className="relative w-full aspect-video bg-gradient-to-br from-white/10 to-white/5 overflow-hidden">
                  {!imageErrors[index] ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      onError={() => setImageErrors(prev => ({...prev, [index]: true}))}
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-center p-8">
                      <div>
                        <p className="text-sm font-semibold text-foreground mb-3">Project Image</p>
                        <p className="text-xs text-muted mb-3">Place image at:</p>
                        <code className="text-xs bg-white/5 border border-white/20 px-3 py-1.5 rounded-lg text-white/70 font-mono block">
                          {project.image}
                        </code>
                      </div>
                    </div>
                  )}
                </div>

                {/* Project Content */}
                <div className="flex flex-col flex-grow p-7">
                  {/* Title */}
                  <h3 className="text-xl font-bold text-foreground group-hover:text-white/80 transition-colors mb-4">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-base text-muted leading-relaxed flex-grow mb-6">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-3">
                    {project.tags.map((tag, tagIndex) => (
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
    </section>
  );
}

