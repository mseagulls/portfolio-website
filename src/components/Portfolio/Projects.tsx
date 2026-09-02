'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
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

const PROJECTS: Project[] = [
  {
    id: 'ai-content-studio',
    title: 'AI Content Studio & Generator',
    subtitle: 'Next.js 14 AI-Powered Productivity Suite',
    category: 'AI & Tools',
    description:
      'A full-stack AI content generation platform featuring custom template engine, user authentication, and high-performance streaming AI responses.',
    fullDescription:
      'Built with Next.js 14, OpenAI API, Prisma, and Tailwind CSS. Provides automated article writing, social media generator, code refactoring tools, and custom prompt workflows with instant preview and copy options.',
    image: '/images/hero/hero-light.svg',
    tags: [
      'Next.js 14',
      'TypeScript',
      'OpenAI API',
      'Tailwind CSS',
      'Prisma',
      'NextAuth',
    ],
    features: [
      'Multi-template AI content generation with real-time streaming response',
      'Secure authentication with Prisma ORM & OAuth providers',
      'API Key management modal & token usage limits',
      'Export formatted content directly to Markdown or HTML',
      'Responsive dark theme optimized for developer productivity',
    ],
    liveUrl: '/ai-examples',
    githubUrl: 'https://github.com/mseagulls/portfolio-website',
    featured: true,
  },
  {
    id: 'tactical-logistics',
    title: 'Tactical Logistics & Asset Tracker',
    subtitle: 'Military-Grade Equipment Management System',
    category: 'Systems & Logistics',
    description:
      'Inspired by managing over $10M+ in US Army tracked equipment. Real-time inventory tracking, maintenance scheduling, and operational readiness metrics.',
    fullDescription:
      'Engineered to showcase tactical supply-chain and maintenance management concepts. Features interactive command dashboard, maintenance alert logs, asset readiness scoring, and squad access controls.',
    image: '/images/features/features-dark.svg',
    tags: [
      'React',
      'Next.js',
      'Node.js',
      'Tailwind CSS',
      'REST API',
      'Framer Motion',
    ],
    features: [
      'Real-time equipment readiness scoring and status categorization',
      'Preventative maintenance scheduling with automated alerts',
      'Role-based access control for section leaders and commanders',
      'Comprehensive audit log for equipment transfers and inspections',
      'Interactive data charts and exportable PDF readiness reports',
    ],
    liveUrl: '#',
    githubUrl: 'https://github.com/mseagulls',
    featured: true,
  },
  {
    id: 'command-hub-cli',
    title: 'Command Hub Developer CLI',
    subtitle: 'Interactive Retro Developer Terminal',
    category: 'AI & Tools',
    description:
      'In-browser developer terminal providing recruiters and engineers with an interactive command-line interface to inspect experience, skills, and resume data.',
    fullDescription:
      'Designed to give technical visitors a memorable recruitment experience. Supports realistic bash commands, custom auto-completion, tab completion, sound effects, and color themes.',
    image: '/images/about/about-dark.svg',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Web Audio API', 'CLI'],
    features: [
      'Realistic shell command parser with history navigation (Up/Down arrow keys)',
      'Custom commands: cat resume, skills, military, projects, clear, contact',
      'Interactive visual feedback and custom color theme toggling',
      'Responsive full-screen or embedded modal terminal window',
    ],
    liveUrl: '#terminal',
    githubUrl: 'https://github.com/mseagulls',
    featured: true,
  },
  {
    id: 'nexus-ecommerce',
    title: 'Nexus Full-Stack E-Commerce',
    subtitle: 'Modern Digital Storefront & Checkout',
    category: 'Full Stack',
    description:
      'A high-performance e-commerce architecture with instant product filtering, shopping cart persistence, Stripe payment flow, and responsive design.',
    fullDescription:
      'Full-stack shopping platform built with Next.js App Router, Tailwind CSS, and Stripe payments. Includes inventory management, customer order history, and light/dark visual styling.',
    image: '/images/cta/cta-dark.svg',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Stripe API', 'Zustand'],
    features: [
      'Instant faceted search and category filtering without full page reloads',
      'Persistent shopping cart with local state hydration',
      'Secure checkout integration with Stripe Payment Intents',
      'Optimized image loading and lighthouse score above 95',
    ],
    liveUrl: '#',
    githubUrl: 'https://github.com/mseagulls',
    featured: false,
  },
];

