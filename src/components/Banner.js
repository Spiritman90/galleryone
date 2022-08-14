import React, { useEffect, useState } from "react";
import burna from "../assets/burna.svg";
import salah from "../assets/salah.svg";

function Banner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const times = setInterval(() => {
      setShowBanner(!showBanner);
    }, 5000);

    return () => {
      clearInterval(times);
    };
  }, [showBanner]);

  return (
    <div className='header__image'>
      <img
        src={showBanner ? burna : salah}
        alt='burna'
        className='header__photo'
        style={{ borderRadius: "0.5rem" }}
      />
    </div>
  );
}

export default Banner;
