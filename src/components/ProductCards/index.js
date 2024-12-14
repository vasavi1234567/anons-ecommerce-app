import './index.css'

const ProductCards = () => (
    <>
        <ul className="products-list">
            <li className="product-card">
                <img className="product" src="/assets/product1.png" alt="product" />
                <div className="product-content">
                    <h1 className="product-name">DRESS & FROCK</h1>
                    <p className="show-all">Show All</p>
                </div>
                <p>(53)</p>
            </li>
            <li className="product-card d-sm-none">
                <img className="product" src="/assets/product2.png" alt="product" />
                <div className="product-content">
                    <h1 className="product-name">WINTER WEAR</h1>
                    <p className="show-all">Show All</p>
                </div>
                <p>(58)</p>
            </li>
            <li className="product-card d-sm-none">
                <img className="product" src="/assets/product3.png" alt="product" />
                <div className="product-content">
                    <h1 className="product-name">GLASSES & LENS</h1>
                    <p className="show-all">Show All</p>
                </div>
                <p>(68)</p>
            </li>
            <li className="product-card d-sm-none">
                <img className="product" src="/assets/product4.png" alt="product" />
                <div className="product-content">
                    <h1 className="product-name">SHORTS & JEANS</h1>
                    <p className="show-all">Show All</p>
                </div>
                <p>(84)</p>
            </li>
        </ul>
        <div className="small-product-card">
            <img className="product" src="/assets/product1.png" alt="product" />
            <div className="product-content">
                <h1 className="product-name">DRESS & FROCK</h1>
                <p className="show-all">Show All</p>
            </div>
            <p>(53)</p>
        </div>
    </>
)

export default ProductCards
