'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { AnimatedElement, ScrollText } from '@/components/AnimatedElement';

export default function About() {
  const { ref, isInView } = useScrollAnimation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section
      id='about'
      ref={ref}
      className='relative overflow-hidden px-4 py-20 text-white md:px-8 md:py-32'
    >
      <div className='absolute inset-0 -z-10'>
        <Image
          src='/images/background.jpg'
          alt='Web development background'
          fill
          className='object-cover object-center opacity-80'
          priority={false}
        />
        <div className='absolute inset-0 bg-[#02010A]/80' />
      </div>

      <div className='container mx-auto max-w-5xl'>
        <motion.div
          variants={containerVariants}
          initial='hidden'
          animate={isInView ? 'visible' : 'hidden'}
          className='space-y-12'
        >
          {/* Section Header */}
          <AnimatedElement
            isVisible={isInView}
            direction='up'
            className='space-y-4 text-center'
          >
            <h2 className='text-brand-blue text-4xl font-bold md:text-5xl'>
              About Me
            </h2>
            <div className='from-brand-blue to-brand-navy mx-auto h-1 w-20 bg-gradient-to-r'></div>
          </AnimatedElement>

          {/* Main Content */}
          <motion.div variants={containerVariants} className='space-y-8'>
            {/* Journey */}
            <motion.div variants={itemVariants} className='space-y-6'>
              <ScrollText
                isVisible={isInView}
                delay={0}
                className='text-lg leading-relaxed text-blue-200/90'
              >
                <p className='text-blue-200/90'>
                  My journey is one of purpose, discipline, and continuous
                  growth. For 10+ years, I served as a Staff Sergeant in the
                  U.S. Army, where I led squads of 5-10 soldiers, managed
                  equipment valued at over $10 million, and developed critical
                  skills in operational planning, risk management, and
                  leadership.
                </p>
              </ScrollText>

              <ScrollText
                isVisible={isInView}
                delay={0.2}
                className='text-lg leading-relaxed text-indigo-100/90'
              >
                <p>
                  Whether as a Cavalry Scout or Bradley Commander, I learned
                  that excellence isn't optional—it's a requirement. That same
                  mindset drives my approach to web development. I'm
                  detail-oriented, committed to quality, and always pushing
                  myself to improve.
                </p>
              </ScrollText>

              <ScrollText
                isVisible={isInView}
                delay={0.4}
                className='text-lg leading-relaxed text-indigo-100/90'
              >
                <p>
                  Recently certified as a JavaScript Professional Developer and
                  HTML-CSS Web Designer, I'm now channeling my passion for
                  problem-solving into building dynamic, responsive web
                  applications. I bring military precision and leadership
                  experience to every project, treating code like operations—
                  strategic, intentional, and results-driven.
                </p>
              </ScrollText>
            </motion.div>

            {/* Core Values */}
            <AnimatedElement
              isVisible={isInView}
              direction='up'
              delay={0.6}
              className='mt-12 border-t border-gray-700 pt-12'
            >
              <h3 className='text-brand-blue mb-8 text-2xl font-bold'>
                My Core Values
              </h3>

              <motion.div
                variants={containerVariants}
                initial='hidden'
                animate={isInView ? 'visible' : 'hidden'}
                className='grid grid-cols-1 gap-6 md:grid-cols-2'
              >
                {[
                  {
                    title: 'Discipline',
                    description:
                      'Consistent effort and attention to detail in everything I do.',
                  },
                  {
                    title: 'Leadership',
                    description:
                      'Guiding teams and collaborators towards excellence.',
                  },
                  {
                    title: 'Innovation',
                    description:
                      'Seeking creative solutions to complex problems.',
                  },
                  {
                    title: 'Reliability',
                    description: 'Delivering quality work on time, every time.',
                  },
                ].map((value, index) => (
                  <motion.div
                    key={value.title}
                    variants={itemVariants}
                    className='bg-brand-prussian/40 border-brand-blue/20 hover:border-brand-blue/50 rounded-lg border p-6 transition-all duration-300'
                  >
                    <h4 className='text-brand-blue mb-2 text-lg font-semibold'>
                      {value.title}
                    </h4>
                    <p className='text-violet-200/80'>{value.description}</p>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatedElement>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
