import React from 'react';
import {HiArrowLeft,HiArrowRight} from "react-icons/hi";
import { useState } from 'react';


const Banner = () => {

    const [currentSlide, setCurrentSlide]= useState(0)

    const data = [
        "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",

    ];

    const prevSlide=()=>{
        setCurrentSlide(currentSlide === 0 ? 3:(prev) => prev-1)
    };
    const nextSlide=()=>{
        setCurrentSlide(currentSlide === 3 ? 0 : (prev) => prev+1);
    };
    console.log(currentSlide);
  return (
    <div className="w-full h-auto overflow-x-hidden">
    <div className="w-screen h-[650px] relative">
        <div style={{transform: `translateX(-${currentSlide * 100}vw)`}} 
        className="w-[400vw] h-[600px] flex transition-transform duration-1000">
            <img className="w-screen h-full object-cover" 
            src={data[0]} 
            alt="Imgone"
            loading="priority"
            />
            <img className="w-screen h-full object-cover" 
            src={data[1]} 
            alt="Imgone"
            loading="priority"
            />
            <img className="w-screen h-full object-cover" 
            src={data[2]} 
            alt="Imgone"
            loading="priority"
            />
            <img className="w-screen h-full object-cover" 
            src={data[3]} 
            alt="Imgone"
            loading="priority"
            />
        </div>
        <div className="absolute w-fit left-0 right-0 mx-auto flex gap-8 bottom-44">
            <div onClick={prevSlide} className="w-14 h-12 border-[1px] border-white bg-gray-400 text-white flex items-center
            justify-center hover:cursor-pointer hover:bg-white hover:text-black
            active:bg-gray-900 duration-300">
                <HiArrowLeft/>
            </div>
            <div onClick={nextSlide} className="w-14 h-12 border-[1px] border-white bg-gray-400 text-white flex items-center
            justify-center hover:cursor-pointer hover:bg-white hover:text-black
            active:bg-gray-900 duration-300">
                <HiArrowRight/>
            </div>
        </div>
    </div>
      
    </div>
  )
}

export default Banner
