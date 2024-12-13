import { Header } from '@/components/Header';
import { Main } from '@/components/_Layout/Main';
import { Hero } from '@/components/Hero';

export default function Home() {
  return (
    <>
      <Header/>
      <Main>
        <Hero/>
      </Main>
    </>
  );
}
