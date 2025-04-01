import React from "react";
import "./Splash.css";

export default function Splash({ title }: { title: string }) {
  return (
    <div className="splash-container">
      <div className="splash-inner">
        <div
          className="splash-background"
          style={{ backgroundImage: `url(slider1.png)` }}
        >
          <div className="splash-content">
            <h1 className="splash-title">{title}</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
