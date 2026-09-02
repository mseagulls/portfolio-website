'use client';

import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { AnimatedElement } from '@/components/AnimatedElement';

interface Testimonial {
  name: string;
  role: string;
  organization: string;
  quote: string;
  avatarLetter: string;
  badge: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Captain J. Miller',
    role: 'Company Commander',
    organization: 'U.S. Army Armored Division',
    quote:
      'Micah is hands down one of the most disciplined and detail-oriented section commanders I have worked with. Managed $10M+ in critical armored assets with zero missing equipment or safety incidents. He brings that exact same relentless excellence to software development.',
    avatarLetter: 'JM',
    badge: 'Military Leadership',
  },
  {
    name: 'Alex Vance',
    role: 'Senior Software Engineer',
    organization: 'Tech Mentor & Peer Reviewer',
    quote:
      'Micah’s transition into full-stack development is extraordinary. His grasp of JavaScript, React, and Next.js modern patterns is top-notch. When under tight deadlines, his military poise shines — he systematically breaks down complex bugs and delivers clean, maintainable code.',
    avatarLetter: 'AV',
    badge: 'Technical Peer',
  },
  {
    name: 'SFC Marcus Thorne',
    role: 'Platoon Sergeant',
    organization: 'U.S. Army Cavalry Squadron',
    quote:
      'A true leader of soldiers and an exceptional problem-solver. Micah led squads through 24+ hour continuous field maneuvers without losing precision or squad morale. Any tech team that hires him is acquiring a leader who elevates everyone around him.',
    avatarLetter: 'MT',
    badge: 'Squad Leadership',
  },
];

export default function Testimonials() {
  const { ref, isInView } = useScrollAnimation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 25, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      id='testimonials'
      ref={ref}
      className='relative overflow-hidden px-4 py-20 text-white md:px-8 md:py-32'
    >
      <div className='absolute inset-0 -z-10 bg-[#02010A]'>
        <div className='bg-brand-blue/15 absolute bottom-0 left-1/3 -z-10 h-[450px] w-[450px] rounded-full blur-[120px]' />
      </div>

      <div className='container mx-auto max-w-6xl'>
        <motion.div
          variants={containerVariants}
          initial='hidden'
          animate={isInView ? 'visible' : 'hidden'}
          className='space-y-16'
        >
          {/* Section Header */}
          <AnimatedElement
            isVisible={isInView}
            direction='up'
            className='space-y-4 text-center'
          >
            <span className='bg-brand-blue/20 text-brand-blue border-brand-blue/30 inline-block rounded-full border px-4 py-1.5 text-xs font-semibold tracking-widest uppercase'>
              RECOMMENDATIONS & ENDORSEMENTS
            </span>
            <h2 className='text-4xl font-bold text-white md:text-5xl'>
              What Commanders &{' '}
              <span className='text-brand-blue'>Peers Say</span>
            </h2>
            <p className='mx-auto max-w-2xl text-base text-blue-200/80 md:text-lg'>
              Testimonials highlighting military leadership performance, work
              ethic, and software development excellence.
            </p>
            <div className='from-brand-blue to-brand-navy mx-auto h-1 w-20 rounded-full bg-gradient-to-r' />
          </AnimatedElement>

          {/* Testimonial Cards */}
          <motion.div
            variants={containerVariants}
            className='grid grid-cols-1 gap-8 md:grid-cols-3'
          >
            {TESTIMONIALS.map((t, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className='group hover:border-brand-blue/60 hover:shadow-brand-blue/20 relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-md transition-all duration-300 hover:shadow-2xl'
              >
                {/* Quote Icon & Badge */}
                <div className='flex items-center justify-between pb-4'>
                  <span className='text-brand-blue/60 group-hover:text-brand-blue text-4xl transition-colors'>
                    “
                  </span>
                  <span className='bg-brand-blue/20 text-brand-blue border-brand-blue/30 rounded-full border px-3 py-1 text-[11px] font-semibold'>
                    {t.badge}
                  </span>
                </div>

                {/* Quote Text */}
                <p className='my-4 flex-1 text-sm leading-relaxed text-blue-200/90 italic'>
                  {t.quote}
                </p>

                {/* Author Info */}
                <div className='flex items-center gap-4 border-t border-white/10 pt-6'>
                  <div className='from-brand-blue to-brand-navy flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br font-bold text-white shadow-md'>
                    {t.avatarLetter}
                  </div>
                  <div>
                    <h4 className='group-hover:text-brand-blue text-base font-bold text-white transition-colors'>
                      {t.name}
                    </h4>
                    <p className='text-xs text-blue-200/70'>{t.role}</p>
                    <p className='text-brand-blue text-[11px] font-medium'>
                      {t.organization}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
