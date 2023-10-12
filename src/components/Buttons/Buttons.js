import './Buttons.scss';

function Buttons({directions}) {
    return (
        <div className='buttons'>
            {
                directions.map( (dir, index) => {
                    return (
                        <button key={index} className='buttons__button'>
                            {dir}
                        </button>
                    )
                })
            }
        </div>
    )
}

export default Buttons;