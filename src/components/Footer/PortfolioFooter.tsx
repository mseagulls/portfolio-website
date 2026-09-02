'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function PortfolioFooter() {
  const currentYear = new Date().getFullYear();

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
    hidden: { y: 10, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <motion.footer
      className='bg-brand-black border-brand-blue/10 border-t py-12 text-white md:py-16'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className='container mx-auto max-w-6xl px-4 md:px-8'>
        <motion.div
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          className='border-brand-blue/20 mb-8 grid grid-cols-1 gap-12 border-b pb-8 md:grid-cols-3'
        >
          {/* About */}
          <motion.div variants={itemVariants} className='space-y-4'>
            <h4 className='text-brand-blue text-lg font-bold'>Micah Peebles</h4>
            <p className='text-sm leading-relaxed text-violet-200/80'>
              Full Stack Developer with 10+ years of military leadership
              experience. Bringing discipline, precision, and excellence to web
              development.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants} className='space-y-4'>
            <h4 className='text-brand-blue text-lg font-bold'>Quick Links</h4>
            <ul className='space-y-2 text-sm'>
              {[
                { label: 'Home', href: '/' },
                { label: 'About', href: '/#about' },
                { label: 'Skills', href: '/#skills' },
                { label: 'Experience', href: '/#experience' },
              ].map((link) => (
                <li key={link.label}>
                  <Link href={link.href}>
                    <motion.span
                      whileHover={{ x: 5 }}
                      className='hover:text-brand-blue inline-block text-violet-200/80 transition-colors duration-300'
                    >
                      {link.label}
                    </motion.span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div variants={itemVariants} className='space-y-4'>
            <h4 className='text-brand-blue text-lg font-bold'>Get In Touch</h4>
            <div className='space-y-2 text-sm'>
              <a
                href='mailto:mdspeebs@hotmail.com'
                className='block text-blue-200/80 transition-colors duration-300 hover:text-violet-300'
              >
                mdspeebs@hotmail.com
              </a>
              <a
                href='tel:+12316753155'
                className='block text-blue-200/80 transition-colors duration-300 hover:text-violet-300'
              >
                +1 (231) 675-3155
              </a>
              <p className='text-violet-200/80'>Pueblo, CO 81005</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          variants={itemVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          className='flex flex-col items-center justify-between gap-6 text-sm text-violet-200/80 md:flex-row'
        >
          <p>
            &copy; {currentYear} Micah Peebles. All rights reserved. Built with
            React & Next.js.
          </p>

          {/* Social Links */}
          <div className='flex gap-4'>
            {[
              { icon: 'G', label: 'GitHub', href: 'https://github.com' },
              { icon: 'L', label: 'LinkedIn', href: 'https://linkedin.com' },
              //   { icon: 'T', label: 'Twitter', href: 'https://twitter.com' },
            ].map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target='_blank'
                rel='noopener noreferrer'
                whileHover={{ scale: 1.2 }}
                className='border-brand-blue/20 text-brand-blue hover:bg-brand-blue hover:text-brand-black flex h-8 w-8 items-center justify-center rounded border text-xs font-bold transition-all duration-300'
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
}
