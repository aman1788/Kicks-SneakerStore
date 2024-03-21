/* eslint-disable react/prop-types */

import './Slogan.css'

const Slogan = ({ main, sub }) => {
    return (
        <div className="slogan">
            <h2>{main}</h2>
            <h4>{sub}</h4>
        </div>
    )
}

export default Slogan