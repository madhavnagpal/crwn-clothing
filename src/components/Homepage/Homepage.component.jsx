import React from "react";
import "./Homepage.styles.scss";

function Homepage() {
  return (
    <div className="homepage">
      <div className="directory-menu">
        <div className="menu-item">
          <div className="content">
            <h1 className="title">Hat</h1>
            <span className="subtitle">Now</span>
          </div>
        </div>
        <div className="menu-item">
          <div className="content">
            <h1 className="title">Jacket</h1>
            <span className="subtitle">Now</span>
          </div>
        </div>
        <div className="menu-item">
          <div className="content">
            <h1 className="title">Bing</h1>
            <span className="subtitle">Now</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
