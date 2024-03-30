import React from "react";
import { useDispatch } from "react-redux";
import "./home.css";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { getPoduct } from "../../redux/slices/productSlice";
import HomePage from "../HomePage";
import axios from "axios";
// import { decrement, increment } from "../../redux/slices/countSlices";

const Home = () => {
  // const balance = useSelector((state) => state.counter.cash);
  const product = useSelector((state) => state.product.product);
  const dispatch = useDispatch();
  function getPoducts() {
    axios("https://fakestoreapi.com/products").then((res) => {
      console.log(res);
      dispatch(getPoduct(res.data));
    });
  }
  useEffect(() => {
    getPoducts();
  }, []);

  const AddToFavorite = (id) => {
    dispatch(AddToFavorite(id));
  };
  return (
    <div id="header">
      <div className="container">
        <div className="home">
          {/* <h1>{balance}</h1>
          <button onClick={() => dispatch(increment(10))}>inc</button>
          <button  onClick={() => {  if (balance > 0) dispatch(decrement(10)) }}>dec </button> */}
          {product.map((el) => (
            <HomePage el={el} AddToFavorite={AddToFavorite} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
