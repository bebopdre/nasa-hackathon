import Buttons from '../../components/Buttons/Buttons';
import TopNav from '../../components/TopNav/TopNav';
import './ChooseDates.scss';

import calendar from '../../assets/icons/Calendar white.svg';

import { useState } from 'react';
import Modal from '../../components/Modal/Modal';

function ChooseDates() {
    const [numPassengers, setNumPassengers] = useState(0);
    const [showCalendarModal, setShowCalendarModal] = useState(false);

    return (
        <>
            <Modal type={'calendar'} showCalendarModal={showCalendarModal} setShowCalendarModal={setShowCalendarModal}/>
            <main className='choose-dates'>
                <TopNav centered={false} />
                <section className='choose-dates__description'>
                    <h2 className='choose-dates__description-heading'>
                        Pick your Travel Dates
                    </h2>
                    <p className='choose-dates__description-writing'>
                    Good choice! The scenic route aboard Voyager 123 is a life-changing, 7-10 month experience of luxury in space, complete with breathtaking views of the cosmos from every window.
                    </p>
                </section>

                <section className='choose-dates__picker'>
                    <h2 className='choose-dates__picker-heading'>
                        Number of Passengers
                    </h2>

                    <div className='choose-dates__picker-box'>
                        <div className={(numPassengers === 0) ? 'choose-dates__picker-box-pm choose-dates__picker-box-pm--phantom' : 'off'}>
                            -
                        </div>
                        <div onClick={() => setNumPassengers(numPassengers - 1)} className={(numPassengers > 0) ? 'choose-dates__picker-box-pm' : 'off'}>
                            -
                        </div>
                        <div className='choose-dates__picker-box-passengers'>
                            {numPassengers}
                        </div>
                        <div onClick={() => setNumPassengers(numPassengers + 1)} className='choose-dates__picker-box-pm'>
                            +
                        </div>
                    </div>
                </section>

                <section className='choose-dates__dates'>
                    <h2 className='choose-dates__dates-heading'>
                        Select Travel Dates
                    </h2>

                    <div className='choose-dates__dates-box'>
                        <p></p>
                        <img onClick={() => showCalendarModal(true)} className='choose-dates__dates-calendar' src={calendar} />
                    </div>
                </section>
                <Buttons directions={['Previous', 'Next']} />
            </main>
        </>
        
    )
}

export default ChooseDates;