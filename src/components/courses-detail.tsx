"use client";
import {
  useParams,
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";
import { Tabs, Tab, Card, CardBody, CardHeader } from "@nextui-org/react";
import SaladsImage from "../assets/salads.jpg";
import EntreeImage from "../assets/entree.jpg";
import DrinksImage from "../assets/drinks.jpg";
import DessertImage from "../assets/dessert.jpg";
import StartersImage from "../assets/starters.jpg";
import SoupsImage from "../assets/soups.jpg";
import Category from "./category";
import { RobotoFont } from "@/app/page";
import { useCallback, useEffect, useRef, useState } from "react";
import { Key } from "@react-types/shared";
import SingleCategory from "./single-category";
import Link from "next/link";
import { StaticImageData } from "next/image";
import { useData } from "@/shared/context";

let categories = [
  {
    id: "salads",
    label: "salads",
    href: "/courses/menu-category/salads",
    image: SaladsImage,
  },
  {
    id: "starters",
    label: "starters",
    href: "/courses/menu-category/starters",
    image: StartersImage,
  },
  {
    id: "entree",
    label: "entree",
    href: "/courses/menu-category/entree",
    image: EntreeImage,
  },
  {
    id: "soups",
    label: "soups",
    href: "/courses/menu-category/soups",
    image: SoupsImage,
  },
  {
    id: "dessert",
    label: "Dessert",
    href: "/courses/menu-category/dessert",
    image: DessertImage,
  },
  {
    id: "drinks",
    label: "drinks",
    href: "/courses/menu-category/drinks",
    image: DrinksImage,
  },
];

export let dataCategories = {
  salads: [
    {
      id: "1",
      href: "/courses/menu-category/salads/1",
      label: "Salads",
      price: 5.26,
      image: SaladsImage,
    },
    {
      id: "2",
      href: "/courses/menu-category/salads/2",
      label: "Salads",
      price: 5.26,
      image: SaladsImage,
    },
    {
      id: "3",
      href: "/courses/menu-category/salads/3",
      label: "Salads",
      price: 5.26,
      image: SaladsImage,
    },
  ],
  starters: [
    {
      id: "4",
      href: "/courses/menu-category/starters/4",
      label: "Starters",
      price: 5.26,
      image: StartersImage,
    },
    {
      id: "5",
      href: "/courses/menu-category/starters/5",
      label: "Starters",
      price: 5.26,
      image: StartersImage,
    },
    {
      id: "6",
      href: "/courses/menu-category/starters/6",
      label: "Starters",
      price: 5.26,
      image: StartersImage,
    },
  ],
  entree: [
    {
      id: "7",
      href: "/courses/menu-category/entree/7",
      label: "Entree",
      price: 5.26,
      image: EntreeImage,
    },
    {
      id: "8",
      href: "/courses/menu-category/entree/8",
      label: "Entree",
      price: 5.26,
      image: EntreeImage,
    },
    {
      id: "9",
      href: "/courses/menu-category/entree/9",
      label: "Entree",
      price: 5.26,
      image: EntreeImage,
    },
  ],
  soups: [
    {
      id: "10",
      href: "/courses/menu-category/soups/10",
      label: "Soups",
      price: 5.26,
      image: SoupsImage,
    },
    {
      id: "11",
      href: "/courses/menu-category/soups/11",
      label: "Soups",
      price: 5.26,
      image: SoupsImage,
    },
    {
      id: "12",
      href: "/courses/menu-category/soups/12",
      label: "Soups",
      price: 5.26,
      image: SoupsImage,
    },
  ],
  dessert: [
    {
      id: "13",
      href: "/courses/menu-category/dessert/13",
      label: "Dessert",
      price: 5.26,
      image: DessertImage,
    },
    {
      id: "14",
      href: "/courses/menu-category/dessert/14",
      label: "Dessert",
      price: 5.26,
      image: DessertImage,
    },
    {
      id: "15",
      href: "/courses/menu-category/dessert/15",
      label: "Dessert",
      price: 5.26,
      image: DessertImage,
    },
  ],
  drinks: [
    {
      id: "16",
      href: "/courses/menu-category/drinks/16",
      label: "Drinks",
      price: 5.26,
      image: DrinksImage,
    },
    {
      id: "17",
      href: "/courses/menu-category/drinks/17",
      label: "Drinks",
      price: 5.26,
      image: DrinksImage,
    },
    {
      id: "18",
      href: "/courses/menu-category/drinks/18",
      label: "Drinks",
      price: 5.26,
      image: DrinksImage,
    },
  ],
};

type Data = {
  id: string;
  key: Key;
  href: string;
  label: string;
  content: JSX.Element;
}[];

export let data: Data = [
  {
    id: "home",
    key: "home",
    href: "/courses",
    label: "Home",
    content: <Category category={categories} />,
  },
  {
    id: "salads",
    key: "salads",
    href: "/courses/menu-category/salads",
    label: "Salads",
    content: (
      <SingleCategory title='Salads' singleCategory={dataCategories.salads} />
    ),
  },
  {
    id: "starters",
    key: "starters",
    href: "/courses/menu-category/starters",
    label: "Starters",
    content: (
      <SingleCategory
        title='Starters'
        singleCategory={dataCategories.starters}
      />
    ),
  },
  {
    id: "entree",
    key: "entree",
    href: "/courses/menu-category/entree",
    label: "Entree",
    content: (
      <SingleCategory title='Entree' singleCategory={dataCategories.entree} />
    ),
  },
  {
    id: "soups",
    key: "soups",
    href: "/courses/menu-category/soups",
    label: "Soups",
    content: (
      <SingleCategory title='Soups' singleCategory={dataCategories.soups} />
    ),
  },
  {
    id: "drinks",
    key: "drinks",
    href: "/courses/menu-category/drinks",
    label: "Drinks",
    content: (
      <SingleCategory title='Drinks' singleCategory={dataCategories.drinks} />
    ),
  },
  {
    id: "dessert",
    key: "dessert",
    href: "/courses/menu-category/dessert",
    label: "Dessert",
    content: (
      <SingleCategory title='Dessert' singleCategory={dataCategories.dessert} />
    ),
  },
];

export default function CoursesDetail() {
  const DATA = useData();
  const pathname = usePathname();

  const handleTabClick = (index: number) => {
    DATA?.setActiveTab(index);
  };

  console.log(DATA?.statusOrder);
  
  
  const renderTabs = () => {
    return data.map((tab, index) => {
      return (
        <Link
          href={tab.href}
          id={tab.id}
          key={tab.key}
          className={
            tab.href === pathname
              ? "bg-black text-white rounded-full py-1 px-3"
              : "text-neutral-400 hover:text-neutral-500"
          }
          onClick={() => handleTabClick(index)}
        >
          {tab.label}
        </Link>
      );
    });
  };

  const tabContent = data.find((item) => {
    return item.href === pathname;
  });

  return (
    <>
      <div
        className={`w-full flex flex-col items-center justify-center ${RobotoFont.className}`}
      >
        <div className='sticky top-14 z-20  bg-white w-full text-sm flex flex-row items-center justify-between px-2 py-5'>
          {renderTabs()}
        </div>
        <div className='tab-content'>{tabContent?.content}</div>
      </div>
    </>
  );
}
