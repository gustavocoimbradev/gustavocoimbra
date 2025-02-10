import Image from 'next/image';

import { Hero } from '@/sections/Hero';

export default function Home() {
  return (
    <>
      <Hero/>
      <section className="h-[100dvh]">
        <div className="container">
          <h2>Sobre mim</h2>
        </div>
      </section>
    </>
  );
}