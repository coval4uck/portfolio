
import { Route, Routes } from 'react-router-dom';
import './Portfolio.css';
import About from './components/layout/About/About';
import Footer from './components/layout/Footer/Footer';
import Header from './components/layout/Header/Header';
import HeroSection from './components/layout/Hero-section/HeroSection';
import ProjectSection from './components/layout/Project-section/Project-section';
import SkillsSection from './components/layout/Skills-section/Skills-section';
import Contacts from './components/layout/Contacts/Contacts';

function Portfolio() {
  return (
    <div className="App">
      <Header />
        <Routes>
          <Route path='/about' element = {<About />}/>
          <Route path='/' 
          element = {
            <>
              <HeroSection />
              <SkillsSection />
              <ProjectSection />
            </>
          }/>
          <Route path='/stack' element = {<SkillsSection />} />
          <Route path='/projects' element={<ProjectSection />}/>
          <Route path='/contacts' element={<Contacts />}/>
        </Routes>
      
      <Footer />
    </div>
  );
}

export default Portfolio;
