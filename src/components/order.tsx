"use client";
import Image from "next/image";
import StartersImage from "../assets/starters.jpg";
import { TbSquareRoundedChevronsRightFilled } from "react-icons/tb";
import Link from "next/link";
import { BsPlus, BsDash } from "react-icons/bs";
import { Button, Divider } from "@nextui-org/react";
import { useData } from "@/shared/context";
import { RobotoFont } from "@/app/page";

export default function Order() {
  const DATA = useData();
  console.log(DATA?.cartItems.length);

  const totalItems = DATA?.cartItems.reduce((prevItem, currItem) => {
    return prevItem + currItem.num;
  }, 0);

  const totalPrice = DATA?.cartItems.reduce((prevValue, currValue) => {
    const tPrice = prevValue + currValue.price * currValue.num;
    return Math.round(tPrice * 100) / 100;
  }, 0);

  return (
    <section className='size-full flex flex-col items-center gap-36'>
      <div className='size-full flex flex-col items-start'>
        <span
          className={`w-full text-lg font-bold px-5 my-6 ${RobotoFont.className}`}
        >
          My order
        </span>
        <div className='size-full overflow-scroll flex flex-col items-center justify-start'>
          {DATA?.cartItems.length! > 0 ? (
            DATA?.cartItems.map((item) => (
              <>
                <div key={item.id} className='w-full px-5'>
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
                    <div className='w-full flex flex-row items-center justify-between relative bottom-0'>
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
                      <span
                        className={`text-xl font-normal`}
                      >{`$${item.price}`}</span>
                    </div>
                  </div>
                  <Divider
                    className='my-4 h-[2px] bg-neutral-100'
                    orientation='horizontal'
                  />
                </div>
              </>
            ))
          ) : (
            <div className='size-full flex items-center justify-center'>
              <div className={`text-2xl  font-bold ${RobotoFont.className}`}>
                Cart is empty...!
              </div>
            </div>
          )}
        </div>
        <div
          className={`bg-neutral-100 w-full flex items-center justify-between pb-10 pt-4 px-4 border-t-1 border-neutral-300 ${RobotoFont.className}`}
        >
          <div className='w-full flex flex-col items-start'>
            {/* <span>{`$${Number(dishPrice.toFixed(2))}`}</span> */}
            <div className='w-3/5 flex flex-row items-start justify-between'>
              <span>{`Your order: `}</span>
              <span className='font-extrabold'>{`$${totalPrice}`}</span>
            </div>
            <div className='w-3/5 flex flex-row items-start justify-between'>
              <span>{`Total items: `}</span>
              <span className='font-extrabold'>{`${totalItems}`}</span>
            </div>
          </div>
          <div className={`flex items-center justify-center flex-row gap-4`}>
            <Button
              // onClick={handleIncrease}

              radius='sm'
              className='text-md bg-black text-white py-2 px-14'
              type='button'
            >
              <Link href={`/prepare-order`}>Order</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
