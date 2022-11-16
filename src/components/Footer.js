import "./Footer.css";

// ASSETS
import FooterLogo from "../assets/footer-logo.svg";
import FacebookIcon from "../assets/facebook.svg";
import InstagramIcon from "../assets/instagram.svg";
import TwitterIcon from "../assets/twitter.svg";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-icons">
          <img className='footer-logo' src={FooterLogo} alt="Metabnb logo" />
          <div className="social-icons">
            <img src={FacebookIcon} alt="facebook logo" />
            <img src={InstagramIcon} alt="instagram logo" />
            <img src={TwitterIcon} alt="twitter logo" />
          </div>
        </div>
        <ul className="community">
          <li>Community</li>
          <li>NFT</li>
          <li>Tokens</li>
          <li>Landlords</li>
          <li>Discord</li>
        </ul>
        <ul className="places">
          <li>Places</li>
          <li>Castle</li>
          <li>Farms</li>
          <li>Beach</li>
          <li>Learn more</li>
        </ul>
        <ul className="about">
          <li>About us</li>
          <li>Road map</li>
          <li>Creators</li>
          <li>Career</li>
          <li>Contact us</li>
        </ul>
      </div>
      <p> &#169; 2022 Metabnb</p>
    </footer>
  );
}
