import './ShoppingCart.css'
import Navbar from '../home/navbar/Navbar'
import Footer from '../home/footer/Footer'
import ShoppingCartItem from './ShoppingCartItem'

const ShoppingCart = ({ shoppingCart }) => {

    let cartTotal = 0


    return (
        <div className="shopping-cart-page">

            <Navbar />

            <div className="shopping-cart-titles">
                <h1>maybe it's time to get some off the screen onto your feet?</h1>
                <h3>checking out has never felt easier, follow the 3 step kick checkout </h3>
            </div>

            <div className="shopping-cart">
                <h2>Shopping Cart</h2>

                {/* <ShoppingCartItem />
                <ShoppingCartItem />
                <ShoppingCartItem /> */}

                {console.log(shoppingCart)}
                {shoppingCart.map((cartItem) => {
                    cartTotal += cartItem.price
                    return <ShoppingCartItem {...cartItem} />
                })}


                <div className="cart-totals">
                    <hr />

                    <div className="shipping-total">
                        <h5>Shipping</h5>
                        <h5>$0.00</h5>
                    </div>
                    <div className="subtotal-total">
                        <h5>Subtotal</h5>
                        <h5>${cartTotal}</h5>
                    </div>

                    <hr />
                    <div className="shopping-cart-total">
                        <h4>Total</h4>
                        <h4>${cartTotal}</h4>
                    </div>

                </div>
            </div>

            {/* <hr />
            <div className="cart-totals">
                <div className="shipping-total">
                    <h5>Shipping</h5>
                    <h5>$0.00</h5>
                </div>
                <div className="subtotal-total">
                    <h5>Subtotal</h5>
                    <h5>$387.00</h5>
                </div>
            </div>
            <hr />
            <div className="shopping-cart-total">
                <h4>Total</h4>
                <h4>$387.00</h4>
            </div> */}

            <Footer />
        </div>


    )
}

export default ShoppingCart