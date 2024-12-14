import './index.css'

const MainContainer = () => (
    <div className="main-container">
        <div className="main-image-container">
            <img className="large-main-image d-sm-none" src="/assets/mainImage.png" alt="main-image" />
            <img className="small-main-image d-md-flex" src="/assets/bannerImage.png" alt="banner-image" />
        </div>
    </div>
)

export default MainContainer
