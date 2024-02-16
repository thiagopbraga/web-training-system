import React from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
// import 'src/app/globals.css';

const inter = Inter({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Login - FGFA Web System',
  description: 'Gerenciamento de dados da FGFA',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='pt-BR'>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
