'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { AnimatedElement } from '@/components/AnimatedElement';
import HighlightsGif from '@/assets/HighlightsGif.gif';

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'Full Stack' | 'AI & Tools' | 'Systems & Logistics' | 'Frontend';
  description: string;
  fullDescription: string;
  image: string;
  tags: string[];
  features: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

const PROJECTS: Project[] = [
  // Copy this object for each finished project and replace the placeholder values.
  // {
  //   id: 'my-project',
  //   title: 'My project title',
  //   subtitle: 'A short description of the product',
  //   category: 'Full Stack',
  //   description: 'What the project does and who it helps.',
  //   fullDescription: 'The problem, your approach, and the result.',
  //   image: '/images/projects/my-project.jpg',
  //   tags: ['React', 'Next.js', 'TypeScript'],
  //   features: ['Important feature', 'Technical highlight', 'Project outcome'],
  //   liveUrl: 'https://your-live-project.com',
  //   githubUrl: 'https://github.com/your-name/your-project',
  //   featured: true,
  // },
];

export default function Projects() {
  const { ref, isInView } = useScrollAnimation();
  const [expandedProjectId, setExpandedProjectId] = useState<string | null>(
    null,
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.14,
        delayChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 24, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.65 } as const,
    },
  };

  return (
    <section
      id='projects'
      ref={ref}
      className='relative overflow-hidden px-4 py-20 text-white md:px-8 md:py-32'
    >
      <div className='absolute inset-0 -z-10'>
        <Image
          src='/images/background.jpg'
          alt='Product showcase background'
          fill
          className='object-cover object-center opacity-50'
          priority={false}
        />
        <div className='absolute inset-0 bg-[#02010A]/80' />
        <div className='bg-brand-blue/15 absolute top-1/4 left-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 rounded-full blur-[120px]' />
        <div className='bg-brand-navy/20 absolute right-10 bottom-10 -z-10 h-[350px] w-[350px] rounded-full blur-[100px]' />
      </div>

      <div className='container mx-auto max-w-6xl'>
        <motion.div
          variants={containerVariants}
          initial='hidden'
          animate={isInView ? 'visible' : 'hidden'}
          className='space-y-12'
        >
          <AnimatedElement
            isVisible={isInView}
            direction='up'
            className='space-y-4 text-center'
          >
            <span className='bg-brand-blue/20 text-brand-blue border-brand-blue/30 inline-block rounded-full border px-4 py-1.5 text-xs font-semibold tracking-widest uppercase'>
              FEATURED WORK
            </span>
            <div className='flex items-center justify-center gap-2 sm:gap-3'>
              <Image
                src={HighlightsGif}
                alt='Animated project highlights display'
                width={56}
                height={56}
                className='h-11 w-11 shrink-0 object-contain md:h-14 md:w-14'
              />
              <h2 className='text-2xl font-bold text-white sm:text-4xl md:text-5xl'>
                Interactive{' '}
                <span className='text-emerald-400'>Project Highlights</span>
              </h2>
              <Image
                src={HighlightsGif}
                alt='Animated project highlights display'
                width={56}
                height={56}
                className='h-11 w-11 shrink-0 object-contain md:h-14 md:w-14'
              />
            </div>
            <p className='mx-auto max-w-2xl text-base text-emerald-50/80 md:text-lg'>
              Select a project to see the product thinking, technical focus, and
              outcomes behind the work.
            </p>
            <div className='from-brand-blue to-brand-navy mx-auto h-1 w-20 rounded-full bg-gradient-to-r' />
          </AnimatedElement>

          <motion.div
            variants={containerVariants}
            className='grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3'
          >
            {PROJECTS.length === 0 ? (
              <div className='border-brand-blue/30 bg-brand-blue/5 col-span-full border border-dashed px-6 py-12 text-center'>
                <p className='text-brand-blue text-lg font-semibold'>
                  Projects coming soon
                </p>
                <p className='mx-auto mt-2 max-w-md text-sm leading-relaxed text-emerald-50/70'>
                  Finished products will be available shortly
                </p>
              </div>
            ) : (
              PROJECTS.map((project) => (
                <motion.article
                  key={project.id}
                  variants={itemVariants}
                  role='button'
                  tabIndex={0}
                  aria-expanded={expandedProjectId === project.id}
                  aria-controls={`${project.id}-details`}
                  onClick={() =>
                    setExpandedProjectId((currentId) =>
                      currentId === project.id ? null : project.id,
                    )
                  }
                  onKeyDown={(event) => {
                    if (event.key === 'Enter' || event.key === ' ') {
                      event.preventDefault();
                      setExpandedProjectId((currentId) =>
                        currentId === project.id ? null : project.id,
                      );
                    }
                  }}
                  whileHover={{ y: -10, scale: 1.01, rotateX: 2, rotateY: -2 }}
                  transition={{ type: 'spring', stiffness: 180, damping: 18 }}
                  className='group relative cursor-pointer overflow-hidden rounded-[30px] border border-white/10 bg-slate-950/45 p-4 shadow-[0_20px_60px_rgba(2,1,10,0.45)] backdrop-blur-md'
                >
                  <div className='absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.23),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.22),transparent_30%)] opacity-80' />
                  <div className='relative space-y-4'>
                    <div className='relative overflow-hidden rounded-[22px] border border-white/10 bg-black/40'>
                      <motion.div
                        className='absolute inset-0 bg-gradient-to-br from-emerald-400/35 via-transparent to-blue-500/30'
                        animate={{ backgroundPosition: ['0% 0%', '100% 100%'] }}
                        transition={{
                          duration: 8,
                          repeat: Infinity,
                          ease: 'linear',
                        }}
                      />
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={900}
                        height={640}
                        className='h-52 w-full object-cover transition-transform duration-700 group-hover:scale-110'
                      />
                      <div className='absolute inset-0 bg-gradient-to-t from-[#02010A]/90 via-[#02010A]/20 to-transparent' />
                      <div className='absolute inset-x-4 bottom-4 flex items-center justify-between'>
                        <span className='rounded-full border border-emerald-300/30 bg-emerald-500/10 px-2.5 py-1 text-[10px] font-semibold tracking-[0.2em] text-emerald-200 uppercase'>
                          {project.category}
                        </span>
                      </div>
                    </div>

                    <div className='space-y-3 px-1 pb-1'>
                      <div className='flex items-start justify-between gap-3'>
                        <div>
                          <p className='text-[10px] font-semibold tracking-[0.2em] text-emerald-300 uppercase'>
                            {project.subtitle}
                          </p>
                          <h3 className='mt-2 text-2xl font-bold text-white'>
                            {project.title}
                          </h3>
                        </div>
                        <span className='mt-1 inline-flex h-9 w-9 items-center justify-center rounded-full border border-emerald-400/30 bg-emerald-500/10 text-base text-emerald-200'>
                          ↗
                        </span>
                      </div>

                      <p className='text-sm leading-relaxed text-emerald-50/80'>
                        {project.description}
                      </p>

                      <div className='flex flex-wrap gap-2'>
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className='rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] font-medium tracking-[0.12em] text-blue-100/80 uppercase'
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <ul className='space-y-2 text-sm text-emerald-50/80'>
                        {project.features.map((feature) => (
                          <li key={feature} className='flex items-start gap-2'>
                            <span className='mt-1 inline-block h-1.5 w-1.5 rounded-full bg-emerald-400' />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>

                      <div
                        aria-hidden='true'
                        className='text-brand-blue hover:text-purple-light flex w-full items-center justify-between border-t border-white/10 pt-4 text-left text-sm font-semibold transition-colors duration-300'
                      >
                        <span>
                          {expandedProjectId === project.id
                            ? 'Hide case study'
                            : 'View case study'}
                        </span>
                        <span
                          aria-hidden='true'
                          className={`text-lg transition-transform duration-300 ${expandedProjectId === project.id ? 'rotate-45' : ''}`}
                        >
                          +
                        </span>
                      </div>

                      {expandedProjectId === project.id && (
                        <motion.div
                          id={`${project.id}-details`}
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          transition={{ duration: 0.25 }}
                          className='border-brand-blue/60 border-l-2 pl-3 text-sm leading-relaxed text-emerald-50/80'
                        >
                          {project.fullDescription}
                        </motion.div>
                      )}
                    </div>
                  </div>
                </motion.article>
              ))
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
