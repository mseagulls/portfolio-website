'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { AnimatedElement } from '@/components/AnimatedElement';

interface CoreValue {
  icon: string;
  title: string;
  subtitle: string;
  militaryParallel: string;
  softwareParallel: string;
  badge: string;
}

const VALUES: CoreValue[] = [
  {
    icon: '🎯',
    title: '100% Mission Execution',
    subtitle: 'Zero-Downtime Mentality & High Reliability',
    militaryParallel:
      'Completed 100% of military missions with zero compromise on squad safety or operational standards.',
    softwareParallel:
      'Writing clean, testable code with robust error handling, defensive programming, and seamless CI/CD delivery.',
    badge: 'Precision',
  },
  {
    icon: '🛡️',
    title: 'High-Stakes Equipment & Resource Oversight',
    subtitle: 'Managing $10M+ Capital & System Architecture',
    militaryParallel:
      'Managed and maintained over $10 million in tactical military hardware and armored vehicle systems.',
    softwareParallel:
      'Architecting scalable cloud infrastructure, optimizing database queries, and minimizing resource overhead.',
    badge: 'Accountability',
  },
  {
    icon: '⚡',
    title: 'Calm Technical Problem-Solving',
    subtitle: '24+ Hour Shifts & High-Pressure Incident Response',
    militaryParallel:
      'Maintained absolute focus and tactical composure during continuous 24+ hour operations and critical emergencies.',
    softwareParallel:
      'Rapid debugging, root-cause analysis during production downtime, and persistent troubleshooting under tight deadlines.',
    badge: 'Resilience',
  },
  {
    icon: '⚔️',
    title: 'Squad Leadership & Strategic Mentorship',
    subtitle: 'Leading 5-10 Member Cross-Functional Teams',
    militaryParallel:
      'Led squads of 5-10 soldiers, conducting periodic evaluations, drills, and operational readiness planning.',
    softwareParallel:
      'Fostering collaborative team culture, code reviews, technical documentation, and cross-functional alignment.',
    badge: 'Leadership',
  },
];

export default function CoreValues() {
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
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      id='core-values'
      ref={ref}
      className='relative overflow-hidden px-4 py-20 text-white md:px-8 md:py-32'
    >
      <div className='absolute inset-0 -z-10'>
        <Image
          src='/images/background.jpg'
          alt='Abstract tech background'
          fill
          className='object-cover object-center opacity-50'
          priority={false}
        />
        <div className='absolute inset-0 bg-[#04052E]/80' />
        <div className='absolute top-0 left-0 h-full w-full bg-[radial-gradient(#0D00A4_1px,transparent_1px)] [background-size:24px_24px] opacity-20' />
        <div className='bg-brand-navy/30 absolute top-1/2 left-0 -z-10 h-[400px] w-[400px] rounded-full blur-[140px]' />
      </div>

      <div className='container mx-auto max-w-6xl'>
        <motion.div
          variants={containerVariants}
          initial='hidden'
          animate={isInView ? 'visible' : 'hidden'}
          className='space-y-16'
        >
          {/* Header */}
          <AnimatedElement
            isVisible={isInView}
            direction='up'
            className='space-y-4 text-center'
          >
            <span className='bg-brand-blue/20 text-brand-blue border-brand-blue/30 inline-block rounded-full border px-4 py-1.5 text-xs font-semibold tracking-widest uppercase'>
              MILITARY LEADERSHIP × SOFTWARE ENGINEERING
            </span>
            <h2 className='text-4xl font-bold text-white md:text-5xl'>
              Core Principles &{' '}
              <span className='text-brand-blue'>Engineering Mindset</span>
            </h2>
            <p className='mx-auto max-w-3xl text-base text-emerald-50/80 md:text-lg'>
              How 10+ years as a US Army Staff Sergeant and Bradley Commander
              translate into high-performing, resilient software development.
            </p>
            <div className='from-brand-blue to-brand-navy mx-auto h-1 w-20 rounded-full bg-gradient-to-r' />
          </AnimatedElement>

          {/* Cards Grid */}
          <motion.div
            variants={containerVariants}
            className='grid grid-cols-1 gap-8 md:grid-cols-2'
          >
            {VALUES.map((val, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className='group hover:border-brand-blue/60 hover:shadow-brand-blue/20 relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-md transition-all duration-300 hover:shadow-2xl'
              >
                {/* Header Icon + Badge */}
                <div className='flex items-center justify-between border-b border-white/10 pb-6'>
                  <div className='flex items-center gap-4'>
                    <div className='bg-brand-blue/20 border-brand-blue/30 group-hover:bg-brand-blue flex h-12 w-12 items-center justify-center rounded-xl border text-2xl transition-colors duration-300'>
                      {val.icon}
                    </div>
                    <div>
                      <h3 className='group-hover:text-brand-blue text-xl font-bold text-white transition-colors'>
                        {val.title}
                      </h3>
                      <p className='text-brand-blue text-xs font-medium'>
                        {val.subtitle}
                      </p>
                    </div>
                  </div>
                  <span className='rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-200'>
                    {val.badge}
                  </span>
                </div>

                {/* Content Comparison */}
                <div className='mt-6 space-y-4'>
                  <div className='space-y-1 rounded-lg border border-white/5 bg-black/40 p-4'>
                    <span className='text-brand-blue text-[10px] font-bold tracking-wider uppercase'>
                      🎖️ Military Standard
                    </span>
                    <p className='text-xs leading-relaxed text-emerald-50/80'>
                      {val.militaryParallel}
                    </p>
                  </div>

                  <div className='bg-brand-blue/10 border-brand-blue/20 space-y-1 rounded-lg border p-4'>
                    <span className='text-[10px] font-bold tracking-wider text-emerald-300 uppercase'>
                      💻 Software Application
                    </span>
                    <p className='text-xs leading-relaxed text-emerald-100/90'>
                      {val.softwareParallel}
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
