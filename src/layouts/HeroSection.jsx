import "./HeroSection.scss";
// import profilePic from "../assets/images/profile_pic.jpg";
import { PrimaryButton } from "./components/PrimaryButton";
import { SecondaryButton } from "./components/SecondaryButton";
import Resume from "../assets/pdf/resume.pdf";
import HeroImage from "../assets/images/coding-svg.svg";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";



export function HeroSection() {

  const parentContainer = useRef(null);

  useEffect(()=>{
    let ctx = gsap.context(()=>{
        gsap.from(".about-desc", { opacity: 0, x: -100, duration: 2 });
        gsap.from(".profile-image", {opacity:0, y: -100, duration: 2, delay: .5 });
        // gsap.from(".my-name", {'--slide-width': 0, duration: 0.8, delay: 1});
    }, parentContainer);

    return () => ctx.revert();

  },[]);
    

  return (
    <section id="home" className="hero-section">
      <div ref={parentContainer} className="container">
        <div className="about-container">
          <div className="image-container">
            <img className="profile-image" src={HeroImage} alt="coding image" />
          </div>
          <div className="about-desc">
            <h1>
            &#128075; Nice to meet you! <br /> I'm Oussama Boussouf
            </h1>
            <p>
              I am front-end developer passionate about <br /> building
              accessible web apps.
            </p>
            <div className="btn-group">
              <AnchorLink href="#contact"><PrimaryButton content={"Contact Me"} /></AnchorLink>
              <a href={Resume} target="_blank"><SecondaryButton> Check Resume </SecondaryButton></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
