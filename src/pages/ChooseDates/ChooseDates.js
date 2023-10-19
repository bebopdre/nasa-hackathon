import Buttons from '../../components/Buttons/Buttons';
import TopNav from '../../components/TopNav/TopNav';
import './ChooseDates.scss';

import calendar from '../../assets/icons/Calendar white.svg';

import { useState, useEffect } from 'react';
import CalendarModal from '../../components/CalendarModal/CalendarModal';

function ChooseDates() {
    const [numPassengers, setNumPassengers] = useState(0);
    const [showCalendarModal, setShowCalendarModal] = useState(false);
    const [travelDates, setTravelDates] = useState('');
    const [price, setPrice] = useState(0);

    useEffect( () => {

        setPrice((prev) => prev += (numPassengers * 500));

    }, [numPassengers])

    return (
        <>
            <CalendarModal setPrice={setPrice} setTravelDates={setTravelDates} showCalendarModal={showCalendarModal} setShowCalendarModal={setShowCalendarModal}/>
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
                        <p>{travelDates}</p>
                        <img onClick={() => setShowCalendarModal(true)} className='choose-dates__dates-calendar' src={calendar} />
                    </div>
                </section>

                <section className='choose-dates__prices'>
                    <h2 className='choose-dates__prices-heading'>
                        Prices starting at:
                    </h2>

                    <div className='choose-dates__prices-box'>
                        <p>ñ</p>
                        <p>{price}.00</p>
                        <p>per person</p>
                    </div>
                </section>
                <Buttons directions={['Previous', 'Next']} />
            </main>
        </>
        
    )
}

export default ChooseDates;