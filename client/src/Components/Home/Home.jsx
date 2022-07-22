import React, { useEffect, useState } from "react";
import HeroPart from "../HeroPart/HeroPart";
import axios from "axios";
import "./Home.css";
import Product from "../Product/Product";
import Footer from "../Footer/Footer";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const url = "https://fakestoreapi.com/products";
    const response = await axios.get(url);
    setData(response.data);
  };
  return (
    <div>
      <div className="hero-section-div">
        <HeroPart />
      </div>

      <div className="prod-render-div display-products">
        {data.map((item) => {
          return (
            <div key={item.id}>
              <Product data={item} />
            </div>
          );
        })}
      </div>

      <div className="container blog-section">
        <div className="title-heading">OUR BLOG</div>
        <div className="blog">
          <div>
            <img
              src="https://flone.jamstacktemplates.dev/assets/img/blog/blog-1.jpg"
              alt=""
            />
            <div className="img-title">A guide to latest trend</div>
          </div>
          <div>
            <img
              src="https://flone.jamstacktemplates.dev/assets/img/blog/blog-2.jpg"
              alt=""
            />
            <div className="img-title">Five ways to lead a happy life</div>
          </div>
          <div>
            <img
              src="https://flone.jamstacktemplates.dev/assets/img/blog/blog-3.jpg"
              alt=""
            />
            <div className="img-title">Tips on having a happy life</div>
          </div>
        </div>
      </div>

      <div className="footer-div">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
