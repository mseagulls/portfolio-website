'use client';

import { motion, AnimatePresence } from 'framer-motion';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-md'>
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className='border-brand-blue/50 relative max-h-[90vh] w-full max-w-3xl space-y-6 overflow-y-auto rounded-2xl border bg-[#04052E] p-6 text-white shadow-2xl md:p-8'
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className='absolute top-4 right-4 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20'
          >
            ✕
          </button>

          {/* Header */}
          <div className='space-y-2 border-b border-white/10 pb-4'>
            <span className='bg-brand-blue/30 text-brand-blue inline-block rounded-full px-3 py-1 text-xs font-bold tracking-wider uppercase'>
              RESUME SUMMARY
            </span>
            <h3 className='text-3xl font-bold text-white'>Micah Peebles</h3>
            <p className='text-sm text-blue-200/80'>
              Full Stack Developer & US Army Veteran (Staff Sergeant)
            </p>
            <p className='text-xs text-violet-200/70'>
              Pueblo, CO 81005 | mdspeebs@hotmail.com | +1 (231) 675-3155
            </p>
          </div>

          {/* Summary */}
          <div className='space-y-3'>
            <h4 className='text-brand-blue text-xs font-bold tracking-wider uppercase'>
              Professional Summary
            </h4>
            <p className='text-sm leading-relaxed text-blue-200/90'>
              Full Stack Developer with 10 years of military
              experience. Certified in JavaScript and Web Design. Proven
              expertise leading squad operations, managing over $10M in
              high-value military equipment, and engineering responsive,
              scalable web applications with Next.js, React, TypeScript,
              Node.js, and Tailwind CSS.
            </p>
          </div>

          {/* Skills Grid */}
          <div className='space-y-3'>
            <h4 className='text-brand-blue text-xs font-bold tracking-wider uppercase'>
              Technical Competencies & Certifications
            </h4>
            <div className='grid grid-cols-1 gap-2 text-xs text-blue-200/90 md:grid-cols-2'>
              <div>
                <strong className='text-white'>Frontend:</strong> JavaScript
                (ES6+), React, Next.js, TypeScript, HTML5, CSS3, Tailwind CSS
              </div>
              <div>
                <strong className='text-white'>Backend:</strong> Node.js,
                Express, RESTful APIs, Database Design, Prisma ORM
              </div>
              <div>
                <strong className='text-white'>Tools & Methods:</strong> Git &
                GitHub, Responsive Web Design, Agile/Scrum, Web Vitals
              </div>
              <div>
                <strong className='text-white'>Certifications:</strong>{' '}
                Certified JavaScript Specialist, Web Design Certification
              </div>
            </div>
          </div>

          {/* Work Experience */}
          <div className='space-y-4'>
            <h4 className='text-brand-blue text-xs font-bold tracking-wider uppercase'>
              Military & Professional Experience
            </h4>
            <div className='space-y-3'>
              <div className='space-y-1 rounded-lg border border-white/5 bg-black/40 p-4'>
                <div className='flex justify-between text-xs font-bold text-white'>
                  <span>Bradley Commander — U.S. Army</span>
                  {/* <span className='text-brand-blue'>Mar 2025 – Aug 2026</span> */}
                </div>
                <ul className='list-inside list-disc space-y-1 pt-1 text-xs text-blue-200/80'>
                  <li>
                    Commanded armored vehicles and led section operations
                    comprising 2 squads (5-10 soldiers).
                  </li>
                  <li>
                    Executed 24+ hour continuous operations with zero safety
                    violations or equipment casualties.
                  </li>
                </ul>
              </div>

              <div className='space-y-1 rounded-lg border border-white/5 bg-black/40 p-4'>
                <div className='flex justify-between text-xs font-bold text-white'>
                  <span>Cavalry Scout — U.S. Army</span>
                  {/* <span className='text-brand-blue'>May 2017 – Mar 2025</span> */}
                </div>
                <ul className='list-inside list-disc space-y-1 pt-1 text-xs text-blue-200/80'>
                  <li>
                    Managed accountability and maintenance for $10M+ in tactical
                    equipment.
                  </li>
                  <li>
                    Led squad operations with a 100% mission completion rate and
                    periodic readiness evaluations.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Modal Actions */}
          <div className='flex items-center justify-between border-t border-white/10 pt-4'>
            <button
              onClick={onClose}
              className='rounded-lg px-4 py-2 text-xs font-medium text-violet-200/80 hover:text-white'
            >
              Close
            </button>
            <div className='flex gap-3'>
              <a
                href='mailto:mdspeebs@hotmail.com?subject=Micah%20Peebles%20Resume%20Inquiry'
                className='border-brand-blue/50 text-brand-blue hover:bg-brand-blue rounded-lg border px-4 py-2 text-xs font-semibold transition-colors hover:text-white'
              >
                Request Official PDF
              </a>
              <a
                href='mailto:mdspeebs@hotmail.com?subject=Interview%20Request%20-%20Micah%20Peebles'
                className='bg-brand-blue hover:bg-brand-navy rounded-lg px-5 py-2 text-xs font-semibold text-white transition-colors'
              >
                Schedule Interview
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
