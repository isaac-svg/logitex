import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import NavBar from './components/shared/nav';
import Footer from './components/sections/footer/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Logitex - Demo Three',
  description: 'Logitext - Demo Three Homepage',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} relative h-auto`}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
