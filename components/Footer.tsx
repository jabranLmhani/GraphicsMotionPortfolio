'use client';

import { FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border py-16">
      <div className="container-custom">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold gradient-text mb-3">
              Jabran Lmhani
            </h3>
            <p className="text-base text-muted">
              Motion Graphics Designer • Visual Storytelling • Animation
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold text-foreground uppercase tracking-wider mb-6">Quick Links</h4>
            <div className="flex flex-col gap-3">
              {['About', 'Experience', 'Projects', 'Skills', 'Education', 'Contact'].map((item, index) => (
                <a
                  key={index}
                  href={`#${item.toLowerCase()}`}
                  className="text-base text-muted hover:text-white transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-sm font-bold text-foreground uppercase tracking-wider mb-6">Connect</h4>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/in/jabran-lmhani"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center glass-card hover:scale-110 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="text-xl text-white" />
              </a>
              <a
                href="https://github.com/jabranLmhani"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center glass-card hover:scale-110 transition-all duration-300"
                aria-label="GitHub"
              >
                <FaGithub className="text-xl text-white" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-10 text-center">
          <p className="text-sm text-muted">
            © {currentYear} Jabran Lmhani. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

