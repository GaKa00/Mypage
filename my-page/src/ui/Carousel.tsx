import React, { useState } from "react";
import { useSwipeable } from "react-swipeable";

const SwipeableCarousel = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalItems = React.Children.count(children);

  const handlers = useSwipeable({
    onSwipedLeft: () =>
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalItems),
    onSwipedRight: () =>
      setCurrentIndex((prevIndex) => (prevIndex - 1 + totalItems) % totalItems),
  });

  return (
    <div
      {...handlers}
      className="carousel-container"
      style={{ overflow: "hidden", width: "70%" }}
    >
      <div
        className="carousel-content"
        style={{
          display: "flex",
          transform: `translateX(-${currentIndex * 100}%)`,
          transition: "transform 0.5s ease-in-out",
        }}
      >
        {React.Children.map(children, (child, index) => (
          <div
            className="carousel-item"
            style={{ minWidth: "100%" }}
            key={index}
          >
            {child}
          </div>
        ))}
      </div>
      <button
        onClick={() =>
          setCurrentIndex(
            (prevIndex) => (prevIndex - 1 + totalItems) % totalItems
          )
        }
        style={{
          position: "absolute",
          top: "50%",
          left: "0",
          transform: "translateY(-50%)",
          background: "black",
          color: "white",
          padding: "0.5rem",
          margin: "4px",
        }}
      >
        Prev
      </button>
      <button
        onClick={() =>
          setCurrentIndex((prevIndex) => (prevIndex + 1) % totalItems)
        }
        style={{
          position: "absolute",
          top: "50%",
          right: "0",
          transform: "translateY(-50%)",
          background: "black",
          color: "white",
          padding: "0.5rem",
          margin: "4px",
        }}
      >
        Next
      </button>
    </div>
  );
};

export default SwipeableCarousel;
