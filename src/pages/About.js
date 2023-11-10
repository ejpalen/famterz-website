import FooterCTA from "../components/footerCTA";
import Footer from "../components/footer";
import "../styles/about.css";
import AboutBg from "../images/aboutBg.png";
import footerImgAbout from "../images/footerImgAbout.png";

const BrowseProducts = () => {
  return (
    <>
      <div className="about">
        <div
          className="hero-container bg"
          style={{ backgroundImage: `url(${AboutBg})` }}
        >
          <div className="hero-text">
            <h1>Your Workspace.</h1>
            <h1>Your Universe.</h1>
          </div>
        </div>
        <div className="founder-note">
          <div className="founder-note-left">
            <h2>Note from</h2>
            <h1>Chris,</h1>
            <h2>Founder of Famterz</h2>
          </div>
          <div className="founder-note-right">
            <p>
              Greetings COSMIC ENTHUSIASTS!
              <br />
              <br />
              As a lifelong admirer of the cosmos, I've always been captivated
              by the boundless beauty and wonder that the universe holds. This
              profound fascination led me to envision a world where our digital
              workspace could transcend the ordinary and resonate with the
              majesty of the stars.
              <br />
              <br />
              FAMTERz is born out of this passion—a dream to infuse the essence
              of the universe into the tools we use daily. Our journey began
              with the humble mouse pad and keyboard pad, a canvas for celestial
              artistry. The response was overwhelmingly positive, fueling our
              desire to expand our offerings and add a touch of the cosmic to
              every computer accessory. Today, we stand committed to making your
              workspace not just a desk, but a canvas of the cosmos—an
              invitation to dream big and reach for the stars in your endeavors.
              Join us in this cosmic expedition, and let's elevate the way we
              perceive and interact with our digital world.
              <br />
              <br />
              Welcome to FAMTERz—a universe at your fingertips.
              <br />
              <br />
              Sincerely,
              <br />
              <span className="founder-name">Chris</span>
              <br />
              Founder, FAMTERz
            </p>
          </div>
        </div>
        <FooterCTA image={footerImgAbout} />
      </div>
      <Footer />
    </>
  );
};

export default BrowseProducts;
