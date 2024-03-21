/* eslint-disable react/prop-types */

import './KicksCard.css'

// const shoppingCart = []

const KicksCard = ({ img, name, category, price, shoppingCart }) => {

    const addToCart = () => {
        let itemToAdd = { img, name, category, price }
        shoppingCart.push(itemToAdd)
        console.log(shoppingCart)
    }


    return (
        <div className="kicksCard">
            <div className="image">
                <img src={img} alt={name} />
            </div>

            <div className="item-description">
                <div className="description">
                    <div className="item-name">
                        <h4>{name}</h4>
                        <h5>{category}</h5>
                    </div>

                    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="19" viewBox="0 0 21 19" fill="none">
                        <path d="M17.15 11.34C18.5655 9.9676 20 8.3226 20 6.17C20 4.79883 19.4495 3.48382 18.4696 2.51426C17.4898 1.54469 16.1608 1 14.775 1C13.103 1 11.925 1.47 10.5 2.88C9.075 1.47 7.897 1 6.225 1C4.83924 1 3.51024 1.54469 2.53037 2.51426C1.55049 3.48382 1 4.79883 1 6.17C1 8.332 2.425 9.977 3.85 11.34L10.5 17.92L17.15 11.34Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>

                <div className="price-cta">
                    <h5>${price}</h5>
                    <button className="cart-btn" onClick={() => addToCart()}>Add to Cart</button>
                </div>
            </div>
        </div>
    )
}

export default KicksCard