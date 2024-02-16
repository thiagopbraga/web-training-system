'use client';

import Image from 'next/image';
import { useEffect } from 'react';

export default function Home() {
  const userLogged = false;

  useEffect(() => {
    if (!userLogged) {
      window.location.href = '/login';
    }
  }, [userLogged]);

  return (
    <main className='flex min-h-screen items-center justify-between'>
      <span>Main Screen</span>
    </main>
  );
}
