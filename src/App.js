// STYLES
import "./App.css";

// IMPORTS
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";

// PAGES AND COMPONENTS
import Home from "./pages/home/Home";
import NFT from "./pages/nfts/NFT";
import Navbar from "./components/Navbar";
import Modal from "./pages/modal/Modal";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [isShowing, setIsShowing] = useState(false);

  const handleClick = () => {
    if (window.innerWidth < 550) {
      setIsShowing(isShowing ? false : true);
    }
  };

  const handleModal = () => {
    setShowModal(showModal ? false : true);
  };

  return (
    <div className={isShowing ? "App isShowing" : "App"}>
      <BrowserRouter>
        <Navbar
          handleModal={handleModal}
          handleClick={handleClick}
          isShowing={isShowing}
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nfts" element={<NFT />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
      {showModal && <Modal handleModal={handleModal} />}
    </div>
  );
}

export default App;
