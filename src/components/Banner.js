// STYLES
import "./Banner.css";

// ASSETS
import MBToken from "../assets/MBToken.svg";
import Metamask from "../assets/Metamask.svg";
import Opensea from "../assets/Opensea.svg";

export default function Banner() {
  return (
    <div className="banner">
      <div className="banner-container">
        <div>
          <img src={MBToken} alt="MB Token logo" />
        </div>
        <div>
          <img src={Metamask} alt="Metamask Logo" />
        </div>
        <div>
          <img src={Opensea} alt="Opensea Logo" />
        </div>
      </div>
    </div>
  );
}
