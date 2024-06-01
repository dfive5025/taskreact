import React, { useRef, useState } from "react";
import { SAMPLE_DATA } from "../utils/scrollData";
import "./scrollok.css";

const ScrollDemo = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const containerRef = useRef();

  // Function to handle scrolling when the button is clicked
  const handleScroll = (scrollAmount) => {
    const newScrollPosition = scrollPosition + scrollAmount;

    // Update the state with the new scroll position
    setScrollPosition(newScrollPosition);

    // Access the container element and set its scrollLeft property
    containerRef.current.scrollLeft = newScrollPosition;
  };

  return (
    <div className="container-scroll">
      <div
        ref={containerRef}
        style={{
          width: "900px",
          overflowX: "scroll",
          scrollBehavior: "smooth",
        }}
      >
        <div className="content-box-item">
          {SAMPLE_DATA.map((item) => (
            <div className="card-it" style={{ backgroundColor: item.color }}>
              <p>{item.id}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="action-btns">
        <button onClick={() => handleScroll(-200)}>Left</button>
        <button onClick={() => handleScroll(200)}>Right</button>
      </div>
    </div>
  );
};

export default ScrollDemo;
