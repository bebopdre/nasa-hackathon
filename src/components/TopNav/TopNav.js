import './TopNav.scss';

import logo from '../../assets/logo/logoFinal.png';
import hamburger from '../../assets/icons/hamburger-menu.png';

function TopNav({centered}){
    return (
        <header className={centered ? 'topnav-centered' : 'topnav-uncentered'}>
            <div className='topnav__top'>
                <div className='topnav__top-ghost'></div>
                <img className='topnav__top-logo' src={logo}></img>
                <img className='topnav__top-hamburger' src={hamburger}></img>
            </div>
            <h1 className='topnav__heading'>Explore Mars</h1>
        </header>
    )
}

export default TopNav;