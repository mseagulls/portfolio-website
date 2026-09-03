'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { AnimatedElement, ScrollText } from '@/components/AnimatedElement';
import ExperienceGif from '@/assets/ExperienceGif.gif';

const EXPERIENCES = [
  {
    role: 'Bradley Commander',
    company: 'U.S. Army',
    period: 'March 2025 – August 2026',
    duration: '~1.5 years',
    highlights: [
      'Led a section comprising two squads, each consisting of 5-10 soldiers',
      'Developed successful military engagement strategies in collaboration with other commanders',
      'Ensured compliance with safety regulations throughout all training exercises and missions',
      'Maintained composure while managing injuries and emergencies',
      'Operated effectively during work shifts exceeding 24 hours',
      'Supervised loading and unloading of armored vehicles for site relocation',
      'Handled operation of tanks and armored vehicles across diverse field conditions',
    ],
    type: 'Military',
  },
  {
    role: 'Cavalry Scout / Squad Leader',
    company: 'U.S. Army',
    period: 'May 2017 – March 2025',
    duration: '7+ years',
    highlights: [
      'Led teams of 3-5 soldiers for 5+ years with 100% mission completion rate',
      'Directed squads of 5-10 soldiers as squad leader over 2 years',
      'Supervised maintenance and accountability of equipment valued at $10+ million',
      'Executed work shifts exceeding 24 hours with precision and focus',
      'Assessed team readiness through periodic skill evaluations and drills',
      'Maintained accurate records of personnel actions and performance metrics',
      'Ensured workplace cleanliness and safety protocols across all operations',
      'Operated tracked and wheeled vehicles across varied terrain',
    ],
    type: 'Military',
  },
];

export default function Experience() {
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section
      id='experience'
      ref={ref}
      className='relative overflow-hidden px-4 py-20 text-white md:px-8 md:py-32'
    >
      <div className='absolute inset-0 -z-10'>
        <Image
          src='/images/background.jpg'
          alt='Web development background'
          fill
          className='object-cover object-center opacity-100'
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
            <div className='flex items-center justify-center gap-2 sm:gap-3'>
              <Image
                src={ExperienceGif}
                alt='Animated professional experience symbol'
                width={56}
                height={56}
                className='h-11 w-11 shrink-0 object-contain md:h-14 md:w-14'
              />
              <h2 className='text-brand-blue text-2xl font-bold sm:text-4xl md:text-5xl'>
                Professional Experience
              </h2>
              <Image
                src={ExperienceGif}
                alt='Animated professional experience symbol'
                width={56}
                height={56}
                className='h-11 w-11 shrink-0 object-contain md:h-14 md:w-14'
              />
            </div>
            <div className='from-brand-blue to-brand-navy mx-auto h-1 w-20 bg-gradient-to-r'></div>
          </AnimatedElement>

          {/* Timeline */}
          <motion.div
            variants={containerVariants}
            initial='hidden'
            animate={isInView ? 'visible' : 'hidden'}
            className='space-y-8'
          >
            {EXPERIENCES.map((exp, index) => (
              <motion.div
                key={`${exp.role}-${index}`}
                variants={itemVariants}
                className='relative'
              >
                {/* Timeline line */}
                {index < EXPERIENCES.length - 1 && (
                  <div className='from-brand-blue absolute top-24 left-0 h-32 w-1 bg-gradient-to-b to-transparent md:left-1/2 md:-translate-x-1/2 md:transform'></div>
                )}

                {/* Timeline dot and content */}
                <div className='flex gap-6 md:gap-0'>
                  {/* Dot */}
                  <div className='relative flex-shrink-0'>
                    <motion.div
                      className='bg-brand-blue border-brand-black mt-6 h-4 w-4 rounded-full border-4'
                      whileHover={{ scale: 1.5 }}
                      whileTap={{ scale: 0.95 }}
                    ></motion.div>
                  </div>

                  {/* Content */}
                  <div
                    className={`flex-1 md:w-1/2 ${index % 2 === 1 ? 'md:ml-auto md:pl-12' : 'md:pr-12'}`}
                  >
                    <motion.div
                      whileHover={{ x: index % 2 === 0 ? 10 : -10 }}
                      className='bg-brand-prussian/40 border-brand-blue/20 hover:border-brand-blue/60 rounded-lg border p-6 transition-all duration-300'
                    >
                      {/* Header */}
                      <div className='mb-4 space-y-2'>
                        <div className='flex flex-col gap-2 md:flex-row md:items-center md:justify-between'>
                          <h3 className='text-xl font-bold text-white'>
                            {exp.role}
                          </h3>
                          <span className='bg-brand-blue/20 text-brand-blue inline-block w-fit rounded-full px-3 py-1 text-xs font-semibold'>
                            {exp.type}
                          </span>
                        </div>
                        <p className='text-brand-blue font-semibold'>
                          {exp.company}
                        </p>
                      </div>

                      {/* Timeline info */}
                      <div className='mb-4 flex flex-col gap-2 text-sm text-gray-400 md:flex-row md:gap-4'>
                        <span>{exp.period}</span>
                        <span className='hidden md:inline'>•</span>
                        <span>{exp.duration}</span>
                      </div>

                      {/* Description */}
                      <div className='space-y-3'>
                        <p className='text-indigo-100/90'>
                          Key accomplishments and responsibilities:
                        </p>
                        <ul className='space-y-2'>
                          {exp.highlights.map((highlight, hIndex) => (
                            <motion.li
                              key={hIndex}
                              initial={{ opacity: 0, x: -10 }}
                              animate={
                                isInView
                                  ? { opacity: 1, x: 0 }
                                  : { opacity: 0, x: -10 }
                              }
                              transition={{
                                delay: hIndex * 0.05,
                                duration: 0.4,
                              }}
                              className='flex items-start gap-3 text-violet-200/80'
                            >
                              <span className='text-brand-blue mt-1 font-bold'>
                                ✓
                              </span>
                              <span>{highlight}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Stats Section */}
          <AnimatedElement
            isVisible={isInView}
            direction='up'
            className='mt-16 border-t border-gray-700 pt-8'
          >
            <h3 className='text-brand-blue mb-8 text-center text-2xl font-bold'>
              By The Numbers
            </h3>
            <motion.div
              variants={containerVariants}
              initial='hidden'
              animate={isInView ? 'visible' : 'hidden'}
              className='grid grid-cols-1 gap-6 md:grid-cols-4'
            >
              {[
                { number: '10+', label: 'Years Military Service' },
                { number: '10+', label: 'Soldiers Directly Led' },
                { number: '$10M+', label: 'Equipment Managed' },
                { number: '100%', label: 'Mission Success Rate' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  variants={itemVariants}
                  className='bg-brand-prussian/40 border-brand-blue/20 rounded-lg border p-6 text-center'
                >
                  <p className='text-brand-blue mb-2 text-3xl font-bold md:text-4xl'>
                    {stat.number}
                  </p>
                  <p className='text-violet-200/80'>{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </AnimatedElement>
        </motion.div>
      </div>
    </section>
  );
}
