import React, { useState } from 'react';


const Home = () => {
 
 
 
 
 
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [



    'http://jawedhabibsalons.com/assets/img/banner/offer-banner-1.jpg',



    'https://images.fresha.com/locations/location-profile-images/427931/408868/65e53fc7-2175-4129-a381-c549c74c0116.jpg?class=fallback',

    'https://images.fresha.com/locations/location-profile-images/706077/762300/61899bc4-5211-41d2-a9f0-9ebf17a7815d.jpg?class=og-image',


    'https://im.whatshot.in/img/2023/Sep/e7a26ef5f7c005abac886790b13352f3-1694085318.jpeg?q=90',

  ];

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((currentSlide - 1 + images.length) % images.length);
  };

 
 
 
  return (
  
  
  
  
  <>
      {/* hero section */}

      <section className="hero_section h-screen w-full bg-no-repeat bg-cover bg-center  mt-[headerHeight] ">
  <div className="hero_section_child h-full w-full">
    <div className="h-full w-full flex transition-transform duration-300" style={{ transform: `translateX(${-currentSlide * 100}%)` }}>
      {images.map((image, index) => (
        <div key={index} className="flex-shrink-0 w-full h-full">
          <img src={image} alt={`Slide ${index + 1}`} className="object-cover w-full h-full" />
        </div>
      ))}
    </div>
  </div>

  {/* Left Button */}
  <button
    onClick={prevSlide}
    className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-200 focus:outline-none"
  >
    <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
    </svg>
  </button>

  {/* Right Button */}
  <button
    onClick={nextSlide}
    className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-200 focus:outline-none"
  >
    <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
    </svg>
  </button>
</section>








    </>
  )
}

export default Home
