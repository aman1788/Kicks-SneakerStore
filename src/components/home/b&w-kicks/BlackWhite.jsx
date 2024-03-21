/* eslint-disable react/prop-types */

import './BlackWhite.css'
import BnWCard from './b&w-card/BnWCard'
import { useRef } from 'react';

const BlackWhite = ({ kicks }) => {

    const cardsRef = useRef(null);

    const nextCard = () => {
        if (cardsRef.current) {
            const cardWidth = cardsRef.current.firstElementChild.clientWidth;
            const scrollAmount = cardWidth; // Scrolled by one card...
            cardsRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    const prevCard = () => {
        if (cardsRef.current) {
            const cardWidth = cardsRef.current.firstElementChild.clientWidth;
            const scrollAmount = -cardWidth;
            cardsRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    // const nextCard = () => {
    //     const slider = document.querySelector('.bnwcards');
    //     const width = slider.offsetWidth;
    //     slider.scrollLeft += width;

    // };
    // const prevCard = () => {
    //     const slider = document.querySelector('.bnwcards');
    //     const width = slider.offsetWidth;
    //     slider.scrollLeft -= width;

    // };


    return (
        <div className="bnw-kicks">
            <h3>B&W KICKS</h3>
            <div className="kicks-slider">
                {/* background */}
                <div className="background">
                    <svg width="1440" height="493" viewBox="0 0 1440 493" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="1440" height="493" fill="url(#paint0_linear_81_1491)" />
                        <defs>
                            <linearGradient id="paint0_linear_81_1491" x1="777" y1="127.748" x2="649.49" y2="357.048" gradientUnits="userSpaceOnUse">
                                <stop stopOpacity="0" />
                                <stop offset="1" stopColor="#F1F1F1" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>

                {/* prev btn */}
                <button className='prev-btn' onClick={prevCard}>
                    <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="27" cy="27" r="27" fill="#ECECEC" fillOpacity="0.85" />
                        <path d="M31.5 36L22.5 27L31.5 18" stroke="#6C6C6C" strokeWidth="2" />
                    </svg>
                </button>

                {/* cards */}
                <div className="bnwcards" ref={cardsRef}>
                    {kicks.map((kick) => {
                        return <BnWCard key={kick.id} {...kick} />
                    })}

                </div>
                {/* next btn */}
                <button className='next-btn' onClick={nextCard}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="54" height="54" viewBox="0 0 54 54" fill="none">
                        <circle cx="27" cy="27" r="27" fill="#ECECEC" fillOpacity="0.85" />
                        <path d="M22.5 18L31.5 27L22.5 36" stroke="#6C6C6C" strokeWidth="2" />
                    </svg>
                </button>
            </div>
        </div>
    )
}

export default BlackWhite