import arrow from "../images/right-arrow-icon.png";
import { Products } from "../Products";
import { Link, NavLink } from "react-router-dom";

const bestSellers = () => {
  const products = Products()
    .sort((a, b) => b.sales - a.sales) // Sort products by sales in descending order
    .slice(0, 4); // Get the first 4 products with the highest sales
  return (
    <div className="bestSellers-section">
      <div className="bestSellers-section-header section-header">
        <h1>Best Sellers</h1>
        <NavLink to="/products" className="button-2 button">
          <p>EXPLORE PRODUCTS</p>
          <img src={arrow} alt="" />
        </NavLink>
      </div>
      <div className="bestSellers-section-products">
        {products.map((product) => (
          <Link to={`/product/${product.id}`} className="product">
            <img src={product.image.mainImage} alt="" />
            <h2>{product.name}</h2>
            <p>${product.price}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default bestSellers;
