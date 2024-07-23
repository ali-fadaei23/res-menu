"use client";
import Image from "next/image";
import StartersImage from "../assets/starters.jpg";
import { TbSquareRoundedChevronsRightFilled } from "react-icons/tb";
import Link from "next/link";
import { BsPlus, BsDash } from "react-icons/bs";
import { Button, Divider } from "@nextui-org/react";
import { useData } from "@/shared/context";

export default function Order() {
  const DATA = useData();
  console.log(DATA?.cartItems);

  return (
    <main className='w-full flex flex-col items-center gap-36'>
      <div className='w-full mt-8 px-5 flex flex-col items-start gap-8'>
        <span className='w-full'>My order</span>
        {DATA?.cartItems.map((item) => (
          <div key={item.id} className='w-full'>
            <div className='w-full flex flex-col items-center gap-4'>
              <div className='w-full flex flex-row items-start justify-start gap-3'>
                <Image
                  className='rounded-large'
                  src={item.image.src}
                  width={100}
                  height={100}
                  alt='Logo Company'
                />
                <span>{item.label}</span>
              </div>
              <div className='w-full flex flex-row items-center justify-between'>
                <div className='flex items-center justify-center flex-row gap-4'>
                  <Button
                    size='sm'
                    //   onClick={handleDecrease}
                    radius='sm'
                    className='text-xl font-semibold'
                    type='button'
                    isIconOnly
                  >
                    <BsDash />
                  </Button>
                  <span className='text-sm'>{item.num}</span>
                  <Button
                    size='sm'
                    //   onClick={handleIncrease}
                    radius='sm'
                    className='text-xl font-semibold'
                    type='button'
                    isIconOnly
                  >
                    <BsPlus />
                  </Button>
                </div>
                <span>{`$${item.price}`}</span>
              </div>
            </div>
            <Divider className='my-5 h-[3px]' orientation='horizontal' />
          </div>
        ))}
      </div>

      {/* <p className='w-full text-center flex flex-col gap-8'>
        <span className='text-xl'>Table #1</span>
        <span className='flex flex-col text-2xl'>
          Crafted menu<span>experiance.</span>
        </span>
        <span className='w-full flex items-center justify-end'>
          <Link className='mr-4 hover:text-gray-800' href={"/page-language"}>
            <TbSquareRoundedChevronsRightFilled className='text-5xl' />
          </Link>
        </span>
      </p> */}
    </main>
  );
}
