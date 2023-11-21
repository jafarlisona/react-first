import React from "react";
import "./style.css";
function Card({title,desc,img}) {
  return (
    <div className="card">
      <img src={img} alt="" />
      <h2>{title}</h2>
      <p>
       {desc}
      </p>
    </div>
  );
}

export default Card;
