import React, { useEffect, useRef } from "react";
import AboutPic from "../assets/images/about-me.jpg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./About.scss";

gsap.registerPlugin(ScrollTrigger);

export const About = () => {
  const about = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".about-picture", {
        scrollTrigger: ".about-picture",
        x: -100,
        opacity: 0,
        duration: 1.5,
      });
      // gsap.to('span',{scrollTrigger:"span", "--slide-top": "100%", duration: 1.5, delay: 1});
      // gsap.to('h2', {scrollTrigger:"h2", "--slide-width": '100%', delay:1.5, duration: 1});
    }, about);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" className="about-section">
      <div className="container">
        <div ref={about} className="about-me-container">
          <div className="image-container">
            <img className="about-picture" src={AboutPic} alt="about picture" />
          </div>
          <div className="about-me">
            <h2>About me</h2>
            <p>
              My journey in web development began out of curiosity to discover
              this field,but over time, it has become a passion that i want to
              turn into profession. I'm not just a coder; I'm a problem solver,
              a tech enthusiast, and a dedicated learner. I specialize in creating
              engaging user interfaces using frameworks like React. work with
              languages such as Laravel and have experience with databases
              MySQL. Familiar with version control Git, RESTful API, I am an
              enthusiastic learner, adaptable team player, and committed to
              contributing to the development and maintenance of dynamic web
              applications.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
