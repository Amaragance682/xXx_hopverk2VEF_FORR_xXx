import React from "react";
import "./ContentBody.css";

export default function ContentBody({ children }) {
  return (
    <div className="content-body-background">
      <div className="content-body">{children}</div>
    </div>
  );
}
