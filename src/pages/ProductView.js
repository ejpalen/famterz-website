import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Products } from "../Products";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ScrollTopSnap from "../components/ScrollTopSnap";
import QuantityCounter from "../components/QuantityCounter";
import Footer from "../components/footer";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import softTouch from "../images/SOFT TOUCH.png";
import waterProof from "../images/WATERPROOF.png";
import cushionedCore from "../images/CUSHIONED CORE.png";
import nonSlipBottom from "../images/NON-SLIP BOTTOM.png";

const ProductView = () => {
  const { id } = useParams();
  const [products, setProducts] = useState(Products);
  const [product, setProduct] = useState(null);

  const [buttonText, setButtonText] = useState("Add to Cart");
  const [buttonClass, setButtonClass] = useState("");

  useEffect(() => {
    const currentProduct = products.find(
      (stateProduct) => stateProduct.id === id
    );
    setProduct(currentProduct);
  }, [products, id]);

  const handleAddToCart = (quantity) => {
    setProducts(products);
    setButtonText("ADDED TO CART!");
    setButtonClass("addedToCart");

    // Get the current cart items from local storage
    const currentCartItems = JSON.parse(localStorage.getItem("cart")) || [];

    // Check if the product is already in the cart
    const existingCartItem = currentCartItems.find(
      (item) => item.id === product.id
    );

    if (existingCartItem) {
      // If the product is already in the cart, update its quantity
      existingCartItem.quantity += quantity;
    } else {
      // If the product is not in the cart, add it
      currentCartItems.push({ id: product.id, quantity: quantity });
    }

    // Save the updated cart items back to local storage
    localStorage.setItem("cart", JSON.stringify(currentCartItems));

    // After 3 seconds, reset the text to "Add to Cart"
    setTimeout(() => {
      setButtonText("Add to Cart");
      setButtonClass("");
    }, 3000);
  };

  return (
    <>
      <div className="">
        <ScrollTopSnap />
        {product && (
          <div className="product-view-container">
            <div className="product-view">
              <div className="product-header">
                <div className="product-carousel">
                  <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    pagination={{
                      clickable: true,
                    }}
                    navigation={true}
                    loop={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className=""
                  >
                    {Object.values(product.image).map((image, index) => (
                      <SwiperSlide>
                        <img key={index} src={image} alt={`${index + 1}`} />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
                <div className="product-header-text">
                  <h1>{product.name}</h1>
                  <h2>${product.price}</h2>
                  <QuantityCounter
                    // onAddToCart={handleAddToCart}
                    onAddToCart={(newQuantity) => handleAddToCart(newQuantity)}
                    buttonText={buttonText}
                    id={product.id}
                    stock={product.stock}
                    buttonClass={buttonClass}
                  />
                  <div className="product-features">
                    <div className="feature">
                      <img src={softTouch} alt="" />
                      <p>Soft Touch</p>
                    </div>
                    <div className="feature">
                      <img src={waterProof} alt="" />
                      <p>Waterproof</p>
                    </div>
                    <div className="feature">
                      <img src={cushionedCore} alt="" />
                      <p>Cushioned Core</p>
                    </div>
                    <div className="feature">
                      <img src={nonSlipBottom} alt="" />
                      <p>Non-Slip Bottom</p>
                    </div>
                  </div>
                  {Object.values(product.description).map((description) => (
                    <p className="product-description">{description}</p>
                  ))}
                </div>
              </div>
            </div>
            <div className="relevant-section">
              <div className="relevant-section-header section-header">
                <h1>You May Also Like</h1>
              </div>
              <div className="bestSellers-section-products">
                {products
                  .filter((product) => product.id !== id)
                  .sort((a, b) => b.sales - a.sales)
                  .slice(0, 4)
                  .map((product) => (
                    <Link to={`/product/${product.id}`} className="product">
                      <img src={product.image.mainImage} alt="" />
                      <h2>{product.name}</h2>
                      <p>${product.price}</p>
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default ProductView;
