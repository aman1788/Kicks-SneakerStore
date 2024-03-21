import './Faqs.css'
import Faq from './faq/Faq'
import faqs from './faqs-data'


const Faqs = () => {
    return (
        <div className="faq-container">
            <h3>Frequently Asked Questions</h3>
            <div className="faqs">
                {faqs.map((faq) => {
                    return <Faq key={faq.id} {...faq} />
                })}
            </div>
        </div>
    )
}

export default Faqs