import React from "react";
import hero from "../assets/hero.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className=" w-full  bg-gradient-to-b flex items-center justify-center  from-blue-300 to-blue-50 pt-28 ">
     
     <div className=" ">
    

      <div className="max-w-screen-lg grid  grid-cols-2 px-4 md:flex-row
      pl-14 pt-12">
        <div className="grid items-center justify-center pt-6 pb-6">
          <h1 className="text-3xl sm:text-auto text-orange-600 ">
           Make Your Home Interior More Modern and Stylish.
          </h1>
          <p className="text-black  max-w-md text-2xl">
          Home Decor Shop</p>

          <p className=" text-xl text-blue-600">Utawala, Nairobi
           </p>

          <div className="">
            <Link
              to="products"
              smooth
              duration={500}
              className="group text-white w-fit px-4 py-2 my-2 flex items-center  
              rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Shop Now
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
         
        </div>
      </div>


      <div className="">
      <img
        src={hero}
        alt="my profile"
        className=""
      />
    </div>
    </div>
    </div>
    </div>
  );
};

export default Home;
