import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../ProductCard/ProductCard";
import "./CartPage.css";
const CartPage = () => {
  const [data, setData] = useState([
    {
      id: 1,
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      price: 109.95,
      description:
        "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      category: "men's clothing",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      rating: {
        rate: 3.9,
        count: 120,
      },
    },
    {
      id: 2,
      title: "Mens Casual Premium Slim Fit T-Shirts ",
      price: 22.3,
      description:
        "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
      category: "men's clothing",
      image:
        "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
      rating: {
        rate: 4.1,
        count: 259,
      },
    },
    {
      id: 3,
      title: "Mens Cotton Jacket",
      price: 55.99,
      description:
        "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
      category: "men's clothing",
      image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
      rating: {
        rate: 4.7,
        count: 500,
      },
    },
  ]);

  return (
    <div>
      <div className="container shop-item-head">Shopping cart (3 items)</div>
      <div className="cart-prod-div">
        <div className=" display-products">
          {data.map((item) => {
            return (
              <div key={item.id}>
                <div className="cart-content-div">
                  <img className="cart-prod-img" src={item.image} alt="" />
                  <div className="prod-content">
                    <div className="cart-title">{item.title}</div>
                    <div className="cart-price">Price: $ {item.price} USD</div>
                    <div className="cart-rating">
                      Rating : {item.rating.rate}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="order-summary">
          <div className="row-div">
            <button className="btn btn-success">-</button>
            <div>3</div>
            <button className="btn btn-success">+</button>
          </div>
        </div>
        <div className="order-summary">
          <div className="order-head">Order Summary</div>
          <div className="row-div">
            <div>Subtotal</div>
            <div>$597.00</div>
          </div>
          <div className="row-div">
            <div>Shipping + Tax</div>
            <div>$10.00</div>
          </div>
          <div className="row-div">
            <div>Coupon code</div>
            <div>RBGET50D</div>
          </div>
          <button className="w-100 pt-2 mt-4 btn btn-primary">Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
