import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import '@common-design/global.css';

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
      <body className={suitFont.className}>{children}</body>
    </html>
  );
}
