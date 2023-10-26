import './Dock.scss';

import { Link } from 'react-router-dom';

import world from '../../assets/icons/earth.svg';
import ship from '../../assets/icons/spaceship.svg';
import astronaut from '../../assets/icons/astronaut.svg';

function Dock() {
    
    return (
        <section className='dock'>
            <Link to='/' className='dock__block'>
                <img src={world}></img>
                <p className='dock__block-writing'>
                    Home
                </p>
            </Link>
            <div className='dock__block'>
                <img src={ship}></img>
                <p className='dock__block-writing'>
                    My Trips
                </p>
            </div>
            <div className='dock__block'>
                <img src={astronaut}></img>
                <p className='dock__block-writing'>
                    Profile
                </p>
            </div>
        </section>
    )
}

export default Dock;