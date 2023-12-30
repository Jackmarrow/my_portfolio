import {Navigation} from "./layouts/Navigation";
import {HeroSection} from "./layouts/HeroSection";
import {About} from "./layouts/About";
import {Skills} from "./layouts/Skills";
import { Project } from "./layouts/Project";
import { ContactSection } from "./layouts/ContactSection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import AnchorLink from "react-anchor-link-smooth-scroll"
import './App.scss'

function App() {

  return (
    <>
      <Navigation />
      <HeroSection />
      <About/>
      <Skills />
      <Project />
      <ContactSection />
    </>
  )
}

export default App
