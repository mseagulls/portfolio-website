'use client';

import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import Image from 'next/image';
import WalkGif from '@/assets/WalkGif.gif';

interface CommandOutput {
  id: number;
  command: string;
  output: React.ReactNode;
}

const PRESET_COMMANDS = [
  { cmd: 'help', desc: 'Show available commands' },
  { cmd: 'cat resume.txt', desc: 'View summary resume' },
  { cmd: 'skills', desc: 'Display technical skills matrix' },
  { cmd: 'military', desc: 'Inspect Army leadership credentials' },
  { cmd: 'projects', desc: 'List featured applications' },
  { cmd: 'contact', desc: 'Get direct contact info' },
  { cmd: 'clear', desc: 'Clear screen' },
];

export default function InteractiveTerminal() {
  const { ref, isInView } = useScrollAnimation();
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<CommandOutput[]>([
    {
      id: 1,
      command: 'welcome',
      output: (
        <div className='space-y-2 font-mono text-xs text-emerald-400 md:text-sm'>
          <p>
            Micah Peebles CLI OS v2.4 [Full Stack & US Army Veteran Terminal]
          </p>
          <p className='text-gray-400'>
            Type <span className='font-bold text-yellow-400'>help</span> or
            click preset buttons below to execute terminal commands.
          </p>
        </div>
      ),
    },
  ]);

  const [historyIndex, setHistoryIndex] = useState(-1);
  const [commandList, setCommandList] = useState<string[]>([]);
  const terminalEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const processCommand = (rawCmd: string) => {
    const cmd = rawCmd.trim().toLowerCase();
    if (!cmd) return;

    setCommandList((prev) => [...prev, cmd]);
    setHistoryIndex(-1);

    let outputContent: React.ReactNode = null;

    switch (cmd) {
      case 'help':
        outputContent = (
          <div className='space-y-1 font-mono text-xs text-gray-300'>
            <p className='font-bold text-emerald-400'>Available Commands:</p>
            {PRESET_COMMANDS.map((pc) => (
              <div key={pc.cmd} className='grid max-w-md grid-cols-2 gap-4'>
                <span className='text-yellow-400'>{pc.cmd}</span>
                <span className='text-gray-400'>{pc.desc}</span>
              </div>
            ))}
          </div>
        );
        break;

      case 'cat resume.txt':
      case 'resume':
        outputContent = (
          <div className='space-y-2 font-mono text-xs text-blue-200'>
            <p className='font-bold text-yellow-400'>
              MICAH PEEBLES — FULL STACK DEVELOPER & ARMY VETERAN
            </p>
            <p>
              • Location: Pueblo, CO | Email: mdspeebs@hotmail.com | Phone: +1
              (231) 675-3155
            </p>
            <p>
              • 10+ Years Military Leadership (Bradley Commander / Staff
              Sergeant, Squad Leader)
            </p>
            <p>
              • Technical Stack: JavaScript, TypeScript, React, Next.js,
              Node.js, Tailwind CSS, Prisma, REST APIs
            </p>
            <p>
              • Certifications: JavaScript Certified, Web Design Certified, Army
              Squad Leader Honors
            </p>
          </div>
        );
        break;

      case 'skills':
        outputContent = (
          <div className='space-y-2 font-mono text-xs'>
            <p className='font-bold text-emerald-400'>TECHNICAL SKILLS:</p>
            <p className='text-gray-300'>
              Frontend: JavaScript [90%], React [85%], TypeScript [80%], Next.js
              [85%], Tailwind [90%]
            </p>
            <p className='text-gray-300'>
              Backend: Node.js [80%], REST APIs [85%], Database Design [75%],
              Git [85%]
            </p>
            <p className='mt-2 font-bold text-yellow-400'>
              MILITARY & LEADERSHIP SKILLS:
            </p>
            <p className='text-gray-300'>
              Operational Planning, Risk Management, Squad Leadership, Crisis
              Response, $10M+ Asset Oversight
            </p>
          </div>
        );
        break;

      case 'military':
        outputContent = (
          <div className='space-y-2 font-mono text-xs text-gray-300'>
            <p className='font-bold text-yellow-400'>
              U.S. ARMY SERVICE HISTORY (2017 – 2026):
            </p>
            <p>
              <span className='text-emerald-400'>[2025-2026]</span> Bradley
              Commander — Led section of 2 squads (5-10 soldiers), overall
              mission planning & safety.
            </p>
            <p>
              <span className='text-emerald-400'>[2017-2025]</span> Cavalry
              Scout / Squad Leader — Managed $10M+ armored vehicles, 100%
              mission success rate.
            </p>
          </div>
        );
        break;

      case 'projects':
        outputContent = (
          <div className='space-y-2 font-mono text-xs text-gray-300'>
            <p className='font-bold text-emerald-400'>FEATURED PROJECTS:</p>
            <p>
              1. <span className='text-yellow-400'>AI Content Studio:</span>{' '}
              Next.js 14 + OpenAI content generator app.
            </p>
            <p>
              2.{' '}
              <span className='text-yellow-400'>
                Tactical Logistics Tracker:
              </span>{' '}
              Equipment & readiness analytics dashboard.
            </p>
            <p>
              3. <span className='text-yellow-400'>Command Hub CLI:</span>{' '}
              Interactive retro terminal for portfolio interactivity.
            </p>
            <p>
              4. <span className='text-yellow-400'>Nexus E-Commerce:</span> Full
              stack shopping platform with Stripe integration.
            </p>
          </div>
        );
        break;

      case 'contact':
        outputContent = (
          <div className='space-y-1 font-mono text-xs text-gray-300'>
            <p className='font-bold text-emerald-400'>GET IN TOUCH:</p>
            <p>
              Email:{' '}
              <a
                href='mailto:mdspeebs@hotmail.com'
                className='text-yellow-400 underline'
              >
                mdspeebs@hotmail.com
              </a>
            </p>
            <p>
              Phone:{' '}
              <a href='tel:+12316753155' className='text-yellow-400 underline'>
                +1 (231) 675-3155
              </a>
            </p>
            <p>Location: Pueblo, CO 81005</p>
          </div>
        );
        break;

      case 'clear':
        setHistory([]);
        setInput('');
        return;

      case 'matrix':
        outputContent = (
          <div className='animate-pulse font-mono text-xs text-emerald-400'>
            01001101 01001001 01000011 01000001 01001000 00100000 01010000
            01000101 01000101 01000010 01001100 01000101 01010011 -- Full Stack
            Dev Ready for Hire.
          </div>
        );
        break;

      default:
        outputContent = (
          <div className='font-mono text-xs text-red-400'>
            Command not recognized: '{cmd}'. Type{' '}
            <span className='font-bold text-yellow-400'>help</span> to list
            available commands.
          </div>
        );
        break;
    }

    setHistory((prev) => [
      ...prev,
      {
        id: Date.now(),
        command: rawCmd,
        output: outputContent,
      },
    ]);
    setInput('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      processCommand(input);
    } else if (e.key === 'ArrowUp') {
      if (commandList.length === 0) return;
      const nextIdx = historyIndex + 1;
      if (nextIdx < commandList.length) {
        setHistoryIndex(nextIdx);
        setInput(commandList[commandList.length - 1 - nextIdx]);
      }
    } else if (e.key === 'ArrowDown') {
      if (historyIndex > 0) {
        const nextIdx = historyIndex - 1;
        setHistoryIndex(nextIdx);
        setInput(commandList[commandList.length - 1 - nextIdx]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInput('');
      }
    }
  };

  return (
    <section
      id='terminal'
      ref={ref}
      className='relative overflow-hidden px-4 py-20 text-white md:px-8 md:py-28'
    >
      <div className='container mx-auto max-w-5xl'>
        <div className='space-y-8'>
          {/* Header */}
          <div className='space-y-4 text-center'>
            <span className='inline-block rounded-full border border-emerald-500/30 bg-emerald-500/20 px-4 py-1.5 text-xs font-semibold tracking-widest text-emerald-400 uppercase'>
              INTERACTIVE RECRUITER CLI
            </span>
            <div className='flex items-center justify-center gap-2 sm:gap-3'>
              <Image
                src={WalkGif}
                alt='Animated figure walking'
                width={72}
                height={72}
                className='h-11 w-11 shrink-0 object-contain md:h-14 md:w-14'
              />
              <h2 className='text-3xl font-bold text-white md:text-4xl'>
                Command Center{' '}
                <span className='text-emerald-400'>Terminal</span>
              </h2>
              <Image
                src={WalkGif}
                alt='Animated figure walking'
                width={72}
                height={72}
                className='h-11 w-11 shrink-0 object-contain md:h-14 md:w-14'
              />
            </div>
            <p className='mx-auto max-w-xl text-xs text-gray-400 md:text-sm'>
              Test out the interactive terminal below or click quick command
              buttons to query experience, technical skills, and resume details.
            </p>
          </div>

          {/* Terminal Box */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            className='overflow-hidden rounded-2xl border border-emerald-500/30 bg-[#070b12] shadow-2xl shadow-emerald-950/40'
          >
            {/* Top Bar */}
            <div className='flex items-center justify-between border-b border-emerald-500/20 bg-[#0e1626] px-4 py-3'>
              <div className='flex items-center gap-2'>
                <div className='h-3 w-3 rounded-full bg-red-500/80' />
                <div className='h-3 w-3 rounded-full bg-yellow-500/80' />
                <div className='h-3 w-3 rounded-full bg-emerald-500/80' />
                <span className='ml-2 font-mono text-xs text-gray-400'>
                  bash — micah@peebles-dev-macbook:~
                </span>
              </div>
              <span className='font-mono text-[10px] text-emerald-400'>
                ONLINE
              </span>
            </div>

            {/* Console Output Area */}
            <div
              className='h-80 space-y-4 overflow-y-auto p-4 font-mono text-xs md:p-6 md:text-sm'
              onClick={() => inputRef.current?.focus()}
            >
              {history.map((item) => (
                <div key={item.id} className='space-y-1'>
                  {item.command !== 'welcome' && (
                    <div className='flex items-center gap-2 text-emerald-400'>
                      <span>micah@dev:~$</span>
                      <span className='text-white'>{item.command}</span>
                    </div>
                  )}
                  <div className='pl-4'>{item.output}</div>
                </div>
              ))}
              <div ref={terminalEndRef} />
            </div>

            {/* Command Input Field */}
            <div className='flex items-center gap-2 border-t border-emerald-500/20 bg-[#0e1626] px-4 py-3'>
              <span className='font-mono text-xs text-emerald-400'>
                micah@dev:~$
              </span>
              <input
                ref={inputRef}
                type='text'
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Type 'help' or any command..."
                className='w-full bg-transparent font-mono text-xs text-white outline-none placeholder:text-gray-600 md:text-sm'
              />
            </div>
          </motion.div>

          {/* Quick Click Buttons */}
          <div className='flex flex-wrap items-center justify-center gap-2 pt-2'>
            <span className='mr-2 font-mono text-xs text-gray-400'>
              Quick Run:
            </span>
            {PRESET_COMMANDS.map((pc) => (
              <button
                key={pc.cmd}
                onClick={() => processCommand(pc.cmd)}
                className='rounded-lg border border-emerald-500/30 bg-emerald-950/40 px-3 py-1.5 font-mono text-xs text-emerald-400 transition-all duration-200 hover:bg-emerald-500 hover:text-black'
              >
                $ {pc.cmd}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
