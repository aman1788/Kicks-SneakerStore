/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */

import './Review.css'


const Review = ({ reviews, index }) => {
    const { name, img, rating, review } = reviews[index]

    const starRatings = [];
    for (let i = 0; i < rating; i++) {
        starRatings.push(<i className="fa fa-star" key={i}></i>);
    }

    return (
        <div className="review">
            <img src={img} alt="" className="review-img" />
            <div className="rev-description">
                <div>
                    <h5>{name}</h5>
                    <div className='stars'>{starRatings}</div>
                    {/* <svg xmlns="http://www.w3.org/2000/svg" width="78" height="13" viewBox="0 0 78 13" fill="none">
                        <path d="M7 10.4479L11.326 13L10.178 8.19L14 4.95368L8.967 4.53632L7 0L5.033 4.53632L0 4.95368L3.822 8.19L2.674 13L7 10.4479Z" fill="black" />
                        <path d="M23 10.4479L27.326 13L26.178 8.19L30 4.95368L24.967 4.53632L23 0L21.033 4.53632L16 4.95368L19.822 8.19L18.674 13L23 10.4479Z" fill="black" />
                        <path d="M39 10.4479L43.326 13L42.178 8.19L46 4.95368L40.967 4.53632L39 0L37.033 4.53632L32 4.95368L35.822 8.19L34.674 13L39 10.4479Z" fill="black" />
                        <path d="M55 10.4479L59.326 13L58.178 8.19L62 4.95368L56.967 4.53632L55 0L53.033 4.53632L48 4.95368L51.822 8.19L50.674 13L55 10.4479Z" fill="black" />
                        <path d="M71.2541 10.0173L71 9.86737L70.7459 10.0173L67.4335 11.9714L68.3083 8.30608L68.3797 8.00707L68.1451 7.80842L65.2444 5.35221L69.0743 5.03461L69.3726 5.00987L69.4917 4.73523L71 1.25684L72.5083 4.73523L72.6274 5.00987L72.9257 5.03461L76.7556 5.35221L73.8549 7.80842L73.6203 8.00707L73.6917 8.30608L74.5665 11.9714L71.2541 10.0173Z" stroke="black" />
                    </svg> */}
                </div>
                <p>{review}</p>
            </div>
        </div>
    )
}

export default Review