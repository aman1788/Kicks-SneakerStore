import './Community.css'

const Community = () => {
    return (
        <div className="community">
            <div className="com-title">
                <h2>Be a part of the</h2>
                <h1>Kicks Community</h1>
                <p>Get notified on special offers and new releases!</p>
            </div>

            <div className="subscribe">
                <input type="email" name="email" placeholder='Email address' />
                <button className="sub-btn">Subscribe</button>
            </div>
        </div>

    )
}

export default Community