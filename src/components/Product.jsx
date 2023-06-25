import React from 'react'
import { FaEllipsis} from "react-icons/fa6";
import {BsFillHeartFill } from "react-icons/bs"

function Product(props) {
    const { id,img, title, desc,like } = props;
  return (
        <div id={id} className="product-item">
    <div className="product-item-header">
        <div>
        <FaEllipsis/>
        </div>
    </div>
    <div className="product-img">
        <img src={img} alt="" />
    </div>
    <div className="product-desc">
        <h3>{title}</h3>
        <p>{desc}</p>

        <div className="product-item-footer">
        <div className="item-likes">
        <BsFillHeartFill/> {like}
        </div>
    </div>
    </div>
</div>
  )
}

export default Product