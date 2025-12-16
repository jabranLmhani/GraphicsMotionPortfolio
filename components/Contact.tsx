'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const contactInfo = [
    { icon: HiMail, label: 'Email', value: 'jabran.lmhani@um6p.ma', href: 'mailto:jabran.lmhani@um6p.ma' },
    { icon: HiPhone, label: 'Phone', value: '+212 661 570080', href: 'tel:+212661570080' },
    { icon: HiLocationMarker, label: 'Location', value: 'Rabat, Morocco', href: null },
  ];

  return (
    <section id="contact" className="section-padding bg-background-secondary relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background-secondary to-background" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl opacity-40" />

      <div className="container-custom relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Let's Work Together</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-white to-muted mx-auto rounded-full mb-8" />
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how I can help bring your ideas to life.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <form onSubmit={handleSubmit} className="glass-card" style={{ padding: '2.5rem' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-foreground" style={{ marginBottom: '0.75rem' }}>Name</label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-background border border-border rounded-xl text-foreground focus:outline-none focus:border-white/50 transition-colors placeholder:text-muted-dark"
                    style={{ padding: '1rem 1.25rem' }}
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-foreground" style={{ marginBottom: '0.75rem' }}>Email</label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-background border border-border rounded-xl text-foreground focus:outline-none focus:border-white/50 transition-colors placeholder:text-muted-dark"
                    style={{ padding: '1rem 1.25rem' }}
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-foreground" style={{ marginBottom: '0.75rem' }}>Message</label>
                  <textarea
                    id="message"
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={6}
                    className="w-full bg-background border border-border rounded-xl text-foreground focus:outline-none focus:border-white/50 transition-colors resize-none placeholder:text-muted-dark"
                    style={{ padding: '1rem 1.25rem' }}
                    placeholder="Tell me about your project..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{ marginTop: '0.5rem' }}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </div>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}
          >
            {/* Contact Information */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <div key={index}>
                    {info.href ? (
                      <a href={info.href} className="glass-card block hover:scale-[1.02] transition-all duration-300" style={{ padding: '1.5rem' }}>
                        <div className="flex items-center" style={{ gap: '1.25rem' }}>
                          <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-white/10 text-white">
                            <Icon className="text-2xl" />
                          </div>
                          <div>
                            <p className="text-sm text-muted" style={{ marginBottom: '0.375rem' }}>{info.label}</p>
                            <p className="text-base font-semibold text-foreground">{info.value}</p>
                          </div>
                        </div>
                      </a>
                    ) : (
                      <div className="glass-card" style={{ padding: '1.5rem' }}>
                        <div className="flex items-center" style={{ gap: '1.25rem' }}>
                          <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-white/10 text-white">
                            <Icon className="text-2xl" />
                          </div>
                          <div>
                            <p className="text-sm text-muted" style={{ marginBottom: '0.375rem' }}>{info.label}</p>
                            <p className="text-base font-semibold text-foreground">{info.value}</p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Social Links */}
            <div className="glass-card" style={{ padding: '2rem' }}>
              <h3 className="text-xl font-bold text-foreground" style={{ marginBottom: '1.5rem' }}>Connect With Me</h3>
              <div className="flex" style={{ gap: '1.25rem' }}>
                <a
                  href="https://www.linkedin.com/in/jabran-lmhani-6b3a821a2/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 glass-card flex flex-col items-center group hover:scale-105 transition-all duration-300"
                  style={{ padding: '1.5rem', gap: '1rem' }}
                >
                  <FaLinkedin className="text-4xl text-white group-hover:text-white/70 transition-colors" />
                  <span className="text-sm font-semibold text-foreground">LinkedIn</span>
                </a>
                <a
                  href="https://github.com/jabranLmhani"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 glass-card flex flex-col items-center group hover:scale-105 transition-all duration-300"
                  style={{ padding: '1.5rem', gap: '1rem' }}
                >
                  <FaGithub className="text-4xl text-white group-hover:text-white/70 transition-colors" />
                  <span className="text-sm font-semibold text-foreground">GitHub</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

