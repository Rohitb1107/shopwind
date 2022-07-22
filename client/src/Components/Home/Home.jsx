import React, { useEffect, useState } from "react";
import HeroPart from "../HeroPart/HeroPart";
import axios from "axios";
import "./Home.css";
import ProductCard from "../ProductCard/ProductCard";
import Footer from "../Footer/Footer";
import { Button, ButtonGroup } from "@chakra-ui/react";

const Home = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const url = "https://fakestoreapi.com/products";
    const response = await axios.get(url);
    setData(response.data);
    setFilter(response.data);
    console.log(filter);
  };

  const filterProduct = (cat) => {
    const updatedList = data.filter((x) => x.category === cat);
    setFilter(updatedList);
  };

  return (
    <div>
      <div className="hero-section-div">
        <HeroPart />
      </div>

      <div className="container btn-div">
        <ButtonGroup variant="solid" spacing="3">
          <Button onClick={() => setFilter(data)} colorScheme="teal">
            All
          </Button>
          <Button
            onClick={() => filterProduct("men's clothing")}
            colorScheme="teal"
          >
            Men's
          </Button>
          <Button
            onClick={() => filterProduct("women's clothing")}
            colorScheme="teal"
          >
            Women's
          </Button>
          <Button onClick={() => filterProduct("jewelery")} colorScheme="teal">
            Jewelery
          </Button>
          <Button
            onClick={() => filterProduct("electronics")}
            colorScheme="teal"
          >
            Electronics
          </Button>
        </ButtonGroup>
      </div>

      <div className="prod-render-div display-products">
        {filter.map((item) => {
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
