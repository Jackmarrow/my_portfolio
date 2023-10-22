
import './HeroSection.scss';
import profilePic from '../assets/images/profile_pic.jpg';
import { PrimaryButton } from './components/PrimaryButton';
import { SecondaryButton } from './components/SecondaryButton';

export function HeroSection(){
    return(
        <section className="hero-section">
           <div className="container">
            <div className="about-container">
                <div className="about-desc">
                    <h1>Nice to meet you! <br/> I'm <span className='my-name'>Oussama Boussouf</span></h1>
                    <p>I am front-end developer passionate about <br/> building accessible web apps. </p>
                    <div className='btn-group'>
                        <PrimaryButton content={'Contact Me'}/>
                        <SecondaryButton content={'Download Cv'} />
                    </div>
                </div>
                <div>
                    <img className='profile-image' src={profilePic} alt="profile picture" />
                </div>
            </div>
           </div>
        </section>
    )
}