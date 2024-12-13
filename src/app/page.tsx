import { Header } from '@/components/Header';
import { Main } from '@/components/_Layout/Main';
import { Hero } from '@/components/Hero';
import { Stacks } from '@/components/Stacks';

export default function Home() {
  return (
    <>
      <Header/>
      <Main>
        <Hero/>
        <Stacks/>
      </Main>
    </>
  );
}
