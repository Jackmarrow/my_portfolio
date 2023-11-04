import './Project.scss'
import { ProjectWidget } from './components/ProjectWidget'
import ImageProjectOne from '../assets/images/project_images/project_1.jpg'
import ImageProjectTwo from '../assets/images/project_images/project_2.jpg'

export function Project(){
    return(
        <section id='project' className='project-section'>
            <div className="container">
                <h1>Projects</h1>
                <div className='project-container'>
                    <ProjectWidget props={{image:ImageProjectOne, title: 'DESIGN PORTFOLIO', lang:['HTML','JAVASCRIPT'] }} />
                    <ProjectWidget props={{image:ImageProjectTwo, title: 'ENTERTAINMENT WEB APP', lang:['HTML','CSS','JAVASCRIPT'] }} />
                    <ProjectWidget props={{image:ImageProjectOne, title: 'DESIGN PORTFOLIO', lang:['HTML','JAVASCRIPT'] }} />
                    <ProjectWidget props={{image:ImageProjectTwo, title: 'ENTERTAINMENT WEB APP', lang:['HTML','CSS','JAVASCRIPT'] }} />
                </div>
            </div>
        </section>
    )
}