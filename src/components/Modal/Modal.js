import './Modal.scss';

import x from '../../assets/icons/EX.svg';

function Modal({type, showCalendarModal, setShowCalendarModal, writing, show, setInfoModal}) {
    return (
        <section className={show ? 'modal' : 'off'}>
            <div className='modal__card'>
                <div className='modal__card-top'>
                    <img onClick={() => setInfoModal(false)} className='modal__icon' src={x}></img>
                </div>
                <p className='modal__writing'>{writing}</p>
            </div>
        </section>
    )
}

export default Modal;