// STYLES
import "./Modal.css";

// IMPORTS
import ReactDOM from "react-dom";

// ASSETS
import Close from "../../assets/close.svg";
import RightArrow from "../../assets/right-arrow.svg";
import MetaMaskLogo from "../../assets/metamask-wallet-logo.svg";
import WalletConnect from "../../assets/wallet-connect-wallet-logo.svg";

export default function Modal({ handleModal }) {
  return ReactDOM.createPortal(
    <div className="modal-backdrop">
      <div className="modal">
        <div className="wallet-header">
          <p>Connect Wallet</p>
          <img onClick={handleModal} src={Close} alt="close modal button" />
        </div>

        <div className="wallet-options">
          <span>Choose your preferred wallet:</span>

          <div className="wallet metamask">
            <div>
              <img src={MetaMaskLogo} alt="meta mask wolf logo" />
              <p>Metamask</p>
            </div>

            <img src={RightArrow} alt="right arrow" />
          </div>

          <div className="wallet wallet-connect">
            <div>
              <img src={WalletConnect} alt="walet connect logo" />
              <p>WalletConnect</p>
            </div>

            <img src={RightArrow} alt="right arrow" />
          </div>
        </div>
      </div>
    </div>,

    document.body
  );
}
