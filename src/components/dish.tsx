"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Image, Tab, Tabs } from "@nextui-org/react";
import SaladsImage from "../assets/salads.jpg";
import EntreeImage from "../assets/entree.jpg";
import DrinksImage from "../assets/drinks.jpg";
import DessertImage from "../assets/dessert.jpg";
import StartersImage from "../assets/starters.jpg";
import SoupsImage from "../assets/soups.jpg";
import CoursesDetail, { data } from "./courses-detail";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { RobotoFont } from "@/app/page";

export default function Dish() {
  const pathname = usePathname();
  const [selected, setSelected] = useState(RemoveLastDirectoryPartOf(pathname));
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
    centerPadding: "90px",
    slidesToShow: 1,
    speed: 500,
  };

  return (
    <>
      <Tabs
        size='sm'
        id='tabs-categories'
        selectedKey={selected}
        onSelectionChange={() => setSelected}
        className={`w-full bg-white sticky top-14 z-20`}
        classNames={{
          tabList: "w-full relative rounded-none p-4",
          cursor: "w-full bg-gray-800 font-semibold rounded-full",
          tab: "w-full py-4",
          tabContent: `group-data-[selected=true]:text-white text-neutral-400 ${RobotoFont.className}`,
        }}
        variant='light'
        color='default'
        aria-label='Dynamic tabs'
        items={data}
      >
        {(item) => <Tab href={item.href} key={item.href} title={item.label} />}
      </Tabs>
      <div className='slider-container w-full'>
        <Slider {...settings}>
          <div>
            <Image
              removeWrapper
              shadow='sm'
              radius='lg'
              alt='Dish Slider Image'
              className='object-cover w-72 h-56'
              src={SaladsImage.src}
            />
          </div>
          <div>
            <Image
              removeWrapper
              shadow='sm'
              radius='lg'
              alt='Dish Slider Image'
              className='object-cover w-72 h-56'
              src={DrinksImage.src}
            />
          </div>
          <div>
            <Image
              removeWrapper
              shadow='sm'
              radius='lg'
              alt='Dish Slider Image'
              className='object-cover w-72 h-56'
              src={DessertImage.src}
            />
          </div>
          <div>
            <Image
              removeWrapper
              shadow='sm'
              radius='lg'
              alt='Dish Slider Image'
              className='object-cover w-72 h-56'
              src={DessertImage.src}
            />
          </div>
          <div>
            <Image
              removeWrapper
              shadow='sm'
              radius='lg'
              alt='Dish Slider Image'
              className='object-cover w-72 h-56'
              src={StartersImage.src}
            />
          </div>
          <div>
            <Image
              removeWrapper
              shadow='sm'
              radius='lg'
              alt='Dish Slider Image'
              className='object-cover w-72 h-56'
              src={EntreeImage.src}
            />
          </div>
        </Slider>
      </div>
    </>
  );
}

{
  /* <SwiperSlide>
  <Image
  removeWrapper
  shadow='sm'
  radius='lg'
  alt='Dish Slider Image'
  className='object-cover w-72 h-56'
  src={SaladsImage.src}
/>
</SwiperSlide>
<SwiperSlide>
<Image
  removeWrapper
  shadow='sm'
  radius='lg'
  alt='Dish Slider Image'
  className='object-cover w-72 h-56'
  src={DrinksImage.src}
/>
</SwiperSlide>
<SwiperSlide>
<Image
  removeWrapper
  shadow='sm'
  radius='lg'
  alt='Dish Slider Image'
  className='object-cover w-72 h-56'
  src={DessertImage.src}
/>
</SwiperSlide>
<SwiperSlide>
<Image
  removeWrapper
  shadow='sm'
  radius='lg'
  alt='Dish Slider Image'
  className='object-cover w-72 h-56'
  src={SoupsImage.src}
/>
</SwiperSlide>
<SwiperSlide>
<Image
  removeWrapper
  shadow='sm'
  radius='lg'
  alt='Dish Slider Image'
  className='object-cover w-72 h-56'
  src={StartersImage.src}
/>
</SwiperSlide>
<SwiperSlide>
<Image
  removeWrapper
  shadow='sm'
  radius='lg'
  alt='Dish Slider Image'
  className='object-cover w-72 h-56'
  src={EntreeImage.src}
/>
</SwiperSlide> */
}
