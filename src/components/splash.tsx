"use client";
import Image from "next/image";
import RestaurantLogo from "../assets/friendly-s-restaurant.svg";
import BrandLogo from "../assets/wix-company-icon.svg";
import { TbSquareRoundedChevronsRightFilled } from "react-icons/tb";
import Link from "next/link";

export default function Splash() {
  return (
    <main className='w-full flex flex-col items-center gap-36'>
      <Image
        className='mt-10'
        src={BrandLogo}
        width={128}
        height={128}
        alt='Logo Company'
      />

      <Image
        src={RestaurantLogo}
        width={300}
        height={300}
        alt='Logo Restaurant'
      />

      <p className='w-full text-center flex flex-col gap-8'>
        <span className='text-xl'>Table #1</span>
        <span className='flex flex-col text-2xl'>
          Crafted menu<span>experiance.</span>
        </span>
        <span className='w-full flex items-center justify-end'>
          <Link className='mr-4 hover:text-gray-800' href={"/page-language"}>
            <TbSquareRoundedChevronsRightFilled className='text-5xl' />
          </Link>
        </span>
      </p>
    </main>
  );
}
