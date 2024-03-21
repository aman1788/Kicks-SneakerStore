import './Reviews.css'
import { useState } from 'react'
import reviews from './reviewsData'
import Review from './review/Review'


const Reviews = () => {

    const [index, setIndex] = useState(0)

    const checkIndex = (number) => {
        if (number > reviews.length - 1) {
            return 0
        } else if (number < 0) {
            return reviews.length - 1
        } else {
            return number
        }
    }

    const nextReview = () => {
        setIndex((index) => {
            let newIndex = index + 1
            return checkIndex(newIndex)
        })
    }

    const previousReview = () => {
        setIndex((index) => {
            let newIndex = index - 1
            return checkIndex(newIndex)
        })
    }


    return (
        <div className="review-container">
            <h3>What do they say about Kicks?</h3>

            <div className="reviews">
                {/* prev-btn */}
                <button onClick={previousReview}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="28" viewBox="0 0 17 28" fill="none">
                        <path d="M16 27L2 14L16 1" stroke="black" strokeWidth="2" />
                    </svg>
                </button>

                {/* reviews */}
                <div>
                    <Review reviews={reviews} index={index} />
                </div>

                {/* next-btn */}
                <button onClick={nextReview}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="28" viewBox="0 0 17 28" fill="none">
                        <path d="M1 1L15 14L1 27" stroke="black" strokeWidth="2" />
                    </svg>
                </button>
            </div>
        </div>
    )
}

export default Reviews
