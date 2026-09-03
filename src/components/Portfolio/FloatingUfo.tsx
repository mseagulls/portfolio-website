'use client';

import { motion, useScroll, useTransform } from 'framer-motion';

export default function FloatingUfo() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [60, 360]);
  const x = useTransform(scrollYProgress, [0, 1], [0, 24]);
  const rotate = useTransform(scrollYProgress, [0, 1], [-10, 12]);

  return (
    <motion.div
      className='pointer-events-none fixed top-1/2 left-2 z-30 hidden -translate-y-1/2 opacity-80 md:block'
      style={{ x, y, rotate }}
      aria-hidden='true'
    >
      <motion.div
        animate={{ y: [0, -12, 0], x: [0, 8, 0], rotate: [-10, -2, -10] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        className='relative'
      >
        <div className='absolute top-10 left-8 h-8 w-8 rounded-full bg-emerald-300/50 blur-xl' />
        <div className='relative h-16 w-24 rounded-[42%] border border-emerald-300/70 bg-gradient-to-b from-emerald-300/35 via-emerald-200/10 to-transparent shadow-[0_0_35px_rgba(52,211,153,0.35)] backdrop-blur-sm'>
          <div className='absolute top-3 left-3 h-5 w-[72%] rounded-full bg-black/30' />
          <div className='absolute top-[-10px] left-1/2 h-5 w-5 -translate-x-1/2 rounded-full bg-slate-100 shadow-[0_0_18px_rgba(255,255,255,0.7)]' />
          <div className='absolute top-[12px] left-[20px] h-2.5 w-2.5 rounded-full bg-emerald-200/80' />
          <div className='absolute top-[12px] right-[20px] h-2.5 w-2.5 rounded-full bg-emerald-200/80' />
          <div className='absolute top-8 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-emerald-200' />
        </div>
        <div className='mt-[-2px] h-4 w-20 rounded-full border border-emerald-200/60 bg-gradient-to-r from-transparent via-emerald-300/30 to-transparent blur-[1px]' />
      </motion.div>
    </motion.div>
  );
}
