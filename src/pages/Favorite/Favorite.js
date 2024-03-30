import React from "react";
import "./favorite.css";
import { useSelector } from "react-redux";
const Favorite = () => {
  const { like } = useSelector((state) => state.product);
  console.log(like);
  return (
    <div className="container">
      {
      like.map((el) => (
        <div>
          <h1>{el.title}</h1>
        </div>
      ))}
    </div>
  );
};

export default Favorite;
