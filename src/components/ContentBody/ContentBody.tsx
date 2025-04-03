import React from "react";
import "./ContentBody.css";

export default function ContentBody({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="content-body-background">
      <div className="content-body">{children}</div>
    </div>
  );
}
