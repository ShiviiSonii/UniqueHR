import { useEffect } from "react";
import "../styles/FinishHeader.css"

const FinisherHeader = () => {
  useEffect(() => {
    if (window.FinisherHeader) {
      new window.FinisherHeader({
        count: 10,
        size: { min: 500, max: 1500, pulse: 0 },  // Adjusted size for horizontal flow
        speed: {
          x: { min: 0.1, max: 0.6 }, // Speed of particles in the horizontal direction
          y: { min: 0.1, max: 0.3 }, // Reduced vertical speed for horizontal flow
        },
        colors: {
          background: "#605d62",
          particles: ["#9b9393", "#c8c0c0", "#38393d", "#000000", "#e8dfdf"],
        },
        blending: "overlay",
        opacity: { center: 0.5, edge: 0.05 },
        skew: 0,
        shapes: ["c"],
      });
    }
  }, []);

  return (
    <div
      className="header finisher-header animation-style"
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
         // Adjust height for horizontal header
        zIndex: 1,  // Positioned behind content
      }}
    >
      
    </div>
  );
};

export default FinisherHeader;
