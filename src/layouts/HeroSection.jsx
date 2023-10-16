
import './HeroSection.scss';
import profilePic from '../assets/images/profile_pic.jpg';
import { PrimaryButton } from './components/PrimaryButton';

export function HeroSection(){
    return(
        <section className="hero-section">
           <div className="container">
            <div className="about-container">
                <div className="about-desc">
                    <h1>Nice to meet you! <br/> I'm <span className='my-name'>Oussama Boussouf</span></h1>
                    <p>I am front-end developer passionate about <br/> building accessible web apps. </p>
                    <PrimaryButton/>
                </div>
                <div>
                    <img className='profile-image' width={400}  src={profilePic} alt="profile picture" />
                </div>
            </div>
           </div>
        </section>
    )
}