'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const PortfolioHeader = () => {
  const [stickyMenu, setStickyMenu] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setStickyMenu(window.scrollY >= 80);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '/#' },
    { label: 'About', href: '/#about' },
    { label: 'Projects', href: '/#projects' },
    { label: 'Mindset', href: '/#core-values' },
    { label: 'CLI Terminal', href: '/#terminal' },
    { label: 'Skills', href: '/#skills' },
    { label: 'Experience', href: '/#experience' },
    { label: 'Contact', href: '/#contact' },
  ];

  return (
    <motion.header
      className={`fixed top-0 left-0 z-1000 w-full transition-all duration-300 ${
        stickyMenu
          ? 'border-b border-white/10 bg-[#0b0d0c]/95 shadow-xl backdrop-blur-xl'
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className='mx-auto max-w-7xl px-4 md:px-8'>
        <div className='flex h-20 items-center justify-between'>
          {/* Logo/Name */}
          <Link href='/'>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className='flex items-center gap-3'
            >
              <div className='from-brand-blue to-brand-navy shadow-brand-blue/30 border-brand-blue/40 text-brand-black flex h-10 w-10 items-center justify-center rounded-xl border bg-gradient-to-br font-bold shadow-md'>
                MP
              </div>
              <div className='hidden flex-col sm:flex'>
                <span className='text-base leading-tight font-bold text-white'>
                  Micah Peebles
                </span>
                <span className='text-brand-blue flex items-center gap-1 text-[10px] font-semibold'>
                  <span className='h-1.5 w-1.5 animate-ping rounded-full bg-emerald-400' />
                  Full Stack Developer
                </span>
              </div>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className='hidden items-center gap-4 xl:flex xl:gap-6'>
            {navItems.map((item) => (
              <Link key={item.label} href={item.href}>
                <motion.span
                  whileHover={{ y: -2 }}
                  className='hover:text-brand-blue text-[10px] font-semibold tracking-wider text-lime-100/75 uppercase transition-colors duration-300 xl:text-xs'
                >
                  {item.label}
                </motion.span>
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className='hidden items-center gap-4 lg:flex'>
            <Link href='#contact'>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className='bg-brand-blue hover:bg-purple-light shadow-brand-blue/30 text-brand-black rounded-lg px-5 py-2 text-xs font-semibold shadow-md transition-all duration-300'
              >
                Let's Talk
              </motion.button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            aria-label={
              mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'
            }
            aria-expanded={mobileMenuOpen}
            className='hover:border-brand-blue/50 hover:text-brand-blue rounded-lg border border-white/10 bg-white/5 p-2 text-white transition-colors lg:hidden'
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg
              className='h-6 w-6'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d={
                  mobileMenuOpen
                    ? 'M6 18L18 6M6 6l12 12'
                    : 'M4 6h16M4 12h16M4 18h16'
                }
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={
            mobileMenuOpen
              ? { height: 'auto', opacity: 1 }
              : { height: 0, opacity: 0 }
          }
          transition={{ duration: 0.3 }}
          className='overflow-hidden rounded-b-2xl border-t border-white/10 bg-[#121715]/95 backdrop-blur-xl lg:hidden'
        >
          <nav className='flex flex-col gap-2 p-6'>
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
              >
                <motion.span
                  whileHover={{ x: 5 }}
                  className='block py-2 text-sm font-medium text-blue-200/90 transition-colors duration-300 hover:text-white'
                >
                  {item.label}
                </motion.span>
              </Link>
            ))}
            <Link href='#contact'>
              <motion.button
                whileHover={{ scale: 1.05 }}
                className='bg-brand-blue hover:bg-brand-navy mt-4 w-full rounded-lg px-4 py-2 font-medium text-white transition-colors duration-300'
              >
                Let's Talk
              </motion.button>
            </Link>
          </nav>
        </motion.div>
      </div>
    </motion.header>
  );
};

export default PortfolioHeader;
