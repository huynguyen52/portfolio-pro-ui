'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';

type LoadingProps = {
  children: React.ReactNode;
};

export function Loading({ children }: LoadingProps) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => setLoading(false);
    window.addEventListener('load', handleLoad);
    return () => window.removeEventListener('load', handleLoad);
  }, []);
  if (loading) {
    return (
      <div className="h-screen bg-black flex justify-center items-center">
        <Image
          width={72}
          height={72}
          src="/logos/pacman.gif"
          alt="Loader icon"
        />
      </div>
    );
  }
  return <>{children}</>;
}
