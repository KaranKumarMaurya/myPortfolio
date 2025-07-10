"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";

// Dynamically import Lottie with SSR disabled
const Lottie = dynamic(() => import("lottie-react"), {
  ssr: false,
  loading: () => <div className="w-full h-full bg-gray-200 animate-pulse rounded"></div>
});

const AnimationLottie = ({ animationPath, width }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationPath,
    style: {
      width: '95%',
    }
  };

  // Only render Lottie on the client side
  if (!isClient) {
    return <div className="w-full h-full bg-gray-200 animate-pulse rounded"></div>;
  }

  return (
    <Lottie {...defaultOptions} />
  );
};

export default AnimationLottie;