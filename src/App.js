
import './App.css';
import {NavBar} from './components/NavBar';
import {Banner} from './components/Banner';
import {Coder} from './components/Coder';
import { Projects } from './components/Projects';
import { Footer } from './components/Footer';
import { Contact } from './components/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AboutMe } from './components/AboutMe';
import {Skills} from './components/Skills';



function App() {
  return (
    <div className="App">
    <NavBar/>
    <Banner/>
    <AboutMe/>
    <Skills/>
    <Coder/>
    <Projects/>
    <Contact/>
    <Footer/>
    </div>
  );
}

export default App;
