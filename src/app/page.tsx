import HeroSection from './sections/hero';
import { Projects } from './sections/projects';
import Skills from './sections/skills';

export default function Home() {
  return (
    <main className="bg-night-sky bg-fixed">
      <HeroSection />
      <Skills />
      <Projects />
    </main>
  );
}
