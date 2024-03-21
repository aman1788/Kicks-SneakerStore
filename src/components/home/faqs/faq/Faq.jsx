/* eslint-disable react/prop-types */

import { useState } from 'react'
import './Faq.css'


const Faq = ({ question, answer }) => {

    const [expanded, setExpanded] = useState(false)

    return (
        <div className="faq">
            <div className="question">
                <h4>{question}</h4>
                <button onClick={() => setExpanded(!expanded)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 17 17" fill="none">
                        <path d="M17 8.5C17 8.64389 16.9428 8.78189 16.8411 8.88364C16.7393 8.98539 16.6013 9.04255 16.4574 9.04255H9.04255V16.4574C9.04255 16.6013 8.98539 16.7393 8.88364 16.8411C8.78189 16.9428 8.64389 17 8.5 17C8.35611 17 8.21811 16.9428 8.11636 16.8411C8.01461 16.7393 7.95745 16.6013 7.95745 16.4574V9.04255H0.542553C0.398659 9.04255 0.260659 8.98539 0.15891 8.88364C0.0571616 8.78189 0 8.64389 0 8.5C0 8.35611 0.0571616 8.21811 0.15891 8.11636C0.260659 8.01461 0.398659 7.95745 0.542553 7.95745H7.95745V0.542553C7.95745 0.398659 8.01461 0.260659 8.11636 0.15891C8.21811 0.0571616 8.35611 0 8.5 0C8.64389 0 8.78189 0.0571616 8.88364 0.15891C8.98539 0.260659 9.04255 0.398659 9.04255 0.542553V7.95745H16.4574C16.6013 7.95745 16.7393 8.01461 16.8411 8.11636C16.9428 8.21811 17 8.35611 17 8.5Z" fill="black" />
                    </svg>
                </button>
            </div>

            {expanded ? (
                <div className="answer">
                    <p>{answer}</p>
                </div>
            ) : (
                <div></div>
            )}
        </div>
    )
}

export default Faq