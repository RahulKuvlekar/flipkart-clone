import React from "react";
import { productData } from "../../Data/ProductData";
// import Card from "../UI/Card";
import "./ProductSection.css";
import ProductItem from "../ProductItem/ProductItem";
import useCustomContext from "../../Hooks/UseCustomContext";

const ProductSection = () => {
  console.log("DATA => ", productData);
  const { sortByPrice, sortByInclude, sortBySize, sortByBrand } =
    useCustomContext();

  const filterProducts = () => {
    let filteredProducts = productData;

    if (sortByPrice) {
      filteredProducts = filteredProducts.sort((a, b) =>
        sortByPrice === "LowToHigh" ? a.price - b.price : b.price - a.price
      );
    }
    if (sortByInclude.length !== 0) {
      filteredProducts = filteredProducts.filter((product) => {
        for (let i = 0; i < sortByInclude.length; i++) {
          // console.log(sortByInclude[i], product.for);
          if (product.for.includes(sortByInclude[i])) {
            return true;
          }
        }
        return false;
      });
    }
    if (sortBySize.length !== 0) {
      filteredProducts = filteredProducts.filter((product) => {
        for (let i = 0; i < sortBySize.length; i++) {
          // console.log(sortBySize[i], product.size);
          if (product.size.includes(sortBySize[i])) {
            return true;
          }
        }
        return false;
      });
    }
    if (sortByBrand.length !== 0) {
      filteredProducts = filteredProducts.filter((product) => {
        for (let i = 0; i < sortByBrand.length; i++) {
          if (product.brand === sortByBrand[i]) {
            return true;
          }
        }
        return false;
      });
    }

    return filteredProducts;
  };
  const filteredProducts = filterProducts();
  const productList = filteredProducts.map((data, idx) => (
    <ProductItem key={data.id} data={data} />
  ));

  return (
    <div className="productsection">
      {filteredProducts && productList}
      {filteredProducts.length === 0 && <h1>No Product Available</h1>}
    </div>
  );
};

export default ProductSection;
