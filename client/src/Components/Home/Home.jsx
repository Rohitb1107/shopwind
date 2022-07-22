import React, { useEffect, useState } from "react";
import HeroPart from "../HeroPart/HeroPart";
import axios from "axios";
import "./Home.css";
import ProductCard from "../ProductCard/ProductCard";
import Footer from "../Footer/Footer";
import { Button, ButtonGroup } from "@chakra-ui/react";

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

      <div className="container btn-div">
        <ButtonGroup variant="solid" spacing="3">
          <Button colorScheme="teal">All</Button>
          <Button colorScheme="teal">Men's</Button>
          <Button colorScheme="teal">Women's</Button>
          <Button colorScheme="teal">Jewelery</Button>
          <Button colorScheme="teal">Electronics</Button>
        </ButtonGroup>
      </div>

      <div className="prod-render-div display-products">
        {data.map((item) => {
          return (
            <div key={item.id}>
              <ProductCard data={item} />
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
    </div>
  );
};

export default Home;
