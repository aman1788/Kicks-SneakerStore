/* eslint-disable react/no-unescaped-entities */

import './Hero.css'

import airjordan3 from '../../../assets/air-jordan-3.png'

const Hero = () => {
    return (
        <div className="hero">

            {/* image */}
            <img src={airjordan3} alt="air-jordan-3" />

            <div className="cta">
                <div className="caption">
                    <h3>"Air Jordan" 3</h3>
                    <h4>Retro</h4>
                </div>

                <button>Shop now</button>

            </div>

        </div>
    )
}

export default Hero