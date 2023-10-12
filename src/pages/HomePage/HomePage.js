import './HomePage.scss';

function HomePage() {
    return (
        <main className='home-page'>
            <section className='home-page__welcome sky'>
                <div className='stars'></div>
                <div className='stars1'></div>
                <div className='stars1'></div>
                <div className='shooting-stars'></div>
                <h1 className='home-page__welcome-heading'>
                    Welcome!
                </h1>
            </section>
        </main>
    )
}

export default HomePage;