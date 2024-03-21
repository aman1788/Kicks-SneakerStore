import './Banner.css'


const Banner = () => {
    return (
        <div className="banner">
            <div className="bgd">
                <svg width="1269" height="446" viewBox="0 0 1269 446" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="1269" height="446" rx="5" fill="url(#paint0_linear_66_1275)" />
                    <defs>
                        <linearGradient id="paint0_linear_66_1275" x1="676.5" y1="20.5" x2="794" y2="362.5" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#F7F7F7" />
                            <stop offset="1" stopColor="#B0B0B0" stopOpacity="0" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>
            <img src="air-vapormax-plus.png" alt="" />
            <div className="content">
                <h2>Sneakers Speak Louder</h2>
                <h4>Explore our curated collection of Sneaker Kicks</h4>
                <button>See more</button>
            </div>
        </div>
    )
}

export default Banner