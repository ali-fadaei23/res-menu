"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Button, Divider, image, Image, Tab, Tabs } from "@nextui-org/react";
import SaladsImage from "../assets/salads.jpg";
import EntreeImage from "../assets/entree.jpg";
import DrinksImage from "../assets/drinks.jpg";
import DessertImage from "../assets/dessert.jpg";
import StartersImage from "../assets/starters.jpg";
import SoupsImage from "../assets/soups.jpg";
import { BsPlus, BsDash } from "react-icons/bs";
import { data } from "./courses-detail";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { RobotoFont } from "@/app/page";
import Link from "next/link";
import { useData } from "@/shared/context";

export default function Dish(props: {
  dish: { id: string; label: string; price: number };
}) {
  const DATA = useData();
  let { id, label, price } = props.dish;
  const pathname = usePathname();
  const [selected, setSelected] = useState(RemoveLastDirectoryPartOf(pathname));
  const [dishPrice, setDishprice] = useState(0);

  const reducer = (...arr: any[]) => {
    const res: any[] = [];
    arr.forEach((v) => {
      const i = res.findIndex((u) => u.id === v.id);
      if (!res[i]) res.push(v);
      else res[i].num++;
    });
    return res;
  };
  const numItems = DATA?.cartItems.find((v) => v.id === id)?.num ?? 0;
  const cartItem = {
    id,
    label,
    price,
    image: StartersImage,
    num: 1,
  };

  function handleIncrease() {
    DATA?.setCartItems((prev) =>
      reducer(...structuredClone([...prev, cartItem]))
    );
    setDishprice(dishPrice + price);
  }

  function handleDecrease() {
    if (numItems <= 0) {
      setDishprice(0);
    } else {
      DATA?.setCartItems((prev) => {
        const state = prev.map((v) => ({ ...v }));
        const i = state.findIndex((v) => v.id === cartItem.id);
        if (state[i].num > 1) state[i].num--;
        else if (state[i].num === 1) state.splice(i, 1);
        return state;
      });
      setDishprice(dishPrice - price);
    }
  }

  function RemoveLastDirectoryPartOf(the_url: string) {
    let the_arr = the_url.split("/");
    the_arr.pop();
    return the_arr.join("/");
  }

  const settings = {
    className: "center",
    centerMode: true,
    dots: true,
    infinite: true,
    arrows: false,
    centerPadding: "50px",
    slidesToShow: 1,
    speed: 500,
  };
  const handleTabClick = (index: number) => {
    DATA?.setActiveTab(index);
  };

  const renderTabs = () => {
    return data.map((tab, index) => {
      return (
        <Link
          id={tab.id}
          key={tab.key}
          href={tab.href}
          className={
            selected === tab.href
              ? "bg-black font-semibold text-white rounded-full py-1 px-4"
              : "text-neutral-400 hover:text-neutral-500"
          }
          onClick={() => handleTabClick(index)}
        >
          {tab.label}
        </Link>
      );
    });
  };

  return (
    <>
      <div
        className={`w-full flex flex-col items-center justify-between px-2  ${RobotoFont.className}`}
      >
        <div className='bg-white w-full text-sm flex flex-row items-center justify-between py-5'>
          {renderTabs()}
        </div>
      </div>
      <div className='slider-container w-full'>
        <Slider {...settings}>
          <div className='w-96 h-56 px-2'>
            <Image
              removeWrapper
              shadow='sm'
              radius='lg'
              alt='Dish Slider Image'
              className='object-cover w-96 h-56'
              src={SaladsImage.src}
            />
          </div>
          <div className='w-96 h-56 px-2'>
            <Image
              removeWrapper
              shadow='sm'
              radius='lg'
              alt='Dish Slider Image'
              className='object-cover w-96 h-56'
              src={SoupsImage.src}
            />
          </div>
          <div className='w-96 h-56 px-2'>
            <Image
              removeWrapper
              shadow='sm'
              radius='lg'
              alt='Dish Slider Image'
              className='object-cover w-96 h-56'
              src={DrinksImage.src}
            />
          </div>
          <div className='w-96 h-56 px-2'>
            <Image
              removeWrapper
              shadow='sm'
              radius='lg'
              alt='Dish Slider Image'
              className='object-cover w-96 h-56'
              src={DessertImage.src}
            />
          </div>
          <div className='w-96 h-56 px-2'>
            <Image
              removeWrapper
              shadow='sm'
              radius='lg'
              alt='Dish Slider Image'
              className='object-cover w-96 h-56'
              src={DessertImage.src}
            />
          </div>
          <div className='w-96 h-56 px-2'>
            <Image
              removeWrapper
              shadow='sm'
              radius='lg'
              alt='Dish Slider Image'
              className='object-cover w-96 h-56'
              src={StartersImage.src}
            />
          </div>
          <div className='w-96 h-56 px-2'>
            <Image
              removeWrapper
              shadow='sm'
              radius='lg'
              alt='Dish Slider Image'
              className='object-cover w-96 h-56'
              src={EntreeImage.src}
            />
          </div>
        </Slider>
      </div>
      <section
        id={id}
        className='text-left flex flex-col justify-center py-14 px-16'
      >
        <h1 className='text-xl capitalize'>{label}</h1>
        <p className={`${RobotoFont.className}`}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          suscipit libero vel lorem gravida, eu sodales velit sodales. Mauris a
          mi quis nisl vehicula mollis convallis sed dolor. Quisque sit amet
          cursus mi, in lacinia enim. Integer tincidunt dui id rhoncus ornare.
          Duis ultricies, dolor id euismod interdum, sapien arcu rhoncus diam,
          vel pharetra arcu diam eu eros.{" "}
        </p>
        <Divider
          className='my-4 h-[2px] bg-neutral-100'
          orientation='horizontal'
        />
        <span className='text-md text-neutral-400'>Ingredients:</span>
        <p className={`${RobotoFont.className}`}>
          Maecenas eget maximus lorem. Donec a enim sed felis volutpat
          elementum. Phasellus eget ullamcorper libero. Maecenas pulvinar nisi
          ac urna volutpat, eu vulputate mauris accumsan. Quisque aliquam ipsum
          sapien
        </p>
        <Divider
          className='my-4 h-[2px] bg-neutral-100'
          orientation='horizontal'
        />
        <span className='text-md text-neutral-400'>
          Nutritional value of 100gr.
        </span>
        <p className={`${RobotoFont.className}`}>
          <span className='flex flex-row items-center justify-between'>
            <span>Calories</span>
            <span className='font-bold'>219</span>
          </span>
          <span className='flex flex-row items-center justify-between'>
            <span>Fats</span>
            <span className='font-bold'>36</span>
          </span>
          <span className='flex flex-row items-center justify-between'>
            <span>Carbs</span>
            <span className='font-bold'>38</span>
          </span>
          <span className='flex flex-row items-center justify-between'>
            <span>Proteins</span>
            <span className='font-bold'>13</span>
          </span>
          <span className='flex flex-row items-center justify-between mt-5'>
            <span>Weight:</span>
            <span className='font-bold'>306 gr.</span>
          </span>
        </p>
        <Divider
          className='my-4 h-[2px] bg-neutral-100'
          orientation='horizontal'
        />
        <span className='text-md text-neutral-400'>Potential allergens:</span>
        <p className={`${RobotoFont.className}`}>
          Maecenas pulvinar nisi ac urna volutpat, eu vulputate mauris accumsan.
        </p>
      </section>
      {numItems <= 0 ? (
        <div className='bg-neutral-100 w-full flex items-center justify-between pb-10 pt-4 px-4 border-t-1 border-neutral-300'>
          <div
            className={`flex items-center justify-center flex-row gap-4 ${RobotoFont.className}`}
          >
            <Button
              onClick={handleIncrease}
              radius='sm'
              className='text-md bg-black text-white py-2 px-14'
              type='button'
              isIconOnly
            >
              Add
            </Button>
          </div>
          <div className='w-12'>
            <span>{`$${Number(dishPrice.toFixed(2))}`}</span>
          </div>
        </div>
      ) : (
        <div className='bg-neutral-100 w-full flex items-center justify-between pb-10 pt-4 px-4 border-t-1 border-neutral-300'>
          <div className='flex items-center justify-center flex-row gap-4'>
            <Button
              onClick={handleDecrease}
              radius='sm'
              className='text-3xl font-semibold'
              type='button'
              isIconOnly
            >
              <BsDash />
            </Button>
            <span className=''>{numItems}</span>
            <Button
              onClick={handleIncrease}
              radius='sm'
              className='text-3xl font-semibold'
              type='button'
              isIconOnly
            >
              <BsPlus />
            </Button>
          </div>
          <div className='w-12'>
            <span>{`$${Number(dishPrice.toFixed(2))}`}</span>
          </div>
        </div>
      )}
    </>
  );
}
