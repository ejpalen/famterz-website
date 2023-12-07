import { Products } from "../Products";
import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import ScrollTopSnap from "./ScrollTopSnap";

const BrowseProductsItems = () => {
  const allProducts = Products();
  const dropdownRef = useRef(null);

  const handleHover = () => {
    dropdownRef.current.classList.toggle("active");
  };

  const handleClick = () => {
    console.log("Dropdown clicked");
    dropdownRef.current.classList.add("active");
  };

  const [currentFilter, setCurrentFilter] = useState("Best Sellers");
  const show = (value) => {
    setCurrentFilter(value);
  };
  const [products, setProducts] = useState(allProducts);

  useEffect(() => {
    if (currentFilter === "Best Sellers") {
      const bestSellers = [...allProducts].sort((a, b) => b.sales - a.sales);
      setProducts(bestSellers);
    } else {
      setProducts(allProducts);
    }
  }, [currentFilter, allProducts]);

  return (
    <div className="bestSellers-section">
      <ScrollTopSnap />
      <div className="bestSellers-section-header section-header">
        <div
          ref={dropdownRef}
          onMouseEnter={handleHover}
          onMouseLeave={handleHover}
          onClick={handleClick}
          className="dropdown fadeToUp"
        >
          <input
            className="text-box"
            type="text"
            placeholder={currentFilter}
            readOnly
          />
          <div className="options">
            <div onClick={() => show("Best Sellers")}>Best Sellers</div>
            <div onClick={() => show("A-Z")}>A-Z</div>
          </div>
        </div>
      </div>
      <div className="bestSellers-section-products">
        {products.map((product) => (
          <div className="product" key={product.id}>
            <Link to={`/product/${product.id}`}>
              <img src={product.image.mainImage} alt="" />
              <h2>{product.name}</h2>
              <p>${product.price}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrowseProductsItems;
