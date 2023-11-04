import './ProjectWidget.scss'
import imageProject from '../../assets/images/project_images/project_1.jpg'

export function ProjectWidget({props}){
    return(
        <div className='project-wrapper'>
            <img className='project-image' src={props.image} alt="image project" />
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