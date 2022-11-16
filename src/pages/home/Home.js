// STYLES
import "./Home.css";

// ASSETS
import HeroImg from "../../assets/hero-section-img.webp";
import GiftImg from "../../assets/gift-section-img.png";
import NFT1 from "../../assets/NFT/NFT1.webp";
import NFT2 from "../../assets/NFT/NFT2.webp";
import NFT3 from "../../assets/NFT/NFT3.webp";
import NFT4 from "../../assets/NFT/NFT4.webp";
import NFT5 from "../../assets/NFT/NFT5.webp";
import NFT6 from "../../assets/NFT/NFT6.webp";
import NFT7 from "../../assets/NFT/NFT7.webp";
import NFT8 from "../../assets/NFT/NFT8.webp";

// PAGES AND COMPONENTS
import Banner from "../../components/Banner";
import NftCard from "../../components/NftCard";
import Footer from "../../components/Footer";

// NFT ARRAY
let NFTs = [NFT1, NFT2, NFT3, NFT4, NFT5, NFT6, NFT7, NFT8];

export default function Home() {
  return (
    <div className="home">
      {/* HERO SECTION */}
      <div className="hero-section">
        <div className="hero-content">
          <h1>
            Rent a <span>Place</span> away from <span>Home</span> in the{" "}
            <span>Metaverse</span>
          </h1>
          <p>
            we provide you access to luxury and affordable houses in the
            metaverse, get a chance to turn your imagination to reality at your
            comfort zone
          </p>

          <form className="search-form ">
            <input
              type="text"
              name="search"
              placeholder="Search for location"
              autoComplete="off"
            />
            <button type="submit">
              <div className="search-btn">Search</div>
            </button>
          </form>
        </div>

        <div className="hero-img">
          <img src={HeroImg} alt="homes in the multiverse" />
        </div>
      </div>

      {/* BANNER */}
      <Banner />

      {/* GRID SECTION */}
      <div className="grid-section">
        <h2>Inspiration for your next adventure</h2>

        <div className="card-grid">
          {NFTs.map((NFT) => (
            <div key={NFT}>
              <NftCard img={NFT} />
            </div>
          ))}
        </div>
      </div>

      {/* GIFT CARDS SECTION */}
      <div className="gift-card-section">
        <div className="gift-card-container">
          <div className="gift-card-content">
            <h1>Metabnb NFTs</h1>
            <p>
              Discover our NFT gift cards collection. Loyal customers gets
              amazing gift cards which are traded as NFTs. These NFTs gives our
              cutomer access to loads of our exclusive services.
            </p>

            <button type="submit">
              <div className="learn-btn">Learn more</div>
            </button>
          </div>

          <div className="gift-card-img">
            <img src={GiftImg} alt="homes in the multiverse" />
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
