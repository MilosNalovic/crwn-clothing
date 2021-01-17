import React from "react";
import { withRouter } from "react-router-dom";
import "./menu-item.styles.scss";
const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
  <div
    className={`${size} menu-item`} // size povlaci iz state koji je na poslednje 2 slike vrednosti large - large je ukljucen u scss fajl
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
    <div
      className="background-image"
      style={{ backgroundImage: `url(${imageUrl})` }}
      //backgrundImage: url ("url slike")
    />
    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
      <span className="subtitle">SHOP NOW</span>
    </div>
  </div>
);

export default withRouter(MenuItem);
