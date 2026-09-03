import '@/styles/animate.css';
import '@/styles/prism-vsc-dark-plus.css';
import '@/styles/star.css';
import '@/styles/tailwind.css';

import PortfolioHeader from '@/components/Header/PortfolioHeader';
import PortfolioFooter from '@/components/Footer/PortfolioFooter';
import ScrollToTop from '@/components/ScrollToTop';
import FloatingUfo from '@/components/Portfolio/FloatingUfo';
import { Plus_Jakarta_Sans } from 'next/font/google';
import NextTopLoader from 'nextjs-toploader';
import ToasterContext from '../context/ToastContext';

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className={plusJakarta.className}>
      <body className='bg-brand-black'>
        <div className='isolate'>
          <a
            href='#main-content'
            className='focus:bg-brand-blue focus:text-brand-black sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-99999 focus:px-4 focus:py-2 focus:font-semibold'
          >
            Skip to content
          </a>
          <NextTopLoader
            color='#B8F36B'
            crawlSpeed={300}
            showSpinner={false}
            shadow='none'
          />

          <PortfolioHeader />
          {children}
          <PortfolioFooter />

          <FloatingUfo />
          <ToasterContext />
        </div>

        <ScrollToTop />
      </body>
    </html>
  );
}
