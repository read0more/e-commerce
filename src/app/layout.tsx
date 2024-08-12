import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import '@common-design/global.css';
import ToastContainer from '@common-design/components/ToastContainer';
import Theme from '@/e-commerce-common-design/src/components/Theme';

const suitFont = localFont({ src: 'SUIT-Variable.woff2' });

export const metadata: Metadata = {
  title: 'E-commerce test',
  description: 'Just a test about app router',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={suitFont.className}>
        <Theme>
          {children}
          <ToastContainer />
        </Theme>
      </body>
    </html>
  );
}
