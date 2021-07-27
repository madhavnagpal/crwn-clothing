import React from "react";
import { withRouter } from "react-router-dom";
import "./MenuItem.scss";

function MenuItem({ title, imageUrl, size, linkUrl, history, match }) {
  return (
    <div className={`menu-item ${size}`}>
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span
          className="subtitle"
          onClick={() => history.push(`${match.url}${linkUrl}`)}
        >
          Buy Now
        </span>
      </div>
    </div>
  );
}

export default withRouter(MenuItem);
