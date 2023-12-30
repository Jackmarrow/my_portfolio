import './ProjectWidget.scss'
import LinkButton from './LinkButton'
import gsap from 'gsap'
import imageProject from '../../assets/images/project_images/project_1.jpg'
import { useEffect } from 'react'

export function ProjectWidget({props}){

    useEffect(()=>{

    },[]);

    return(
        <div className='project-wrapper'>
            <div className='image-container'>
                <img className='project-image' src={props.image} alt="image project" />
                <div className='overlay'></div>
                <div className='btn-group'>
                    <LinkButton>Preview</LinkButton>
                    <LinkButton>Code</LinkButton>
                </div>
            </div>
            <h3>{props.title}</h3>
            <div className='technology'>
                {
                    props.lang.map( ele =>{
                        return <p key={ele}>{ele}</p>
                    })
                }
            </div>
        </div>
    )
}