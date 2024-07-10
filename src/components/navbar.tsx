"use client";
import Image from "next/image";
import RestaurantLogo from "../assets/restaurant-image.jpg";
import { LiaShoppingBasketSolid } from "react-icons/lia";
import { RiRestaurantLine, RiShoppingBasket2Line } from "react-icons/ri";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { MdChevronLeft } from "react-icons/md";

export default function Navbar() {
  const pathname = usePathname();

  const handleScroll = () => {
    const headerHeight = document.getElementById("courses")?.offsetHeight!;

    document.body.style.setProperty(
      "--background",
      `${window.scrollY > headerHeight - 50 ? "#fff" : "transparent"}`
    );
    document.body.style.setProperty(
      "--button-style",
      `${window.scrollY > headerHeight - 50 ? "#000" : "#fff"}`
    );
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, false);
    return () => {
      window.removeEventListener("scroll", handleScroll, false);
    };
  }, []);
  return (
    <header id='header-nav' className='sticky z-50 top-0'>
      <nav className=''>
        <div
          id='navbar'
          className='w-full absolute top-0 flex justify-end lg:flex-row gap-4 mr-2 py-2 pr-2'
        >
          <button
            type='button'
            className='btn-nav bg-white/20 backdrop-blur-sm shadow-md rounded-full p-2 text-2xl'
          >
            <RiRestaurantLine />
          </button>

          <button
            type='button'
            className='btn-nav bg-white/20 backdrop-blur-sm shadow-md rounded-full p-2 text-2xl'
          >
            <RiShoppingBasket2Line />
          </button>
        </div>
      </nav>
    </header>
  );
}

{
  /* <div className='w-full flex justify-start lg:flex-row gap-4 ml-2'>
  <button
    type='button'
    className='text-black shadow-md bg-white rounded-full p-2 text-2xl'
  >
    <MdChevronLeft />
  </button>
</div> */
}