const CATEGORIES = [
  'All',
  'Full Stack',
  'AI & Tools',
  'Systems & Logistics',
] as const;

export default function Projects() {
  const { ref, isInView } = useScrollAnimation();
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects =
    activeCategory === 'All'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeCategory);

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
      {/* Background with Ambient Glow */}
      <div className='absolute inset-0 -z-10 bg-[#02010A]'>
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
          {/* Header */}
          <AnimatedElement
            isVisible={isInView}
            direction='up'
            className='space-y-4 text-center'
          >
            <span className='bg-brand-blue/20 text-brand-blue border-brand-blue/30 inline-block rounded-full border px-4 py-1.5 text-xs font-semibold tracking-widest uppercase'>
              PORTFOLIO SHOWCASE
            </span>
            <h2 className='text-4xl font-bold text-white md:text-5xl'>
              Featured <span className='text-brand-blue'>Projects</span>
            </h2>
            <p className='mx-auto max-w-2xl text-base text-blue-200/80 md:text-lg'>
              Explore software applications engineering scalable web solutions,
              AI integrations, and tactical system architectures.
            </p>
            <div className='from-brand-blue to-brand-navy mx-auto h-1 w-20 rounded-full bg-gradient-to-r' />
          </AnimatedElement>

          {/* Category Filter Tabs */}
          <motion.div
            variants={itemVariants}
            className='flex flex-wrap justify-center gap-3 pt-2'
          >
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`rounded-lg px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-brand-blue shadow-brand-blue/30 ring-brand-blue text-white shadow-lg ring-2'
                    : 'border border-white/10 bg-white/5 text-blue-200/70 hover:bg-white/10 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            variants={containerVariants}
            className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2'
          >
            <AnimatePresence mode='wait'>
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className='group hover:border-brand-blue/60 hover:shadow-brand-blue/20 relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md transition-all duration-500 hover:shadow-2xl'
                >
                  {/* Badge */}
                  <div className='absolute top-4 right-4 z-20 flex gap-2'>
                    <span className='text-brand-blue border-brand-blue/40 rounded-full border bg-black/60 px-3 py-1 text-xs font-semibold backdrop-blur-md'>
                      {project.category}
                    </span>
                  </div>

                  {/* Thumbnail / Visual Area */}
                  <div className='bg-brand-prussian relative h-52 w-full overflow-hidden'>
                    <div className='from-brand-black absolute inset-0 z-10 bg-gradient-to-t via-transparent to-transparent' />
                    <div className='flex h-full w-full items-center justify-center p-8 transition-transform duration-500 group-hover:scale-105'>
                      <div className='space-y-2 text-center'>
                        <div className='bg-brand-blue/20 text-brand-blue border-brand-blue/40 group-hover:bg-brand-blue mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border text-2xl transition-colors duration-300 group-hover:text-white'>
                          🚀
                        </div>
                        <h4 className='text-sm font-semibold tracking-wide text-violet-200/90'>
                          {project.subtitle}
                        </h4>
                      </div>
                    </div>
                  </div>

                  {/* Content Area */}
                  <div className='flex flex-1 flex-col justify-between space-y-6 p-6'>
                    <div className='space-y-3'>
                      <h3 className='group-hover:text-brand-blue text-2xl font-bold text-white transition-colors duration-300'>
                        {project.title}
                      </h3>
                      <p className='text-sm leading-relaxed text-blue-200/80'>
                        {project.description}
                      </p>
                    </div>

                    {/* Tech Stack Pills */}
                    <div className='flex flex-wrap gap-2 pt-2'>
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className='rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-xs font-medium text-violet-200/90'
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className='flex items-center justify-between border-t border-white/10 pt-4'>
                      <button
                        onClick={() => setSelectedProject(project)}
                        className='text-brand-blue group/btn flex items-center gap-1 text-xs font-semibold transition-colors hover:text-white'
                      >
                        View Details & Features
                        <span className='transition-transform duration-300 group-hover/btn:translate-x-1'>
                          →
                        </span>
                      </button>

                      <div className='flex items-center gap-3'>
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='hover:bg-brand-blue rounded-lg bg-white/5 p-2 text-violet-200 transition-colors hover:text-white'
                            title='GitHub Source'
                          >
                            <svg
                              className='h-4 w-4'
                              fill='currentColor'
                              viewBox='0 0 24 24'
                            >
                              <path
                                fillRule='evenodd'
                                clipRule='evenodd'
                                d='M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z'
                              />
                            </svg>
                          </a>
                        )}
                        {project.liveUrl && project.liveUrl !== '#' && (
                          <a
                            href={project.liveUrl}
                            className='bg-brand-blue hover:bg-brand-navy rounded-lg px-3 py-1.5 text-xs font-semibold text-white shadow-md transition-colors'
                          >
                            Live Demo
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>

      {/* Interactive Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-md'>
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className='border-brand-blue/50 relative max-h-[90vh] w-full max-w-2xl space-y-6 overflow-y-auto rounded-2xl border bg-[#04052E] p-6 shadow-2xl md:p-8'
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className='absolute top-4 right-4 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20'
              >
                ✕
              </button>

              <div className='space-y-2'>
                <span className='bg-brand-blue/30 text-brand-blue inline-block rounded-full px-3 py-1 text-xs font-bold tracking-wider uppercase'>
                  {selectedProject.category}
                </span>
                <h3 className='text-3xl font-bold text-white'>
                  {selectedProject.title}
                </h3>
                <p className='text-brand-blue text-sm font-medium'>
                  {selectedProject.subtitle}
                </p>
              </div>

              <p className='text-sm leading-relaxed text-blue-200/90'>
                {selectedProject.fullDescription}
              </p>

              {/* Technical Features */}
              <div className='space-y-3'>
                <h4 className='text-sm font-bold tracking-wider text-white uppercase'>
                  Key Engineering Highlights
                </h4>
                <ul className='space-y-2'>
                  {selectedProject.features.map((feat, i) => (
                    <li
                      key={i}
                      className='flex items-start gap-2 text-xs text-blue-200/80'
                    >
                      <span className='text-brand-blue font-bold'>✓</span>
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div className='space-y-2'>
                <h4 className='text-xs font-bold tracking-wider text-white uppercase'>
                  Tech Stack & Architecture
                </h4>
                <div className='flex flex-wrap gap-2'>
                  {selectedProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className='bg-brand-blue/20 text-brand-blue border-brand-blue/30 rounded-md border px-3 py-1 text-xs font-semibold'
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Modal Actions */}
              <div className='flex justify-end gap-3 border-t border-white/10 pt-4'>
                <button
                  onClick={() => setSelectedProject(null)}
                  className='rounded-lg px-4 py-2 text-xs font-medium text-violet-200/80 hover:text-white'
                >
                  Close
                </button>
                {selectedProject.githubUrl && (
                  <a
                    href={selectedProject.githubUrl}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='border-brand-blue/50 text-brand-blue hover:bg-brand-blue rounded-lg border px-4 py-2 text-xs font-semibold transition-colors hover:text-white'
                  >
                    View Code
                  </a>
                )}
                {selectedProject.liveUrl && selectedProject.liveUrl !== '#' && (
                  <a
                    href={selectedProject.liveUrl}
                    className='bg-brand-blue hover:bg-brand-navy rounded-lg px-5 py-2 text-xs font-semibold text-white transition-colors'
                  >
                    Launch Live Demo
                  </a>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
