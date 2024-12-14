import './index.css'

const HeaderMain = () => (
    <div className="header-main-container">
        <img src="/assets/anon.png" alt="anon-icon" />
        <div className="input-container">
            <input type="text" placeholder="Enter your product name..." />
        </div>
        <div className="icons-container">
            <img src="/assets/profile.png" alt="profile" />
            <img src="/assets/heart.png" alt="heart" />
            <img src="/assets/cart.png" alt="cart" />
        </div>
    </div>
)

export default HeaderMain
