import React from "react";

import count from "../assets/count.png";
import woood from "../assets/woood.png";
import pil from "../assets/pil.png";
import carp from "../assets/carp.png";
import lamp from "../assets/lamp.png";
import fram from "../assets/fram.png";
import wat from "../assets/wat.png";
import pott from "../assets/pott.png";

const Products = () => {
  const techs = [
    {
      id: 1,
      src: pott,
      title: "Vases",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: woood,
      title: "Art & Craft",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: lamp,
      title: "Lamps & Lanterns",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: carp,
      title: "Rugs & Carpets",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: count,
      title: "Furniture",
      style: "shadow-sky-400",
    },
    {
      id: 6,
      src: wat,
      title: "Clocks",
      style: " shadow-red-400",
    },
    {
      id: 7,
      src: fram,
      title: "Wall Art & Frames",
      style: "shadow-black",
    },
    {
      id: 8,
      src: pil,
      title: "Pillows & Cushions",
      style: "shadow-green-700",
    },
  ];

  return (
    <div
      name="products"
      className="bg-gradient-to-b from-blue-300 to-blue-50 w-full 
       relative  pb-3 pl-10 pr-10"
    >
      <div className="max-w-screen-lg mx-auto   text-black">
        <div>
          <p className="text-4xl pb-5 flex justify-center">
            What we Offer.
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-6
        pl-16 pr-16 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 grid 
               items-center justify-center rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="flex justify-center ">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
