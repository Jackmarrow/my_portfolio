import './Navigation.scss';


export const Navigation = () =>{

    return (
        <nav className='nav-bar'>
            <div className='container'>
                <div className="nav-bar-content">
                    <div className='logo'>
                    <a href="/">
                        Portf<span className="logo-color">olio.</span>
                    </a>
                    </div>
                    <ul className='nav-links'>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Skills</a></li>
                        <li><a href="#">Projects</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}