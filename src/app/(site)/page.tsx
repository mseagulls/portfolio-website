import Hero from '@/components/Portfolio/Hero';
import About from '@/components/Portfolio/About';
import Projects from '@/components/Portfolio/Projects';
import CoreValues from '@/components/Portfolio/CoreValues';
import InteractiveTerminal from '@/components/Portfolio/InteractiveTerminal';
import Skills from '@/components/Portfolio/Skills';
import Experience from '@/components/Portfolio/Experience';
import Contact from '@/components/Portfolio/Contact';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Micah Peebles | Full Stack Developer & US Army Veteran',
  description:
    'Full Stack Developer & US Army Staff Sergeant with 10+ years of military leadership experience. Certified in JavaScript and Web Design. Engineering high-performance Next.js, React, and TypeScript applications.',
  keywords:
    'Full Stack Developer, Web Developer, JavaScript, React, Next.js, TypeScript, Army Veteran, Software Engineer, Portfolio',
};

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <CoreValues />
      <InteractiveTerminal />
      <Skills />
      <Experience />
      <Contact />
    </>
  );
}
