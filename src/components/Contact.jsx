import React from "react";
import { FaWhatsapp, FaPhone  } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const Contact = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          WhatsApp <FaWhatsapp size={30} />
        </>
      ),
      href: "https://wa.me/qrQKUPK7RERQD2H1"
    },
    {
      id: 2,
      child: (
        <>
          Call <FaPhone size={25} />
        </>
      ),
      href: "tel:+254758825397",
    },
    {
      id: 3,
      child: (
        <>
          Email <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:foo@gmail.com",
    },

  ];


  return (
    <div
      name="contact"
      className="w-full relative bg-gradient-to-b from-blue-300 to-blue-50 pl-4 pr-4
       text-black pt-14"
    >
      <div className="flex flex-col justify-center max-w-screen-lg mx-auto h-full">
        <div className="">
          <p className="text-4xl flex justify-center ">
            Contact
          </p>
    
          <p className="py-6 text-xl flex justify-center">Write a message or hit the links below to get in touch</p>
        </div>

        <div className=" flex justify-center items-center">
          <form
            action="https://getform.io/f/61c99527-2b15-42cf-9b55-ad37d2f7daa6"
            method="POST"
            className=" flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-black focus:outline-none "
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="my-4 p-2 bg-transparent border-2 rounded-md text-gray-900 focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="5"
              className="p-2 bg-transparent border-2 rounded-md text-gray-900 focus:outline-none"
            ></textarea>

            <button className="text-gray-600 bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex
             items-center rounded-md hover:scale-110 duration-300">
              Let's talk
            </button>
           
  
             
          
          </form>
        
       
      </div>
      <ul className="  font-black flex justify-center gap-6 pb-4">
        {links.map(({ id, child, href, style, download }) => (
          <li
            key={id}
            className={
              "flex justify-between items-center hover:scale-110 h-14 px-4 duration-300 bg-transparent" +
              " " +
              style
            }
          >
            <a
              href={href}
              className="flex justify-between items-center w-full text-black"
              download={download}
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
    </div>
  
  );
};

export default Contact;
