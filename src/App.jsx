import {
  Navigation,
  Hero,
  About,
  Skills,
  Projects,
  Education,
  Experience,
  Gallery,
  Contact,
  Footer,
  ScrollToTop,
} from './components';

export default function App() {
  return (
    <div className="bg-background text-primarytext overflow-hidden min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Experience />
        <Gallery />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
