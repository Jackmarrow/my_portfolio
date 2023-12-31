import "./Project.scss";
import { ProjectWidget } from "./components/ProjectWidget";
import ImageProjectOne from "../assets/images/project_images/LGMS-1.png";
import ImageProjectTwo from "../assets/images/project_images/E-commerce.png";

export function Project() {
  const projects = [
    {
        preview: '',
        code:'https://github.com/saidlionsgeeek/lionsgeek_management',
        title:"LIONSGEEK MANAGEMENT",
        lang: ["Laravel", "MySQL", "Tailwind"],
        image:ImageProjectOne,
    }, 
    {
        preview:'https://fashe-fantasy.vercel.app/',
        code:'https://github.com/Jackmarrow/cs_projet_react_oussama_boussouf',
        title:"E-COMMERCE",
        lang: ["React", "Scss", "Bootstrap"],
        image: ImageProjectTwo,
    }
];

  return (
    <section id="project" className="project-section">
      <div className="container">
        <h1>Projects</h1>
        <div className="project-container">
            {projects.map(project => <ProjectWidget props={project}/>)}
        </div>
      </div>
    </section>
  );
}
