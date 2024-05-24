"use client"
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react';

const Carousel = ({ data }) => {
  // State and Ref initialization
  const [currentImg, setCurrentImg] = useState(0);
  const [carouselSize, setCarouselSize] = useState({ width: 0, height: 0 });
  const carouselRef = useRef(null);

  // useEffect to get the initial carousel size and start autoplay
  useEffect(() => {
    let elem = carouselRef.current;
    let { width, height } = elem.getBoundingClientRect();
    if (carouselRef.current) {
      setCarouselSize({
        width,
        height,
      });
    }

    // Start autoplay
    const intervalId = setInterval(() => {
      setCurrentImg((prev) => (prev + 1) % data.length);
    }, 3000); // Adjust autoplay interval as needed

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, [data.length]);

  return (
    <div className="relative m-0 ">
      {/* Carousel container */}
      <div className="relative   w-full  overflow-hidden " style={{"height": "30rem"}}>
        {/* Image container */}
        <div
          ref={carouselRef}
          style={{
            left: -currentImg * carouselSize.width,
          }}
          className="absolute flex h-full w-full transition-all duration-300"
        >
          {/* Map through data to render images */}
          {data.map((v) => (
            <div
              key={v.id}
              className="relative h-full w-full bg-center bg-cover shrink-0"
              style={{ backgroundImage: `url(/${v.image})` }}
            >
              {/* New Collection text and Order Now button */}
              <div className="absolute mt-10 text-3xl w-full  p-10  text-white">
                <h1 className="text-4xl font-semibold text-slate-900 mb-4">Member Exclusive!
                </h1>
                <p className='text-xl mb-3  text-slate-700 font-semibold'>Sign up and get 10% off your first purchase</p>
                <button className="mt-2 bg-pink-950 hover:bg-slate-900 text-gray-50 px-4 py-2 rounded-md">Join Now!</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation buttons */}
      {/* <div className="mt-3 flex justify-center">
        <button
          disabled={currentImg === 0}
          onClick={() => setCurrentImg((prev) => prev - 1)}
          className={`text-3xl px-4 py-2 font-bold ${currentImg === 0 && 'opacity-50'}`}
        >
          &lt;
        </button>
        <button
          disabled={currentImg === data.length - 1}
          onClick={() => setCurrentImg((prev) => prev + 1)}
          className={`text-3xl px-4 py-2 font-bold ${currentImg === data.length - 1 && 'opacity-50'}`}
        >
          &gt;
        </button>
      </div> */}
    </div>
  );
};

export default Carousel;