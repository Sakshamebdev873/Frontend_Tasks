import HeroSection from '../app/components/HeroSection';
import { ThemeToggle } from './components/ui/ThemeToggle';

export default function Home() {
  return (
    <main>
      <ThemeToggle />
      <HeroSection />
    </main>
  );
}