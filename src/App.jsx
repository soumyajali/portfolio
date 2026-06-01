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
    <div className="bg-black text-white overflow-hidden">
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
