/* eslint-disable react/prop-types */

import KicksCard from './kicks-card/KicksCard'
import './KicksGrid.css'


const KicksGrid = ({ title, kicks, shoppingCart }) => {
    return (
        <div className="kicksgrid">
            <h3>{title}</h3>
            <div className="kicks-cards">
                {kicks.map((kick) => {
                    return < KicksCard key={kick.id} {...kick} shoppingCart={shoppingCart} />
                })}
            </div>
        </div>
    )
}

export default KicksGrid