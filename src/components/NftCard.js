import "./NftCard.css";

// IMPORTS
import { useState } from "react";

// ASSETS
import Star from "../assets/stars.svg";

export default function NftCard({ img }) {
  const [like, setLike] = useState(false);

  const handleHeartClick = () => {
    setLike(like ? false : true);
  };

  return (
    <div className="Nft-card">
      <div className="img-container">
        <img src={img} className="nft-img" alt=" house" />
        {
          <svg
            onClick={handleHeartClick}
            width="20"
            height="18"
            viewBox="0 0 20 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              id="Vector"
              d="M9.59964 2.62953L10 3.16466L10.4004 2.62953C11.3204 1.39974 12.7949 0.600006 14.44 0.600006C17.2315 0.600006 19.5 2.87381 19.5 5.69001C19.5 6.82563 19.3189 7.87375 19.0043 8.84609L19.0032 8.84935C18.249 11.2361 16.7035 13.1596 15.0354 14.5933C13.365 16.0289 11.6004 16.9483 10.4589 17.3367L10.4589 17.3366L10.4536 17.3385C10.3537 17.3737 10.1893 17.4 10 17.4C9.81075 17.4 9.64625 17.3737 9.54641 17.3385L9.54642 17.3385L9.54106 17.3367C8.3996 16.9483 6.635 16.0289 4.96465 14.5933C3.29649 13.1596 1.75096 11.2361 0.996762 8.84935L0.996774 8.84935L0.995722 8.8461C0.681141 7.87375 0.5 6.82563 0.5 5.69001C0.5 2.87381 2.76848 0.600006 5.56 0.600006C7.2051 0.600006 8.67958 1.39974 9.59964 2.62953Z"
              fill={like ? "red" : "#D7D7D7"}
              stroke="url(#paint0_linear_4471_404)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_4471_404"
                x1="10"
                y1="17.9"
                x2="10"
                y2="0.100006"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#1D0E3D" />
                <stop offset="1" stopColor="#0F051D" />
              </linearGradient>
            </defs>
          </svg>
        }
      </div>

      <div className="card-content">
        <div>
          <p>Desert king</p>
          <p>2345km away</p>
          <div className="rating">
            <input type="radio" id="5" name="rating" value="5" />
            <label htmlFor="5"><img src={Star} alt='Five stars'/></label>
            <input type="radio" id="4" name="rating" value="4" />
            <label htmlFor="4"><img src={Star} alt='Four stars'/></label>
            <input type="radio" id="3" name="rating" value="3" />
            <label htmlFor="3"><img src={Star} alt='Three stars'/></label>
            <input type="radio" id="2" name="rating" value="2" />
            <label htmlFor="2"><img src={Star} alt='Two stars'/></label>
            <input type="radio" id="1" name="rating" value="1" />
            <label htmlFor="1"><img src={Star} alt='One star'/></label>
          </div>
        </div>

        <div className="card-content-right">
          <p>1MBT per night</p>
          <p>available for 2weeks stay</p>
        </div>
      </div>
    </div>
  );
}
