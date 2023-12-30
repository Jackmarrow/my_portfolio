import './Project.scss'
import { ProjectWidget } from './components/ProjectWidget'
import ImageProjectOne from '../assets/images/project_images/LGMS-1.png'
import ImageProjectTwo from '../assets/images/project_images/E-commerce.png'

export function Project(){
    return(
        <section id='project' className='project-section'>
            <div className="container">
                <h1>Projects</h1>
                <div className='project-container'>
                    <ProjectWidget props={{image:ImageProjectOne, title: 'LIONSGEEK MANAGEMENT', lang:['Laravel','MySQL', 'Tailwind'] }} />
                    <ProjectWidget props={{image:ImageProjectTwo, title: 'E-COMMERCE', lang:['React','Scss','Bootstrap'] }} />
                    {/* <ProjectWidget props={{image:ImageProjectOne, title: 'DESIGN PORTFOLIO', lang:['HTML','JAVASCRIPT'] }} />
                    <ProjectWidget props={{image:ImageProjectTwo, title: 'ENTERTAINMENT WEB APP', lang:['HTML','CSS','JAVASCRIPT'] }} /> */}
                </div>
            </div>
        </section>
    )
}