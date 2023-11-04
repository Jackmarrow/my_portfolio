import { Navigation } from "../../layouts/Navigation";
import { HeroSection } from "../../layouts/HeroSection";
import { useState } from "react";
import { Skills } from "../../layouts/Skills";
import { Project } from "../../layouts/Project";
import { ContactSection } from "../../layouts/ContactSection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import AnchorLink from "react-anchor-link-smooth-scroll"
import "./Home.scss";

export function Home() {
  return (
    <>
      <Navigation />
      <HeroSection />
      <Skills />
      <Project />
      <ContactSection />
        <AnchorLink href="#home">
        <button className="back-top" type="button">
          <FontAwesomeIcon icon={faArrowUp} size="2xl" />
        </button>
        </AnchorLink>
      
    </>
  );
}
