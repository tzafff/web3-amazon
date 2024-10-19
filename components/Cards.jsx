import React, { useState, useContext, useEffect } from "react";
import Card from "./Card";
import products from "../assets/products.json";
const Cards = () => {
  const item = {
    id: 0,
    attributes: {
      name: "Doge",
      price: 2,
      src: "https://greekdeligoods.com/wp-content/uploads/2023/10/Prime-Hydration-Glowberry-500ml.jpg",
    },
  };
  const styles = {
    container: `h-full w-full flex flex-col ml-[20px] -mt-[50px]`,
    title: `text-xl font-bolder mb-[20px] mt-[30px]  ml-[30px]`,
    cards: `flex items-center  flex-wrap gap-[80px]`,
  };

  return (
    <div className={styles.container}>
      <div className={styles.title}>New Release</div>
      <div className={styles.cards}>
        <div className={styles.cards}>
          {products.map((item) => {
            return <Card key={item.id} item={item.attributes} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Cards;
