import './ShoppingCartItem.css'


const ShoppingCartItem = ({ img, name, category, price }) => {
    return (
        <div className="ShoppingCartItem">

            {/* item img */}
            <div className="cart-item-img">
                <img src={img} alt={name} />
            </div>

            {/* item description */}
            <div className="cart-item-description">
                <h5>{name}</h5>
                <h6>{category}</h6>
            </div>

            {/* item price */}
            <h5 className="cart-item-price">{price}</h5>

            {/* item quantity */}
            <div className="cart-item-quantity">
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="2" viewBox="0 0 15 2" fill="none">
                    <path d="M15 0.75C15 0.948912 14.9496 1.13968 14.8598 1.28033C14.77 1.42098 14.6482 1.5 14.5213 1.5H0.478723C0.351758 1.5 0.229993 1.42098 0.140215 1.28033C0.0504367 1.13968 0 0.948912 0 0.75C0 0.551088 0.0504367 0.360323 0.140215 0.21967C0.229993 0.079018 0.351758 0 0.478723 0H14.5213C14.6482 0 14.77 0.079018 14.8598 0.21967C14.9496 0.360323 15 0.551088 15 0.75Z" fill="black" />
                </svg>
                <h3>1</h3>
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                    <path d="M8 0.5C8 0.367392 7.94732 0.240215 7.85355 0.146447C7.75979 0.0526785 7.63261 0 7.5 0C7.36739 0 7.24021 0.0526785 7.14645 0.146447C7.05268 0.240215 7 0.367392 7 0.5V7H0.5C0.367392 7 0.240215 7.05268 0.146447 7.14645C0.0526785 7.24021 0 7.36739 0 7.5C0 7.63261 0.0526785 7.75979 0.146447 7.85355C0.240215 7.94732 0.367392 8 0.5 8H7V14.5C7 14.6326 7.05268 14.7598 7.14645 14.8536C7.24021 14.9473 7.36739 15 7.5 15C7.63261 15 7.75979 14.9473 7.85355 14.8536C7.94732 14.7598 8 14.6326 8 14.5V8H14.5C14.6326 8 14.7598 7.94732 14.8536 7.85355C14.9473 7.75979 15 7.63261 15 7.5C15 7.36739 14.9473 7.24021 14.8536 7.14645C14.7598 7.05268 14.6326 7 14.5 7H8V0.5Z" fill="black" />
                </svg>
            </div>

        </div>
    )
}

export default ShoppingCartItem