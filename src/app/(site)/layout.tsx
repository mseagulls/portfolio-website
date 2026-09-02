import '@/styles/animate.css';
import '@/styles/prism-vsc-dark-plus.css';
import '@/styles/star.css';
import '@/styles/tailwind.css';

import PortfolioHeader from '@/components/Header/PortfolioHeader';
import PortfolioFooter from '@/components/Footer/PortfolioFooter';
import ScrollToTop from '@/components/ScrollToTop';
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
          <NextTopLoader
            color='#0D00A4'
            crawlSpeed={300}
            showSpinner={false}
            shadow='none'
          />

          <PortfolioHeader />
          {children}
          <PortfolioFooter />

          <ToasterContext />
        </div>

        <ScrollToTop />
      </body>
    </html>
  );
}
