import React from "react";
import "./Move.css";

export const MoveThumb = React.forwardRef<HTMLDivElement, { move }>(
  ({ move }, ref) => {
    return (
      <div className="move-thumb-container" ref={ref}>
        <div>
          <img className="move-thumb-image" alt="" src={move.image} />
        </div>
        <div className="move-thumb-content">
          <span className="move-thumb-title">{move.title}</span>
          <div className="move-thumb-accent-line"></div>
          <span className="move-thumb-description">{move.description}</span>
        </div>
      </div>
    );
  },
);
