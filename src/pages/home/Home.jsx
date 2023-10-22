import {Navigation} from '../../layouts/Navigation';
import { HeroSection } from '../../layouts/HeroSection';
import { useState } from 'react';
import { Skills } from '../../layouts/Skills';

export function Home(){

    return(
        <>
           <Navigation/> 
           <HeroSection/>
           <Skills/>
        </>
    );
}

;