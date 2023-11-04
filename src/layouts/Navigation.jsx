import { useEffect, useRef, useState } from 'react';
import AnchorLink from "react-anchor-link-smooth-scroll"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import './Navigation.scss';


export const Navigation = () =>{

    const [navbar, setNavbar] = useState(false);
    //Handle scroll event
    const handleScroll = ()=>{
        let position = Math.round(window.scrollY);

        if(position >= 30){
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    }

    useEffect(()=>{
        window.addEventListener('scroll', handleScroll);

    },[]);

    //Handle menu bar event
    const navLinkRef = useRef();
    const [isShow, setIsShow] = useState(false);
    const showMenuBar = ()=>{
        navLinkRef.current.classList.add('show-links');
        setIsShow(true);
    }
    const hideMenuBar = ()=>{
        navLinkRef.current.classList.remove('show-links')
        setIsShow(false);
    }


    return (
        <nav className={navbar === false ? 'nav-bar' : 'nav-bar blured-nav'}>
            <div className='container'>
                <div className="nav-bar-content">
                    <div className='logo'>
                    <a href="/">
                        Portf<span className="logo-color">olio.</span>
                    </a>
                    </div>
                    <ul ref={navLinkRef}  className='nav-links'>
                        <li> <AnchorLink href="#home"> Home </AnchorLink></li>
                        <li><a href="#">About</a></li>
                        <li><AnchorLink href="#skills"> Skills </AnchorLink></li>
                        <li> <AnchorLink href='#project'> Projects </AnchorLink></li>
                        <li> <AnchorLink href='#contact'> Contact </AnchorLink></li>
                    </ul>
                    <div className="menu-bar">
                        <FontAwesomeIcon  onClick={showMenuBar} className={ isShow == false ? 'show' : 'hide'}  icon={faBars} style={{color: "#4ee29f",}} size='xl' />
                        <FontAwesomeIcon  onClick={hideMenuBar} className={ isShow == true ? 'show' : 'hide'}  icon={faXmark} style={{color: "#4ee29f",}} size='xl'/>
                    </div>
                </div>
            </div>
        </nav>
    );
}