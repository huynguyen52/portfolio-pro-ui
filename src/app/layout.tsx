import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import Header from './layout/header';
import Footer from './layout/footer';
import { Loading } from './components/loading';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: '| Huy Nguyen',
  description: 'Nguyen Quoc Huy personal website',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-night-sky bg-fixed antialiased bg-background text-white`}
      >
        <Loading>
          <Header />
          {children}
          <Footer />
        </Loading>
      </body>
    </html>
  );
}
