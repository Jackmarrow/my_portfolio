import {Navigation} from '../../layouts/Navigation';
import profilePic from '../../assets/images/profile_pic.jpg';

export function Home(){

    return(
        <>
           <Navigation/> 
           <img width={500} src={profilePic} alt="profile picture black and white" />
        </>
    );
}

;