'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { AnimatedElement, ScrollText } from '@/components/AnimatedElement';
import toast from 'react-hot-toast';
import ConnectGif from '@/assets/ConnectGif.gif';

export default function Contact() {
  const { ref, isInView } = useScrollAnimation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Full-Time Role',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

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

  const contactMethods = [
    {
      icon: '📧',
      label: 'Email',
      value: 'mdspeebs@hotmail.com',
      href: 'mailto:mdspeebs@hotmail.com',
    },
    {
      icon: '📲',
      label: 'Phone',
      value: '+1 (231) 675-3155',
      href: 'tel:+12316753155',
    },
    {
      icon: '📍',
      label: 'Location',
      value: 'Pueblo, CO 81005',
      href: 'https://maps.google.com/?q=Pueblo+CO+81005',
    },
  ];

  const quickSubjects = [
    'Full-Time Role',
    'Freelance Project',
    'Military Tech Network',
    'General Inquiry',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill in all required fields.');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      toast.success(
        'Message dispatched! Thank you for reaching out, Micah will respond promptly.',
      );
    }, 1000);
  };

  return (
    <section
      id='contact'
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
        <div className='absolute inset-0 bg-[#04052E]/90' />
      </div>

      {/* Background blur effect */}
      <div className='bg-brand-blue/20 absolute top-0 right-0 -z-10 h-96 w-96 rounded-full blur-3xl' />
      <div className='bg-brand-navy/20 absolute bottom-0 left-0 -z-10 h-96 w-96 rounded-full blur-3xl' />

      <div className='container mx-auto max-w-6xl'>
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
            <span className='bg-brand-blue/20 text-brand-blue border-brand-blue/30 inline-block rounded-full border px-4 py-1.5 text-xs font-semibold tracking-widest uppercase'>
              GET IN TOUCH
            </span>
            <div className='flex items-center justify-center gap-2 sm:gap-3'>
              <Image
                src={ConnectGif}
                alt='Animated connection signal'
                width={56}
                height={56}
                className='h-11 w-11 shrink-0 object-contain md:h-14 md:w-14'
              />
              <h2 className='text-2xl font-bold text-white sm:text-4xl md:text-5xl'>
                Let's{' '}
                <span className='text-brand-blue'>Connect & Collaborate</span>
              </h2>
              <Image
                src={ConnectGif}
                alt='Animated connection signal'
                width={56}
                height={56}
                className='h-11 w-11 shrink-0 object-contain md:h-14 md:w-14'
              />
            </div>
            <div className='from-brand-blue to-brand-navy mx-auto h-1 w-20 rounded-full bg-gradient-to-r' />
          </AnimatedElement>

          {/* CTA Text */}
          <ScrollText
            isVisible={isInView}
            delay={0.2}
            className='mx-auto max-w-3xl text-center text-base text-blue-200/90 md:text-lg'
          >
            <p className='text-blue-200/90'>
              Whether you are looking to hire a disciplined Full Stack
              Developer, discuss scalable software solutions, or connect across
              the military tech community, my line is always open.
            </p>
          </ScrollText>

          {/* Dual Column Layout: Info Cards + Interactive Form */}
          <div className='grid grid-cols-1 items-start gap-12 pt-6 lg:grid-cols-12'>
            {/* Left Column: Contact Methods & Socials */}
            <motion.div
              variants={containerVariants}
              className='space-y-6 lg:col-span-5'
            >
              <div className='space-y-4'>
                {contactMethods.map((method) => (
                  <motion.a
                    key={method.label}
                    variants={itemVariants}
                    href={method.href}
                    target={method.label === 'Email' ? '_self' : '_blank'}
                    rel={method.label === 'Email' ? '' : 'noopener noreferrer'}
                    whileHover={{ scale: 1.02, x: 5 }}
                    className='hover:border-brand-blue/60 flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur-md transition-all duration-300 hover:bg-white/10'
                  >
                    <div className='bg-brand-blue/20 border-brand-blue/30 flex h-12 w-12 items-center justify-center rounded-lg border text-2xl'>
                      {method.icon}
                    </div>
                    <div>
                      <h3 className='text-xs font-bold tracking-wider text-violet-300 uppercase'>
                        {method.label}
                      </h3>
                      <p className='hover:text-brand-blue text-base font-semibold text-white transition-colors'>
                        {method.value}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Status Box */}
              <div className='space-y-2 rounded-xl border border-emerald-500/30 bg-emerald-950/20 p-5'>
                <div className='flex items-center gap-2 text-sm font-semibold text-emerald-400'>
                  <span className='h-2.5 w-2.5 animate-ping rounded-full bg-emerald-400' />
                  Current Availability Status
                </div>
                <p className='text-xs leading-relaxed text-emerald-200/80'>
                  Open for full-time Software Engineer positions, contract
                  roles, and technical advisory. Based in Pueblo, CO (Open to
                  Remote or Relocation).
                </p>
              </div>

              {/* Social Buttons */}
              <div className='space-y-3 pt-2'>
                <h4 className='text-xs font-bold tracking-wider text-white uppercase'>
                  Follow & Connect
                </h4>
                <div className='flex items-center gap-4'>
                  <a
                    href='https://github.com/mseagulls'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='hover:border-brand-blue hover:bg-brand-blue flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-xs font-semibold text-white transition-all'
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
                    GitHub Profile
                  </a>
                  <a
                    href='https://linkedin.com'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='hover:border-brand-blue hover:bg-brand-blue flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-xs font-semibold text-white transition-all'
                  >
                    <svg
                      className='h-4 w-4'
                      fill='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path d='M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.74a1.6 1.6 0 1 0 0 3.2 1.6 1.6 0 0 0 0-3.2z' />
                    </svg>
                    LinkedIn Profile
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Interactive Message Form */}
            <motion.div
              variants={itemVariants}
              className='space-y-6 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md md:p-8 lg:col-span-7'
            >
              <h3 className='text-2xl font-bold text-white'>
                Send Direct Message
              </h3>

              {submitted ? (
                <div className='border-brand-blue/50 bg-brand-blue/20 space-y-4 rounded-xl border p-8 text-center'>
                  <div className='bg-brand-blue mx-auto flex h-16 w-16 items-center justify-center rounded-full text-3xl text-white'>
                    ✓
                  </div>
                  <h4 className='text-2xl font-bold text-white'>
                    Message Received!
                  </h4>
                  <p className='mx-auto max-w-md text-sm text-blue-200/90'>
                    Thank you for connecting. I will review your message and
                    reply via email as soon as possible.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        subject: 'Full-Time Role',
                        message: '',
                      });
                    }}
                    className='bg-brand-blue hover:bg-brand-navy rounded-lg px-6 py-2.5 text-xs font-semibold text-white transition-colors'
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className='space-y-5'>
                  {/* Topic Selector */}
                  <div className='space-y-2'>
                    <label className='text-xs font-semibold tracking-wider text-violet-300 uppercase'>
                      Inquiry Topic
                    </label>
                    <div className='flex flex-wrap gap-2'>
                      {quickSubjects.map((subj) => (
                        <button
                          key={subj}
                          type='button'
                          onClick={() =>
                            setFormData({ ...formData, subject: subj })
                          }
                          className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-all ${
                            formData.subject === subj
                              ? 'bg-brand-blue ring-brand-blue text-white ring-2'
                              : 'border border-white/10 bg-white/5 text-blue-200/70 hover:bg-white/10 hover:text-white'
                          }`}
                        >
                          {subj}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Name & Email Inputs */}
                  <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
                    <div className='space-y-1.5'>
                      <label className='text-xs font-semibold tracking-wider text-violet-300 uppercase'>
                        Your Name *
                      </label>
                      <input
                        type='text'
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder='e.g., Sarah Connor'
                        className='focus:border-brand-blue focus:ring-brand-blue w-full rounded-lg border border-white/10 bg-black/40 px-4 py-3 text-sm text-white placeholder-gray-500 transition-all outline-none focus:ring-1'
                      />
                    </div>
                    <div className='space-y-1.5'>
                      <label className='text-xs font-semibold tracking-wider text-violet-300 uppercase'>
                        Your Email *
                      </label>
                      <input
                        type='email'
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder='e.g., sarah@company.com'
                        className='focus:border-brand-blue focus:ring-brand-blue w-full rounded-lg border border-white/10 bg-black/40 px-4 py-3 text-sm text-white placeholder-gray-500 transition-all outline-none focus:ring-1'
                      />
                    </div>
                  </div>

                  {/* Message Input */}
                  <div className='space-y-1.5'>
                    <label className='text-xs font-semibold tracking-wider text-violet-300 uppercase'>
                      Message *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder='Tell me about your project, team opportunity, or inquiry...'
                      className='focus:border-brand-blue focus:ring-brand-blue w-full resize-none rounded-lg border border-white/10 bg-black/40 px-4 py-3 text-sm text-white placeholder-gray-500 transition-all outline-none focus:ring-1'
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type='submit'
                    disabled={isSubmitting}
                    className='bg-brand-blue hover:bg-brand-navy hover:shadow-brand-blue/30 flex w-full items-center justify-center gap-2 rounded-lg py-3.5 font-semibold text-white shadow-lg transition-all duration-300 disabled:opacity-50'
                  >
                    {isSubmitting ? (
                      <>
                        <span className='h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent' />
                        Sending Message...
                      </>
                    ) : (
                      'Dispatch Message'
                    )}
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
