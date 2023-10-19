import ex from '../../assets/icons/EX.svg';
import './CalendarModal.scss';

function CalendarModal({setPrice, setTravelDates, showCalendarModal, setShowCalendarModal}) {
    const dates = [
        {
            id: 1,
            date: 'June 2123 - Jan 2124',
            price: 1300
        },
        {
            id: 2,
            date: 'July 2123 - Feb 2124',
            price: 1500
        },
        {
            id: 3,
            date: 'Aug 2123 - April 2124',
            price: 2000
        },
        {
            id: 4, 
            date: 'Sept 2123 - June 2124',
            price: 1500
        },
        {
            id: 5,
            date: 'Oct 2123 - Sept 2124',
            price: 1000
        }
    ];

    function handleCalendarChoice(name, moneyyy) {
        setTravelDates(name);
        setShowCalendarModal(false);
        setPrice((prev) => prev += moneyyy);
    }

    return (
        <section className={showCalendarModal ? 'calendar-modal' : 'off'}>
            <div className='calendar-modal__card'>
                <div className='calendar-modal__card-top'>
                    <img onClick={ () => setShowCalendarModal(false) } className='calendar-modal__icon' src={ex}></img>
                </div>
                <h2 className='calendar-modal__heading'>
                    Available Dates*
                </h2>
                <ul className='calendar-modal__dates'>
                    {
                        dates.map( day => {
                            return <li onClick={ () => handleCalendarChoice(day.date, day.price)} key={day.id} className='calendar-modal__date'>{day.date}</li>
                        })
                    }
                </ul>

                <p className='calendar-modal__description'>
                    *Prices and travel times vary depending on the time of the year due to the changes in distance between Earth and Mars.
                </p>
            </div>
        </section>
    )
}

export default CalendarModal;