import "./Women.css"
import Navbar from '../home/navbar/Navbar'
import Footer from '../home/footer/Footer'
import WomensKicks from './womens-kicks/WomensKicks'


const Women = () => {
    return (
        <div className="women-kicks">
            <Navbar />

            {/* banner */}
            <div className="women-banner">
                {/* <img src="mens-kicks.jpg" alt="mens-banner" /> */}
            </div>

            <h2>WOMENS KICKS</h2>

            <WomensKicks />
            <Footer />

        </div>
    )
}

export default Women