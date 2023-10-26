import TopNav from '../../components/TopNav/TopNav';
import './ChooseSpeed.scss';

import info from '../../assets/icons/info.svg';
import arrowRight from '../../assets/icons/arrow-right.svg';
import Buttons from '../../components/Buttons/Buttons';
import checkmarkWhite from '../../assets/icons/checkmarkWhite.svg';

import { useState } from 'react';
import Modal from '../../components/Modal/Modal';
import Dock from '../../components/Dock/Dock';

const speedCards = [
    {
        id: 1,
        title: 'Direct Route',
        background: 'choose-speed__main-card choose-speed__main-card--helical',
        info: 'Thanks to its Helical engine, which utilizes the change in mass at relativistic speeds as its basis for operation,the Celeritas will get you to Mars in 12.5 minutes. You will fall asleep and wake up on The Red Planet.',
        selected: false
    },
    {
        id: 2,
        title: 'Scenic Route',
        background: 'choose-speed__main-card choose-speed__main-card--scenic',
        info: 'Take a 7-10 month scenic trip aboard Voyager 123. Experience breath-taking views of the cosmos and luxurious accommodations in this all-inclusive journey. ',
        selected: false
    }
];

function ChooseSpeed() {

    const [infoModal, setInfoModal] = useState(false);
    const [modalInfo, setModalInfo] = useState('');

    function handleInfoModal(id) {
        setModalInfo(speedCards[id-1].info);
        setInfoModal(true);
    }

    function handleSpeedSelect(id) {
        let selectedSpeed = speedCards.find( speed => (speed.id === id) );
        (selectedSpeed) ? (selectedSpeed = false) : (selectedSpeed = true);
    }

    return (
        <>
            <Modal writing={modalInfo} show={infoModal} setInfoModal={setInfoModal} />
            <main className='choose-speed'>
                <TopNav centered={false} />
                <p className='choose-speed__description'>Embark on a journey to the enigmatic Red Planet, where adventure beckons at your own pace. Choose the high-speed sprint for a thrilling arrival within hours, or indulge in a luxurious, leisurely cruise through space. Whichever you pick, the allure of Mars awaits.</p>
                <section className='choose-speed__main'>
                    <h2 className='choose-speed__main-heading'>
                        Choose your speed:
                    </h2>
                    <ul className='choose-speed__main-cards'>
                        {
                            speedCards.map( card => {
                                return (
                                    <li key={card.id} className={card.background}>
                                        <div className='choose-speed__main-card-top'>
                                            <h2 className='choose-speed__main-card-top-heading'>
                                                {card.title}
                                            </h2>
                                            <img onClick={() => handleInfoModal(card.id)} src={info}></img>
                                        </div>
                                        <div onClick={ () => handleSpeedSelect(card.id) } className='choose-speed__main-card-bottom'>
                                            <p className='choose-speed__main-card-bottom-writing'>Select</p>
                                            <img className='choose-speed__main-card-bottom-icon' src={card.selected ? checkmarkWhite : arrowRight}></img>
                                        </div>
                                    </li>
                                )
                            })
                        }
                    </ul>
                    <Buttons directions={['Previous', 'Next']} />
                </section>

            </main>
        </>
        
    )
}

export default ChooseSpeed;