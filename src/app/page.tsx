import Contact from './sections/contact';
import HeroSection from './sections/hero';
import Introduce from './sections/introduce';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <Introduce />
      <Contact />
    </main>
  );
}
