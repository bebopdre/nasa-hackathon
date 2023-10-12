import TopNav from '../../components/TopNav/TopNav';
import './ChooseDates.scss';

function ChooseDates() {
    return (
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
            
        </main>
    )
}

export default ChooseDates;