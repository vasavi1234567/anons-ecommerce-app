import './index.css'

const ProductsContainer = () => (
    <>
        <div className="products-container">
            <div className="category-container">
                <div className="category">
                    <img src="/assets/category.png" alt="category" />
                </div>
                <div className="best-sellers">
                    <img src="/assets/bestSellers.png" alt="best-sellers" />
                </div>
            </div>
            <div className="right-container">
                <div>
                    <img src="/assets/topContainer.png" alt="top-container" />
                </div>
                <div>
                    <img src="/assets/middleContainer.png" alt="middle-container" />
                </div>
                <div>
                    <img src="/assets/bottomContainer.png" alt="bottom-container" />
                </div>
            </div>
        </div>
        <div className="small-container-products">
            <div>
                <img src="/assets/mobile.png" alt="mobile" />
            </div>
            <div>
                <img src="/assets/newArrivals.png" alt="new-arrivals" />
            </div>
            <div>
                <img src="/assets/trending.png" alt="trending" />
            </div>
            <div>
                <img src="/assets/topRated.png" alt="top-rated" />
            </div>
            <div>
                <img src="/assets/dealOfDay.png" alt="deal-of-day" />
            </div>
            <div>
                <img src="/assets/newProducts.png" alt="new-products" />
            </div>
        </div>
    </>
)

export default ProductsContainer
