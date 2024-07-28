"use client";
import Image from "next/image";
import RestaurantLogo from "../assets/restaurant-image.jpg";
import { LiaShoppingBasketSolid } from "react-icons/lia";
import { RiRestaurantLine, RiShoppingBasket2Line } from "react-icons/ri";
import { BsReceiptCutoff } from "react-icons/bs";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { MdChevronLeft } from "react-icons/md";
import { Button } from "@nextui-org/react";
import React, { CSSProperties } from "react";
import { useData } from "@/shared/context";

export default function Navbar() {
  const pathname = usePathname();
  const DATA = useData();
  const handleScroll = () => {
    const headerHeight = document.getElementById("courses")?.offsetHeight!;
    document.body.style.setProperty(
      "--background",
      `${
        window.scrollY > headerHeight - 50
          ? "rgba(255, 255, 255, 1)"
          : "rgba(255, 255, 255, 0)"
      }`
    );
    document.body.style.setProperty(
      "--position",
      `${
        window.scrollY > headerHeight - 50 || pathname.startsWith("/courses/")
          ? "sticky"
          : "relative"
      }`
    );
    document.body.style.setProperty(
      "--button-style",
      `${window.scrollY > headerHeight - 50 ? "#000" : "#fff"}`
    );
    document.body.style.setProperty(
      "--button-background",
      `${window.scrollY > headerHeight - 50 ? "#7dd031" : "#ffffff30"}`
    );
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll, false);
    return () => {
      window.removeEventListener("scroll", handleScroll, false);
    };
  });
  return (
    <header id='header-nav' className={`z-50 top-0`}>
      <nav className={``}>
        <div
          id='navbar'
          className={`w-full ${
            pathname === "/courses"
              ? "bg-[--background] justify-end absolute top-0"
              : "bg-white justify-between relative top-0"
          }  flex lg:flex-row gap-4 mr-2 py-3 px-2`}
        >
          <div>
            {pathname === "/courses" ? null : (
              <Button
                isIconOnly
                type='button'
                className={` ${
                  pathname === "/courses"
                    ? "text-[--button-style] bg-[--button-background]"
                    : "text-black bg-white"
                } backdrop-blur-sm shadow-md rounded-full p-2 text-2xl`}
              >
                <MdChevronLeft />
              </Button>
            )}
          </div>
          <div className='flex flex-row justify-end items-center gap-3'>
            {DATA?.statusOrder === "Prepare order" ? (
              <Button
                isIconOnly
                type='button'
                className={`text-black bg-white backdrop-blur-sm shadow-md rounded-full p-2 text-2xl`}
              >
                <BsReceiptCutoff />
              </Button>
            ) : null}
            <Button
              isIconOnly
              type='button'
              className={`btn-nav ${
                pathname === "/courses"
                  ? "text-[--button-style] bg-[--button-background]"
                  : "text-black bg-white"
              } btn-waiter backdrop-blur-sm shadow-md rounded-full p-2 text-2xl`}
            >
              <RiRestaurantLine />
            </Button>
            <Button
              isIconOnly
              type='button'
              className={`btn-nav ${
                pathname === "/courses"
                  ? "text-[--button-style] bg-[#ffffff30]"
                  : "text-black bg-white"
              } ${
                DATA?.cartItems.length! > 0 ? "bg-[#7dd031] text-white" : ""
              } backdrop-blur-sm shadow-md rounded-full p-2 text-2xl`}
            >
              <Link href={"/order"}>
                <RiShoppingBasket2Line />
              </Link>
            </Button>
          </div>
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
