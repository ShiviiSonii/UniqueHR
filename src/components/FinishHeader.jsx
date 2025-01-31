import { useEffect } from "react";
import "../styles/FinishHeader.css"

const FinisherHeader = () => {
  useEffect(() => {
    if (window.FinisherHeader) {
      new window.FinisherHeader({
        "count": 5,
        "size": {
          "min": 900,
          "max": 1500,
          "pulse": 0
        },
        "speed": {
          "x": {
            "min": 0,
            "max": 0.3
          },
          "y": {
            "min": 0,
            "max": 0
          }
        },
        "colors": {
          "background": "#c8c8ca",
          "particles": [
            "#888d8e",
            "#787676",
            "#d4cece"
          ]
        },
        "blending": "lighten",
        "opacity": {
          "center": 0.15,
          "edge": 0.05
        },
        "skew": 0,
        "shapes": [
          "s"
        ]
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
