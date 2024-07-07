import Image from "next/image";
import RestaurantLogo from "../assets/restaurant-image.jpg";
import { LiaShoppingBasketSolid } from "react-icons/lia";
import { RiRestaurantLine, RiShoppingBasket2Line } from "react-icons/ri";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className='w-full relative'>
      <div className='w-full bg-transparent flex flex-col lg:flex-row absolute top-0 py-3'>
        <div className='w-full flex justify-end lg:flex-row gap-4 mr-5'>
          <button
            type='button'
            className='text-white backdrop-blur-sm bg-white/20 mix-blend-difference rounded-full p-2 text-2xl'
          >
            <RiRestaurantLine />
          </button>
          <button
            type='button'
            className='text-white backdrop-blur-sm bg-white/20 mix-blend-difference rounded-full p-2 text-2xl'
          >
            <RiShoppingBasket2Line />
          </button>
        </div>
      </div>
    </nav>
  );
}
