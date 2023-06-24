import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-blue-50 to to-blue-300 
      px-16 relative text-black "
    >
      <div className="max-w-screen-lg mx-auto flex flex-col justify-center
       w-full h-full">
        <div className="pb-5 ">
          <p className="text-4xl flex justify-center">
            About Us
          </p>
        </div>

        <p className="text-xl flex justify-center ">
        Donatus Creations is a one-stop-shop for all your home decor needs. We offer a wide variety of furniture, rugs, lighting, and accessories to fit any style and budget. 
        Whether you're looking to add a touch of elegance to your living room or create a cozy and inviting bedroom. </p>

        <br />
        <p className="text-xl">Visit us today and discover the perfect pieces to make your house a Home.
        </p>

      </div>
    </div>
  );
};

export default About;
