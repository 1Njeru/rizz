import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import pine from '../assets/pine.jpg';
import React from 'react'
import vass from '../assets/vass.jpg'
import vers from '../assets/vers.jpg'
import vars from '../assets/vars.jpg'
import pill from '../assets/pill.jpg'
import we from '../assets/we.png'
import mat from '../assets/mat.jpg'
import pil from '../assets/pil.png'
import table from '../assets/table.jpg'
const Epp = () => {
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
          slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
      };
      const links = [
        {
        href: 'https://wa.me/qr/QKUPK7RERQD2H1',
        },
    ];

  return (
    <div name='epp' className='p-20 bg-gradient-to-b from-blue-50 to
     to-blue-300 pt-20 relative md:h-screen pb-6'>

     <h1 className='flex justify-center text-4xl p-3'>Our Products</h1>

    <Carousel swipeable={true}
    draggable={true}
    transitionDuration={500}
    showDots={true} responsive={responsive}   
    ssr={true} // means to render carousel on server-side.
    infinite={true}
    autoPlay={true}
    autoPlaySpeed={2500}
    keyBoardControl={true}
    customTransition="all 1"
    containerClass="carousel-container"
    dotListClass="custom-dot-list-style"
    itemClass="carousel-item-padding-40-px"
   >
    
  <div className=' flex items-center justify-center p-6'>
  <div className=' shadow-2x h-[50px] shadow-black max-w-[320px] text-center m-auto-[1rem] rounded-2xl'>
  <img src={pine} alt='' className=' w-[100%] object-cover bg-center relative h-64' />
  <h2>Glass Vases</h2>
  <p className='text-gray-700'>2500 ksh</p>
  <p className='text-gray-600'>some description</p>
  <button onClick={links.links} className=' cursor-pointer w-[100%] bg-black text-white text-center'>Add to Cart</button>
  </div>
  </div>

  <div className=' flex items-center justify-center p-6'>
  <div className=' shadow-2x h-[50px] shadow-black max-w-[320px] text-center m-auto-[1rem] rounded-2xl'>
  <img src={we} alt='' className=' w-[100%] object-cover bg-center relative h-64' />
  <h2>Glass Vases</h2>
  <p className='text-gray-700'>2000 ksh</p>
  <p className='text-gray-600'>some description</p>
  <button className=' cursor-pointer w-[100%] bg-black text-white text-center'>Add to Cart</button>
  </div>
  </div>

  <div className=' flex items-center justify-center p-6'>
  <div className=' shadow-2x h-[50px] shadow-black max-w-[320px] text-center m-auto-[1rem] rounded-2xl'>
  <img src={vers} alt='' className=' w-[100%] object-cover bg-center relative h-64' />
  <h2>Glass Vases</h2>
  <p className='text-gray-700'>1800 ksh</p>
  <p className='text-gray-600'>some description</p>
  <button className=' cursor-pointer w-[100%] bg-black text-white text-center'>Add to Cart</button>
  </div>
  </div>

  <div className=' flex items-center justify-center p-6'>
  <div className=' shadow-2x h-[50px] shadow-black max-w-[320px] text-center m-auto-[1rem] rounded-2xl'>
  <img src={pill} alt='' className=' w-[100%] object-cover bg-center relative h-64' />
  <h2>Pillows</h2>
  <p className='text-gray-700'>1000 ksh</p>
  <p className='text-gray-600'>some description</p>
  <button className=' cursor-pointer w-[100%] bg-black text-white text-center'>Add to Cart</button>
  </div>
  </div>

  <div className=' flex items-center justify-center p-6'>
  <div className=' shadow-2x h-[50px] shadow-black max-w-[320px] text-center m-auto-[1rem] rounded-2xl'>
  <img src={mat} alt='' className=' w-[100%] object-cover bg-center relative h-64' />
  <h2>Mats</h2>
  <p className='text-gray-700'>1000 ksh</p>
  <p className='text-gray-600'>some description</p>
  <button className=' cursor-pointer w-[100%] bg-black text-white text-center'>Add to Cart</button>
  </div>
  </div>

  <div className=' items-center justify-center p-6'>
  <div className=' shadow-2xl shadow-black max-w-[320px] text-center m-auto-[1rem] rounded-2xl'>
  <div className='w-[100%] object-cover'>
  <img src={vass} alt='' className=' h-64' />
  </div>
  <h2>Ceramic Vases</h2>
  <p className='text-gray-700'>2000 ksh</p>
  <p className='text-gray-600'>some description</p>
  <button className=' cursor-pointer w-[100%] bg-black text-white text-center'>Add to Cart</button>
  </div>
  </div>

 
  <div className=' items-center justify-center p-6 rounded-2xl'>
  <div className=' shadow-2xl  shadow-black max-w-[320px] text-center m-auto-[1rem]'>
  <img src={vers} alt='' className=' w-[100%] object-cover h-64 ' />
  <h2>Indoor Plant Vases</h2>
  <p className='text-gray-700'>1800 ksh</p>
  <p className='text-gray-600'>some description</p>
  <button className=' cursor-pointer w-[100%] bg-black text-white text-center'>Add to Cart</button>
  </div>
  </div>

  <div className=' items-center justify-center p-6'>
  <div className=' shadow-2xl shadow-black max-w-[320px] grid items-center justify-center
  text-center m-auto-[1rem]'>
  <img src={vars} alt='' className='  mx-auto h-64' />
  <h2>Glass Vases</h2>
  <p className='text-gray-700'>1500 ksh</p>
  <p className='text-gray-600'>some description</p>
  <button className=' cursor-pointer w-[100%] bg-black text-white text-center'>Add to Cart</button>
  </div>
  </div>

  <div className=' items-center justify-center p-6'>
  <div className=' shadow-2xl shadow-black max-w-[320px] grid items-center justify-center
  text-center m-auto-[1rem]'>
  <img src={pil} alt='' className='  mx-auto h-64' />
  <h2>Cushions</h2>
  <p className='text-gray-700'>1000 ksh</p>
  <p className='text-gray-600'>some description</p>
  <button className=' cursor-pointer w-[100%] bg-black text-white text-center'>Add to Cart</button>
  </div>
  </div>

  <div className=' items-center justify-center p-6'>
  <div className=' shadow-2xl shadow-black max-w-[320px] grid items-center justify-center
  text-center m-auto-[1rem]'>
  <img src={table} alt='' className='  mx-auto h-64' />
  <h2>Furniture</h2>
  <p className='text-gray-700'>4500 ksh.</p>
  <p className='text-gray-600'>some description</p>
  <button className=' cursor-pointer w-[100%] bg-black text-white text-center'>Add to Cart</button>
  </div>
  </div>

</Carousel>;
    </div>
   
    
  )
}

export default Epp;