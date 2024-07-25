"use client";
import { Button, Image } from "@nextui-org/react";
import PreparedOrderImage from "../assets/prepare-food.png";
import { BsX } from "react-icons/bs";
import Link from "next/link";
import { RobotoFont } from "@/app/page";

export default function PrepareOrder() {
  return (
    <section className='size-full flex flex-col items-center'>
      <div className='w-full flex items-center justify-end p-3'>
        <Button
          isIconOnly
          type='button'
          className={`text-black bg-white backdrop-blur-sm shadow-md rounded-full p-2 text-2xl`}
        >
          <BsX />
        </Button>
      </div>
      <div className='size-full m-auto flex flex-col items-center justify-center'>
        <Image
          width={200}
          className="mb-5"
          alt='Prepared Order Image'
          src={PreparedOrderImage.src}
        />
        <span className='text-2xl'>Your order is being</span>
        <span className='text-2xl'>prepared!</span>
      </div>
      <div
        className={`w-full flex items-center justify-center py-10 ${RobotoFont.className}`}
      >
        <Button
          // onClick={handleIncrease}
          radius='sm'
          className='text-md bg-black text-white py-2 px-14'
          type='button'
        >
          <Link href={``}>Order more</Link>
        </Button>
      </div>
    </section>
  );
}
