import BrowseProductsHeader from "../images/BrowseProductsHeader.png";

const heroSection = (props) => {
  return (
    <div
      className="hero-container bg BrowseProductsHeader-container"
      style={{ backgroundImage: `url(${BrowseProductsHeader})` }}
    >
      <div className="hero-text">
        <h1>{props.title}</h1>
      </div>
    </div>
  );
};

export default heroSection;
