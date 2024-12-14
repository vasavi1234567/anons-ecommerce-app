import './index.css'

const HeaderTop = () => (
    <div className="header-top-container">
        <div className="icons-container">
            <img src="/assets/facebook.png" alt="facebook" />
            <img src="/assets/twitter.png" alt="twitter" />
            <img src="/assets/instagram.png" alt="instagram" />
            <img src="/assets/linkedin.png" alt="linkedin" />
        </div>
        <p className="header-top-content">FREE SHIPPING THIS WEEK ORDER OVER - $55</p>
        <div className="select-containers">
            <select className="select">
                <option>USD $</option>
                <option>EUR €</option>
            </select>
            <select className="select">
                <option>ENGLISH</option>
                <option>Español</option>
                <option>Français</option>
            </select>
        </div>
    </div>
)

export default HeaderTop
