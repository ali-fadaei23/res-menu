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
import Link from "next/link";

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

let dataCategories = {
  salads: [
    {
      id: "salads",
      href: "/1",
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
  const pathname = usePathname();
  const [selected, setSelected] = useState(pathname);
  console.log(pathname);

  const router = useRouter();
  // const cb = useCallback(
  //   (key: Key) => {
  //     window.scrollTo({ behavior: "smooth", top: 0 });
  //     router.push(`/${key}`, { scroll: false });
  //     // if (category !== key) {
  //     // }
  //   },
  //   [router, category]
  // );

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
        {(item) => (
          <Tab href={item.href} key={item.href} title={item.label}>
            <Link key={item.href} href={item.href}>
              {item.content}
            </Link>
          </Tab>
        )}
      </Tabs>
    </>
  );
}
