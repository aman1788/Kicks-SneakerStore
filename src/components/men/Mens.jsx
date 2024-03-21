import './Mens.css'
import Navbar from '../home/navbar/Navbar'
import Footer from '../home/footer/Footer'
import MensKicks from './mens-kicks/MensKicks'


const Mens = () => {
    return (
        <div className="mens-kicks">
            <Navbar />

            {/* banner */}
            <div className="mens-banner">
                {/* <img src="mens-kicks.jpg" alt="mens-banner" /> */}
            </div>

            <h2>MENS KICKS</h2>

            <MensKicks />
            <Footer />

        </div>
    )
}

export default Mens