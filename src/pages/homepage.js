import "../styles/homepage.css";
import HeroSection from "../components/heroSection";
import AboutSection from "../components/aboutSection";
import BestSellers from "../components/bestSellers";
import CustomerReviews from "../components/customerReviews";
import FooterCTA from "../components/footerCTA";
import Footer from "../components/footer";
import ScrollTopSnap from "../components/ScrollTopSnap";
import footerImg from "../images/footerImg.png";

const Homepage = () => {
  return (
    <>
      <ScrollTopSnap />
      <HeroSection />
      <AboutSection />
      <BestSellers />
      <CustomerReviews />
      <FooterCTA image={footerImg} />
      <Footer />
    </>
  );
};

export default Homepage;
