import "./NFT.css";

// ASSETS
import NFT1 from "../../assets/NFT/NFT1.webp";
import NFT2 from "../../assets/NFT/NFT2.webp";
import NFT3 from "../../assets/NFT/NFT3.webp";
import NFT4 from "../../assets/NFT/NFT4.webp";
import NFT5 from "../../assets/NFT/NFT5.webp";
import NFT6 from "../../assets/NFT/NFT6.webp";
import NFT7 from "../../assets/NFT/NFT7.webp";
import NFT8 from "../../assets/NFT/NFT8.webp";
import NFT9 from "../../assets/NFT/NFT9.webp";
import NFT10 from "../../assets/NFT/NFT10.webp";
import NFT11 from "../../assets/NFT/NFT11.webp";
import NFT12 from "../../assets/NFT/NFT12.webp";
import NFT13 from "../../assets/NFT/NFT13.webp";
import NFT14 from "../../assets/NFT/NFT14.webp";
import NFT15 from "../../assets/NFT/NFT15.webp";
import NFT16 from "../../assets/NFT/NFT16.webp";

// PAGES AND COMPONENTS
import LocationFilterIcon from "../../assets/location-filter-icon.svg";
import NftCard from "../../components/NftCard";
import Footer from "../../components/Footer";

// NFT ARRAY
let NFTs = [
  NFT5,
  NFT6,
  NFT7,
  NFT8,
  NFT1,
  NFT2,
  NFT3,
  NFT4,
  NFT9,
  NFT10,
  NFT11,
  NFT12,
  NFT13,
  NFT14,
  NFT15,
  NFT16,
];

export default function NFT() {
  return (
    <div className="NFT-page">
      {/* FILTERS */}
      <div className="NFT-filters">
        <div className="dropdown">
          <button className="dropbtn">Filters</button>
          <ul className="dropdown-content">
            <li>Resturant</li>
            <li>Cottage</li>
            <li>Castle</li>
            <li>fantasy city</li>
            <li>beach</li>
            <li>cabins</li>
            <li>Off-gird</li>
            <li>Farm</li>
          </ul>
        </div>
        <div className="location-filter">
          <span>Location</span>
          <img src={LocationFilterIcon} alt="filter by location" />
        </div>
      </div>

      {/* NFT GRID */}
      <div className="grid-section">
        <div className="card-grid">
          {NFTs.map((NFT) => (
            <div key={NFT}>
              <NftCard img={NFT} />
            </div>
          ))}
        </div>
      </div>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
