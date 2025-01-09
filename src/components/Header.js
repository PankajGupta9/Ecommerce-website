import React from "react";
import {logoDark,cartImg,userLogo} from "../assets/index";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import {AiOutlineMenu,AiOutlineClose} from "react-icons/ai";

const Header = () => {
  const productData = useSelector((state) => state.bazar.productData);
  const userInfo = useSelector((state) => state.bazar.userInfo);
  console.log(userInfo);
  return (
    <div className="w-full h-20 bg-white border-b-[1px] border-b-gray-800 font-titleFont top-0 z-50 sticky">
      <div className="max-w-screen-xl h-full mx-auto flex items-center justify-between"> 
       <Link to='/'>
       <div>
        <img className="w-28"src={logoDark} alt="logoDark" />
      </div>
       </Link>
       <AiOutlineMenu className="text-2xl md:hidden block"/>
       <AiOutlineClose className="text-2xl md:hidden block"/>

      <div className="flex items-center gap-8">
         <ul className="hidden md:flex items-center gap-8">
         <Link to='/'>
         <li className="text-base text-black font-bold hover:text-orange-900
          hover:underline underline-offset-2 decoration-[1px] cursor-pointer
          duration-300">
          Home
          </li>
         </Link>
          
          <li className="text-base text-black font-bold hover:text-orange-900
          hover:underline underline-offset-2 decoration-[1px] cursor-pointer
          duration-300">
          Pages
          </li>
          <li className="text-base text-black font-bold hover:text-orange-900
          hover:underline underline-offset-2 decoration-[1px] cursor-pointer
          duration-300">
          Shop
          </li>
          <li className="text-base text-black font-bold hover:text-orange-900
          hover:underline underline-offset-2 decoration-[1px] cursor-pointer
          duration-300">
          Element
          </li>
          <li className="text-base text-black font-bold hover:text-orange-900
          hover:underline underline-offset-2 decoration-[1px] cursor-pointer
          duration-300">
          Blog
          </li>
         </ul>


         <Link to="/cart">
         <div className="relative">
          <img className="w-6" src={cartImg} alt="cartImg" />
          <span className="absolute w-6 top-3 left-3  flex items-center
          justify-center font-semibold font-titleFont">
          {productData.length}
          </span>
         </div>
         </Link>
         <Link to="/login">
         <img 
              className="w-6 rounded-full" 
              src={
                   userInfo
                   ? userInfo.image
                   :userLogo
              } 
              alt="userLogo" 
          />
         </Link>
         {userInfo && <p className="text-base font-titleFont font-semibold underline underline-offset-2">
         {userInfo.name}</p>}
      </div>
      </div>
      {/* toast.success("Added to Cart"); */}
      

    </div>
  )
}

export default Header
