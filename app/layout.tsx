import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'PrinciplesAI - Van Produceren naar Cureren',
  description: 'Stop met produceren. Start met cureren. Ontdek de nieuwe manier van werken voor kenniswerkers waarbij AI het loopwerk doet, en jij de regie houdt.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nl" className="dark">
      <body className={`${inter.className} bg-slate-950 text-white min-h-screen`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}

