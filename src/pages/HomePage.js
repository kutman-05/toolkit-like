import React, { useState } from "react";
import { FaHeart } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import Favorite from "./Favorite/Favorite";
// import { useDispatch } from "react-redux";

const HomePage = ({ el }) => {
  const [like, setLike] = useState(false);
  const dispatch = useDispatch();

  return (
    <div
      onDoubleClick={() => {
        setLike(!like);
      }}
      className="home-block"
    >
      <img width={150} src={el.image} alt="" />
      <h1>{el.title}</h1>
      {like ? (
        <button onClick={() => dispatch(Favorite(el.id))}>
          <FaHeart />
        </button>
      ) : (
        ""
      )}
    </div>
  );
};

export default HomePage;
