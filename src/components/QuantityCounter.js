import { useState, useEffect } from "react";

const QuantityCounter = (props) => {
  const [counter, setCounter] = useState(1);

  useEffect(() => {
    setCounter(1);
  }, [props.id]);

  const increment = () => {
    if (counter <= props.stock) {
      setCounter(counter + 1);
    }
  };

  const decrement = () => {
    if (counter > 1) {
      setCounter(counter - 1);
    }
  };
  return (
    <div className="product-header-text-add-to-cart">
      <div class="quantity">
        <button onClick={decrement}>
          <svg
            fill="none"
            viewBox="0 0 24 24"
            height="14"
            width="14"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linejoin="round"
              stroke-linecap="round"
              stroke-width="2.5"
              stroke="#47484b"
              d="M20 12L4 12"
            ></path>
          </svg>
        </button>
        <label>{counter}</label>
        <button onClick={increment}>
          <svg
            fill="none"
            viewBox="0 0 24 24"
            height="14"
            width="14"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linejoin="round"
              stroke-linecap="round"
              stroke-width="2.5"
              stroke="#47484b"
              d="M12 4V20M20 12H4"
            ></path>
          </svg>
        </button>
      </div>
      <button
        className={`add-to-cart-button ${props.buttonClass}`}
        onClick={() => {
          props.onAddToCart(counter);
        }}
      >
        {props.buttonText}
      </button>
    </div>
  );
};

export default QuantityCounter;
