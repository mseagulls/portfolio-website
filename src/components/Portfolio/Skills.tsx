'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { AnimatedElement } from '@/components/AnimatedElement';
import SpaceGif from '@/assets/SpaceGif.gif';

const TECHNICAL_SKILLS = [
  { name: 'JavaScript', level: 90, category: 'Frontend' },
  { name: 'React', level: 85, category: 'Frontend' },
  { name: 'TypeScript', level: 80, category: 'Frontend' },
  { name: 'Next.js', level: 85, category: 'Frontend' },
  { name: 'Tailwind CSS', level: 90, category: 'Frontend' },
  { name: 'HTML/CSS', level: 95, category: 'Frontend' },
  { name: 'Node.js', level: 80, category: 'Backend' },
  { name: 'APIs & REST', level: 85, category: 'Backend' },
  { name: 'Database Design', level: 75, category: 'Backend' },
  { name: 'Git & Version Control', level: 85, category: 'Tools' },
  { name: 'Responsive Design', level: 90, category: 'Frontend' },
  { name: 'Web Performance', level: 80, category: 'Tools' },
];

const MILITARY_SKILLS = [
  'Situational Awareness',
  'Operational Planning',
  'Leadership & Team Management',
  'Emergency Response',
  'Safety Compliance',
  'Equipment Oversight',
  'Strategic Thinking',
  'Problem Solving',
  'Communication',
  'Risk Assessment',
];

export default function Skills() {
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

  const skillVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: (index: number) => ({
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        delay: index * 0.05,
      },
    }),
  };

  return (
    <section
      id='skills'
      ref={ref}
      className='relative overflow-hidden px-4 py-20 text-white md:px-8 md:py-32'
    >
      <div className='absolute inset-0 -z-10'>
        <Image
          src='/images/background.jpg'
          alt='Web development background'
          fill
          className='object-cover object-center opacity-60'
          priority={false}
        />
        <div className='absolute inset-0 bg-[#04052E]/80' />
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
            <div className='flex items-center justify-center gap-2 sm:gap-3'>
              <Image
                src={SpaceGif}
                alt='Animated space scene'
                width={72}
                height={72}
                className='h-11 w-11 shrink-0 object-contain md:h-14 md:w-14'
              />
              <h2 className='text-brand-blue text-2xl font-bold sm:text-4xl md:text-5xl'>
                Skills & Expertise
              </h2>
              <Image
                src={SpaceGif}
                alt='Animated space scene'
                width={72}
                height={72}
                className='h-11 w-11 shrink-0 object-contain md:h-14 md:w-14'
              />
            </div>
            <div className='from-brand-blue to-brand-navy mx-auto h-1 w-20 bg-gradient-to-r'></div>
          </AnimatedElement>

          {/* Technical Skills */}
          <motion.div variants={itemVariants} className='space-y-8'>
            <div>
              <h3 className='text-brand-blue mb-8 text-2xl font-bold'>
                Technical Skills
              </h3>

              <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
                {TECHNICAL_SKILLS.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    custom={index}
                    variants={skillVariants}
                    initial='hidden'
                    animate={isInView ? 'visible' : 'hidden'}
                    className='space-y-2'
                  >
                    <div className='flex items-center justify-between'>
                      <div>
                        <span className='font-semibold text-white'>
                          {skill.name}
                        </span>
                        <span className='ml-3 text-xs text-violet-200/80'>
                          {skill.category}
                        </span>
                      </div>
                      <span className='text-brand-blue font-bold'>
                        {skill.level}%
                      </span>
                    </div>

                    <div className='bg-brand-black/50 h-2 w-full overflow-hidden rounded-full'>
                      <motion.div
                        className='from-brand-blue to-brand-navy h-full rounded-full bg-gradient-to-r'
                        initial={{ width: 0 }}
                        animate={
                          isInView ? { width: `${skill.level}%` } : { width: 0 }
                        }
                        transition={{
                          duration: 1.5,
                          delay: index * 0.05,
                          ease: 'easeOut',
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Military Skills */}
          <motion.div variants={itemVariants} className='space-y-8'>
            <div className='border-t border-gray-700 pt-8'>
              <h3 className='text-brand-blue mb-8 text-2xl font-bold'>
                Military & Leadership Skills
              </h3>

              <motion.div
                variants={containerVariants}
                initial='hidden'
                animate={isInView ? 'visible' : 'hidden'}
                className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'
              >
                {MILITARY_SKILLS.map((skill, index) => (
                  <motion.div
                    key={skill}
                    custom={index}
                    variants={skillVariants}
                    className='bg-brand-twilight/40 border-brand-blue/20 hover:border-brand-blue/60 hover:bg-brand-twilight/60 group rounded-lg border p-4 transition-all duration-300'
                  >
                    <div className='flex items-center gap-3'>
                      <div className='bg-brand-blue h-2 w-2 rounded-full transition-all duration-300 group-hover:w-3'></div>
                      <span className='text-indigo-100/90 transition-colors duration-300 group-hover:text-white'>
                        {skill}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div variants={itemVariants} className='space-y-8'>
            <div className='border-t border-gray-700 pt-8'>
              <h3 className='text-brand-blue mb-8 text-2xl font-bold'>
                Certifications
              </h3>

              <motion.div
                variants={containerVariants}
                initial='hidden'
                animate={isInView ? 'visible' : 'hidden'}
                className='grid grid-cols-1 gap-6 md:grid-cols-2'
              >
                {[
                  {
                    title: 'JavaScript Professional Developer',
                    issuer:
                      'Coalition of Information Technology Businesses (COITB)',
                    date: 'July 2026 – July 2029',
                  },
                  {
                    title: 'HTML-CSS Web Designer',
                    issuer:
                      'Coalition of Information Technology Businesses (COITB)',
                    date: 'June 2026 – June 2029',
                  },
                  {
                    title: "Driver's License",
                    issuer: 'State of Alaska',
                    date: 'April 2023 – April 2030',
                  },
                  {
                    title: 'Staff Sergeant',
                    issuer: 'United States Army',
                    date: 'Retired, August 2026',
                  },
                ].map((cert, index) => (
                  <motion.div
                    key={cert.title}
                    custom={index}
                    variants={skillVariants}
                    className='from-brand-twilight/50 to-brand-prussian/50 border-brand-blue/30 hover:border-brand-blue/60 rounded-lg border bg-gradient-to-br p-6 transition-all duration-300'
                  >
                    <div className='flex items-start gap-4'>
                      <div className='bg-brand-blue/20 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg'>
                        <svg
                          className='text-brand-blue h-6 w-6'
                          fill='currentColor'
                          viewBox='0 0 20 20'
                        >
                          <path d='M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5.951-1.429 5.951 1.429a1 1 0 001.169-1.409l-7-14z' />
                        </svg>
                      </div>
                      <div>
                        <h4 className='mb-1 font-semibold text-white'>
                          {cert.title}
                        </h4>
                        <p className='mb-2 text-sm text-violet-200/80'>
                          {cert.issuer}
                        </p>
                        <p className='text-brand-blue text-xs'>{cert.date}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
