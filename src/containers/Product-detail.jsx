import React from "react";
import ProductInfo from "../components/productInfo";
import '../styles/Product-detail.scss';

const Product_detail = () => {
    return(
        <aside className="product-detail">
            <div className="product-detail-close">
                <img src="./icons/icon_close.png" alt="close" />
            </div>
           <ProductInfo/>
        </aside>
    )
}

export default Product_detail;