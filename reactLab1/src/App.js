import './App.css';
import HeroSection from './HeroSection/HeroSection';
import AboutMe from './AboutMe/AboutMe';
import Skills from './Skills/Skills';
import Portfolio from './Portfolio/Portfolio';
import Footer from './Footer/Footer';

function App() {
  return (
    <div className="App">
      <HeroSection />
      <AboutMe />
      <Skills/>
      <Portfolio/>
      <Footer/>
    </div>
  );
}

export default App;
