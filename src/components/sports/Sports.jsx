import "./Sports.css"
import Navbar from '../home/navbar/Navbar'
import Footer from '../home/footer/Footer'
import SportsKicks from './sports-kicks/SportsKicks'


const Sports = () => {
    return (
        <div className="sports-kicks">
            <Navbar />

            {/* banner */}
            <div className="sports-banner">
                {/* <img src="mens-kicks.jpg" alt="mens-banner" /> */}
            </div>

            <h2>SPORTS KICKS</h2>

            <SportsKicks />
            <Footer />

        </div>
    )
}

export default Sports