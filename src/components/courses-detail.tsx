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

export default function CoursesDetail() {
  const pathname = usePathname();
  let tabs = [
    {
      id: "home",
      href: "#",
      label: "Home",
      content: <Category />,
    },
    {
      id: "salads",
      href: "#",
      image: SaladsImage,
      label: "Salads",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      id: "starters",
      href: "#",
      image: StartersImage,
      label: "Starters",
      content:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      id: "entree",
      href: "#",
      image: EntreeImage,
      label: "Entree",
      content:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      id: "soups",
      href: "#",
      image: SoupsImage,
      label: "Soups",
      content:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      id: "drinks",
      href: "#",
      image: DrinksImage,
      label: "Drinks",
      content:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      id: "dessert",
      href: "#",
      image: DessertImage,
      label: "Dessert",
      content:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
  ];
  return (
    <>
      <Tabs
        size='sm'
        className={`w-full bg-white sticky top-0 z-20`}
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
          <Tab href={`#${item.id}`} key={item.id} title={item.label}>
            <div id='home'>
              <Category key={item.id} />
            </div>
          </Tab>
        )}
      </Tabs>
    </>
  );
}
