"use client";
import { usePathname } from "next/navigation";
import { Tabs, Tab, Card, CardBody, CardHeader } from "@nextui-org/react";
import SaladsImage from "../assets/salads.jpg";
import EntreeImage from "../assets/entree.jpg";
import DrinksImage from "../assets/drinks.jpg";
import DessertImage from "../assets/dessert.jpg";
import StartersImage from "../assets/starters.jpg";
import SoupsImage from "../assets/soups.jpg";
import Category from "./category";
import { RobotoFont } from "@/app/page";
import { useState } from "react";
import SingleCategory from "./single-category";

let categoryData = [
  {
    id: "salads",
    label: "salads",
    href: "#",
    image: SaladsImage,
  },
  {
    id: "starters",
    label: "starters",
    href: "#",
    image: StartersImage,
  },
  {
    id: "entree",
    label: "entree",
    href: "#",
    image: EntreeImage,
  },
  {
    id: "soups",
    label: "soups",
    href: "#",
    image: SoupsImage,
  },
  {
    id: "salads",
    label: "salads",
    href: "#",
    image: SaladsImage,
  },
  {
    id: "drinks",
    label: "drinks",
    href: "#",
    image: DrinksImage,
  },
];

let data = [
  {
    id: "salads",
    label: "Pizza New york Style",
    price: "$5.26",
    href: "#",
    image: SaladsImage,
  },
  {
    id: "starters",
    label: "Pizza New york Style",
    price: "$5.26",
    href: "#",
    image: StartersImage,
  },
  {
    id: "entree",
    label: "Pizza New york Style",
    price: "$5.26",
    href: "#",
    image: EntreeImage,
  },
  {
    id: "soups",
    label: "Pizza New york Style",
    price: "$5.26",
    href: "#",
    image: SoupsImage,
  },
  {
    id: "salads",
    label: "Pizza New york Style",
    price: "$5.26",
    href: "#",
    image: SaladsImage,
  },
  {
    id: "drinks",
    label: "Pizza New york Style",
    price: "$5.26",
    href: "#",
    image: DrinksImage,
  },
];

let tabs = [
  {
    id: "home",
    href: "#",
    label: "Home",
    content: <Category category={categoryData} />,
  },
  {
    id: "salads",
    href: "#",
    label: "Salads",
    content: <SingleCategory singleCategory={data} />,
  },
  {
    id: "starters",
    href: "#",
    label: "Starters",
    content: <SingleCategory singleCategory={data} />,
  },
  {
    id: "entree",
    href: "#",
    label: "Entree",
    content: <SingleCategory singleCategory={data} />,
  },
  {
    id: "soups",
    href: "#",
    label: "Soups",
    content: <SingleCategory singleCategory={data} />,
  },
  {
    id: "drinks",
    href: "#",
    label: "Drinks",
    content: <SingleCategory singleCategory={data} />,
  },
  {
    id: "dessert",
    href: "#",
    label: "Dessert",
    content: <SingleCategory singleCategory={data} />,
  },
];

export default function CoursesDetail() {
  // const [selected, setSelected] = useState();
  const pathname = usePathname();

  return (
    <>
      <Tabs
        size='sm'
        defaultSelectedKey={"home"}
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
        items={tabs}
      >
        {(item) => (
          <Tab key={item.id} title={item.label}>
            {item.content}
          </Tab>
        )}
      </Tabs>
    </>
  );
}
