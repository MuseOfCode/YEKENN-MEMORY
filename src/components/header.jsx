import { useState } from "react";

export default function Header({ cardCount }) {
  console.log("header", cardCount);
  return (
    <div className="header-container">
      <div className="title">
        <h1>YEKENN MEMORY</h1>
      </div>
      <div className="card-counter">
        <h2>
          <div>{cardCount}/8</div>
        </h2>
      </div>
    </div>
  );
}
