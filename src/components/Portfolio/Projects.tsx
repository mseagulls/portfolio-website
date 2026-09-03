'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { AnimatedElement } from '@/components/AnimatedElement';

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

const PROJECTS: Project[] = [];

export default function Projects() {
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
              PRODUCT SHOWCASE
            </span>
            <h2 className='text-4xl font-bold text-white md:text-5xl'>
              Featured <span className='text-emerald-400'>Products</span>
            </h2>
            <p className='mx-auto max-w-2xl text-base text-emerald-50/80 md:text-lg'>
              This section is ready for your own product updates. Add your
              featured items whenever you are ready.
            </p>
            <div className='from-brand-blue to-brand-navy mx-auto h-1 w-20 rounded-full bg-gradient-to-r' />
          </AnimatedElement>

          <motion.div
            variants={itemVariants}
            className='rounded-3xl border border-dashed border-white/15 bg-white/5 p-10 text-center backdrop-blur-sm md:p-16'
          >
            <div className='border-brand-blue/40 bg-brand-blue/10 mx-auto flex h-16 w-16 items-center justify-center rounded-full border text-3xl'>
              ✦
            </div>
            <h3 className='mt-6 text-2xl font-bold text-white'>
              No featured products yet
            </h3>
            <p className='mx-auto mt-4 max-w-xl text-base text-emerald-100/80'>
              Replace this placeholder with your own products, services, or
              digital offerings whenever you are ready.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
