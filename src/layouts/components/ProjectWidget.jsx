import './ProjectWidget.scss'
import LinkButton from './LinkButton'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEye } from '@fortawesome/free-solid-svg-icons'

export function ProjectWidget({props}){

    return(
        <div className='project-wrapper'>
            <div className='image-container'>
                <img className='project-image' src={props.image} alt="image project" />
                <div className='overlay'></div>
                <div className='btn-group'>
                    <a href={props.preview} target='_blank'>
                        <LinkButton><FontAwesomeIcon icon={faEye} size='xl'/> Preview</LinkButton>
                    </a>
                    <a href={props.code} target='_blank'>
                        <LinkButton> <FontAwesomeIcon icon={faGithub} size='xl'/> Code</LinkButton>
                    </a>
                </div>
            </div>
            <h3>{props.title}</h3>
            <div className='technology'>
                {
                    props.lang.map( (tech, index) =>{
                        return <p key={index}>{tech}</p>
                    })
                }
            </div>
        </div>
    )
}