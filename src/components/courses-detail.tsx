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
import { useCallback, useEffect, useState } from "react";
import { Key } from "@react-types/shared";
import SingleCategory from "./single-category";

let categories = [
  {
    id: "salads",
    label: "salads",
    href: "#salads",
    image: SaladsImage,
  },
  {
    id: "starters",
    label: "starters",
    href: "#starters",
    image: StartersImage,
  },
  {
    id: "entree",
    label: "entree",
    href: "#entree",
    image: EntreeImage,
  },
  {
    id: "soups",
    label: "soups",
    href: "#soups",
    image: SoupsImage,
  },
  {
    id: "dessert",
    label: "Dessert",
    href: "#dessert",
    image: DessertImage,
  },
  {
    id: "drinks",
    label: "drinks",
    href: "#drinks",
    image: DrinksImage,
  },
];

let dataCategories = {
  salads: [
    {
      id: "salads",
      href: "#",
      label: "Salads",
      price: "$5.26",
      image: SaladsImage,
    },
    {
      id: "salads",
      href: "#",
      label: "Salads",
      price: "$5.26",
      image: SaladsImage,
    },
    {
      id: "salads",
      href: "#",
      label: "Salads",
      price: "$5.26",
      image: SaladsImage,
    },
  ],
  starters: [
    {
      id: "starters",
      href: "#",
      label: "Starters",
      price: "$5.26",
      image: StartersImage,
    },
    {
      id: "starters",
      href: "#",
      label: "Starters",
      price: "$5.26",
      image: StartersImage,
    },
    {
      id: "starters",
      href: "#",
      label: "Starters",
      price: "$5.26",
      image: StartersImage,
    },
  ],
  entree: [
    {
      id: "entree",
      href: "#",
      label: "Entree",
      price: "$5.26",
      image: EntreeImage,
    },
    {
      id: "entree",
      href: "#",
      label: "Entree",
      price: "$5.26",
      image: EntreeImage,
    },
    {
      id: "entree",
      href: "#",
      label: "Entree",
      price: "$5.26",
      image: EntreeImage,
    },
  ],
  soups: [
    {
      id: "soups",
      href: "#",
      label: "Soups",
      price: "$5.26",
      image: SoupsImage,
    },
    {
      id: "soups",
      href: "#",
      label: "Soups",
      price: "$5.26",
      image: SoupsImage,
    },
    {
      id: "soups",
      href: "#",
      label: "Soups",
      price: "$5.26",
      image: SoupsImage,
    },
  ],
  dessert: [
    {
      id: "dessert",
      href: "#",
      label: "Dessert",
      price: "$5.26",
      image: DessertImage,
    },
    {
      id: "dessert",
      href: "#",
      label: "Dessert",
      price: "$5.26",
      image: DessertImage,
    },
    {
      id: "dessert",
      href: "#",
      label: "Dessert",
      price: "$5.26",
      image: DessertImage,
    },
  ],
  drinks: [
    {
      id: "drinks",
      href: "#",
      label: "Drinks",
      price: "$5.26",
      image: DrinksImage,
    },
    {
      id: "drinks",
      href: "#",
      label: "Drinks",
      price: "$5.26",
      image: DrinksImage,
    },
    {
      id: "drinks",
      href: "#",
      label: "Drinks",
      price: "$5.26",
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

let data: Data = [
  {
    id: "home",
    key: "home",
    href: "#home",
    label: "Home",
    content: <Category category={categories} />,
  },
  {
    id: "salads",
    key: "salads",
    href: "#salads",
    label: "Salads",
    content: (
      <SingleCategory title='Salads' singleCategory={dataCategories.salads} />
    ),
  },
  {
    id: "starters",
    key: "starters",
    href: "#starters",
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
    href: "#entree",
    label: "Entree",
    content: (
      <SingleCategory title='Entree' singleCategory={dataCategories.entree} />
    ),
  },
  {
    id: "soups",
    key: "soups",
    href: "#soups",
    label: "Soups",
    content: (
      <SingleCategory title='Soups' singleCategory={dataCategories.soups} />
    ),
  },
  {
    id: "drinks",
    key: "drinks",
    href: "#drinks",
    label: "Drinks",
    content: (
      <SingleCategory title='Drinks' singleCategory={dataCategories.drinks} />
    ),
  },
  {
    id: "dessert",
    key: "dessert",
    href: "#dessert",
    label: "Dessert",
    content: (
      <SingleCategory title='Dessert' singleCategory={dataCategories.dessert} />
    ),
  },
];

export default function CoursesDetail() {
  const searchParams = useSearchParams();
  const category = searchParams.get("category") ?? "home";
  const [tabs, setTabs] = useState(data);
  const router = useRouter();
  const cb = useCallback(
    (key: Key) => {
      if (category !== key) router.push(`?category=${key}`, { scroll: false });
    },
    [router, category]
  );
  return (
    <>
      <Tabs
        size='sm'
        selectedKey={category}
        onSelectionChange={cb}
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
          <Tab key={item.key} title={item.label}>
            {item.content}
          </Tab>
        )}
      </Tabs>
    </>
  );
}
