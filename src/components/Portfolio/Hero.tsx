'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import ResumeModal from './ResumeModal';

export default function Hero() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
      },
    },
  };

  const techBadges = [
    'React',
    'Next.js',
    'TypeScript',
    'Node.js',
    'Tailwind CSS',
    'Prisma DB',
  ];

  return (
    <>
      <section className='relative min-h-screen w-full overflow-hidden pt-12 md:pt-0'>
        {/* Background Image */}
        <div className='absolute inset-0 z-0'>
          <Image
            src='/images/background.jpg'
            alt='Web Development Background'
            fill
            className='object-cover object-center'
            priority
            quality={90}
          />
          <div className='absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-[#0b0d0c]'></div>
        </div>

        {/* Content */}
        <div className='relative z-10 flex min-h-screen items-center justify-center px-4 py-20 md:px-8'>
          <motion.div
            className='container mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 md:grid-cols-12'
            variants={containerVariants}
            initial='hidden'
            animate='visible'
          >
            {/* Left Side - Text Content */}
            <motion.div
              className='space-y-6 text-white md:col-span-7'
              variants={itemVariants}
            >
              {/* Availability Status Badge */}
              <motion.div variants={itemVariants}>
                <span className='inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-950/40 px-4 py-1.5 text-xs font-semibold text-emerald-400 shadow-md backdrop-blur-md'>
                  <span className='h-2 w-2 animate-ping rounded-full bg-emerald-400' />
                  Available for Full-Time & Consulting Roles
                </span>
              </motion.div>

              <motion.div variants={itemVariants} className='space-y-2'>
                <motion.span
                  variants={itemVariants}
                  className='inline-block text-[10px] font-bold tracking-[0.22em] text-emerald-300 uppercase sm:text-xs md:text-sm'
                >
                  🌐 FULL STACK DEVELOPER ✮ US ARMY VETERAN 🪖
                </motion.span>
                <motion.h1
                  variants={itemVariants}
                  className='text-4xl leading-tight font-extrabold text-white sm:text-5xl md:text-6xl'
                >
                  Hi, I'm{' '}
                  <span className='text-emerald-400 drop-shadow-[0_0_25px_rgba(16,185,129,0.45)]'>
                    Micah Peebles
                  </span>
                </motion.h1>
              </motion.div>

              <motion.p
                variants={itemVariants}
                className='text-lg leading-relaxed font-medium text-emerald-100/90 md:text-xl'
              >
                I build fast, dependable web products for people with work to
                do.
              </motion.p>

              <motion.p
                variants={itemVariants}
                className='max-w-xl text-sm leading-relaxed text-emerald-50/85 md:text-base'
              >
                Full Stack Developer and former US Army Staff Sergeant. I bring
                ten years of operational leadership to thoughtful interfaces,
                resilient systems, and teams that need clarity under pressure.
              </motion.p>

              {/* Tech Stack Pills */}
              <motion.div
                variants={itemVariants}
                className='flex flex-wrap gap-2 pt-1'
              >
                {techBadges.map((tech) => (
                  <span
                    key={tech}
                    className='rounded-md border border-emerald-400/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-100/90'
                  >
                    {tech}
                  </span>
                ))}
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                variants={itemVariants}
                className='flex flex-col gap-4 pt-4 sm:flex-row'
              >
                <Link href='#projects'>
                  <motion.button
                    whileHover={{
                      scale: 1.05,
                      boxShadow: '0 0 30px rgba(184, 243, 107, 0.35)',
                    }}
                    whileTap={{ scale: 0.95 }}
                    className='bg-brand-blue hover:bg-purple-light text-brand-black w-full rounded-lg px-8 py-3.5 font-semibold shadow-lg transition-colors duration-300 sm:w-auto'
                  >
                    Explore Projects →
                  </motion.button>
                </Link>

                <button
                  onClick={() => setIsResumeOpen(true)}
                  className='border-brand-blue hover:bg-brand-blue/20 flex w-full items-center justify-center gap-2 rounded-lg border-2 px-6 py-3.5 font-semibold text-white transition-all duration-300 sm:w-auto'
                >
                  <svg
                    className='text-brand-blue h-4 w-4'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
                    />
                  </svg>
                  Quick Resume
                </button>

                <Link href='#contact'>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className='w-full rounded-lg border border-white/10 bg-white/5 px-6 py-3.5 font-medium text-blue-200 transition-all duration-300 hover:bg-white/10 hover:text-white sm:w-auto'
                  >
                    Get In Touch
                  </motion.button>
                </Link>
              </motion.div>

              {/* Stats */}
              <motion.div
                variants={itemVariants}
                className='grid max-w-xl grid-cols-3 gap-4 border-t border-white/10 pt-8'
              >
                <div>
                  <p className='text-2xl font-bold text-emerald-400 md:text-3xl'>
                    10+
                  </p>
                  <p className='text-xs font-medium text-emerald-50/80'>
                    Years Leadership
                  </p>
                </div>
                <div>
                  <p className='text-2xl font-bold text-emerald-400 md:text-3xl'>
                    $10M+
                  </p>
                  <p className='text-xs font-medium text-emerald-100/80'>
                    Assets Managed
                  </p>
                </div>
                <div>
                  <p className='text-2xl font-bold text-emerald-400 md:text-3xl'>
                    100%
                  </p>
                  <p className='text-xs font-medium text-emerald-50/80'>
                    Mission Execution
                  </p>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Side - Headshot */}
            <motion.div
              variants={itemVariants}
              className='relative flex justify-center md:col-span-5 md:justify-end'
            >
              <div className='relative'>
                <div className='absolute -inset-8 rounded-[3rem] bg-emerald-400/15 blur-3xl' />
                <div className='absolute -inset-3 rounded-[2.5rem] border border-emerald-300/30 bg-emerald-300/5 blur-2xl' />

                <motion.div
                  className='group relative h-[340px] w-[270px] overflow-hidden rounded-[2rem] border border-emerald-300/40 shadow-[0_0_35px_rgba(16,185,129,0.28),0_30px_80px_rgba(16,185,129,0.18)] transition-all duration-500 md:h-[500px] md:w-[390px]'
                  whileHover={{ scale: 1.04, rotate: -1, y: -6 }}
                  transition={{ type: 'spring', stiffness: 140, damping: 16 }}
                >
                  <div className='absolute inset-0 z-10 bg-gradient-to-br from-emerald-400/20 via-transparent to-black/25' />
                  <div className='absolute inset-[8%] z-10 rounded-[1.5rem] border border-emerald-200/20' />
                  <Image
                    src='/images/Corporate-Headshot.jpg'
                    alt='Micah Peebles - Full Stack Developer'
                    fill
                    className='object-cover object-center transition-transform duration-700 group-hover:scale-110'
                    quality={95}
                    sizes='(max-width: 768px) 270px, 390px'
                  />
                  <div className='absolute inset-0 z-10 bg-gradient-to-t from-black/80 via-transparent to-transparent' />

                  {/* Floating Badge overlay */}
                  <div className='absolute right-4 bottom-4 left-4 z-20 space-y-1 rounded-xl border border-white/10 bg-black/60 p-3 text-xs backdrop-blur-md'>
                    <div className='flex items-center gap-2 font-bold text-white'>
                      <span className='text-emerald-400'>🛡️</span> US Army Staff
                      Sergeant
                    </div>
                    <p className='text-[11px] text-emerald-50/80'>
                      Certified Web Developer & JavaScript Specialist
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className='absolute bottom-6 left-1/2 z-20 -translate-x-1/2 transform'
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className='flex flex-col items-center gap-1'>
            <span className='text-xs tracking-widest text-blue-200/60 uppercase'>
              Scroll to explore
            </span>
            <svg
              className='text-brand-blue h-5 w-5'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M19 14l-7 7m0 0l-7-7m7 7V3'
              />
            </svg>
          </div>
        </motion.div>
      </section>

      {/* Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </>
  );
}
