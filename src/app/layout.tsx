import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import YkButton from '@common-design/src/components/yk-button';
import YkButton2 from '@common-design/src/components/yk-button2';

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
        <YkButton name="test" />
        <YkButton2 name="test2" />
        {children}
      </body>
    </html>
  );
}
