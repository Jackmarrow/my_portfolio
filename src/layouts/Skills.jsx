import React, { useEffect, useRef } from "react";
import "./Skills.scss";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function Skills() {

  const languages = useRef(null);

  const skills = [
    "HTML",
    "CSS",
    "SASS",
    "BOOTSTRAP",
    "TAILWIND",
    "JAVASCRIPT",
    "REACT",
    "LARAVEL",
    "MYSQL",
    "GIT",
    "GITHUB",
  ];

  // useEffect(() => {
  //   const observer = new IntersectionObserver((entries)=>{
  //     if(entries[0].isIntersecting){
  //       console.log('yes');
  //       gsap.from('.text', {stagger: 0.4,duration: 1 , opacity: 0, x: -100})
  //     } else{
  //       console.log('no');
  //     }


  //   });
  //   observer.observe(languages.current);
  // }, []);

  useEffect(()=>{
    let ctx = gsap.context(()=>{
      gsap.from('.text', {scrollTrigger:".text",stagger: 0.4,duration: 1 , opacity: 0, x: -100})
    
    }, languages);
    
    return ()=> ctx.revert();

  },[]);

  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="skills-container">
          <h1>Skills</h1>
          <div ref={languages} className="grid-system">
            {skills.map((ele) => (
              <p className="text">
                {ele}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
