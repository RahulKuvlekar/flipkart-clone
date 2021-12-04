import React from "react";
import "./ProductItem.css";
const ProductItem = ({ data }) => {
  return (
    <div id={data.id} className="product_item">
      <img src={data.image} alt={data.name} />
      <div className="product_info">
        <h3>{data.name}</h3>
        <span>
          Size -
          {data.size?.length !== 0 ? (
            data.size.map((size, idx) => (
              <span id={`size-${idx}`} key={`size-${idx}`}>
                {size},{" "}
              </span>
            ))
          ) : (
            <span key={data.price}></span>
          )}
        </span>
        <h2>Price - {data.price}Rs</h2>
      </div>
    </div>
  );
};

export default ProductItem;
