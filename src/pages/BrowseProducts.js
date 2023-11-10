import Footer from "../components/footer";
import "../styles/browseProducts.css";
import "../styles/homepage.css";
import BrowseProductsHeader from "../components/BrowseProductsHeader";
import BrowseProductsItems from "../components/BrowseProductsItems";

const BrowseProducts = () => {
  return (
    <>
      <div className="BrowseProducts">
        <BrowseProductsHeader title="Products" />
        <BrowseProductsItems />
      </div>
      <Footer />
    </>
  );
};

export default BrowseProducts;
