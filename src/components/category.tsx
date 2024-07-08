import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Button,
} from "@nextui-org/react";
import SaladsImage from "../assets/salads.jpg";
import EntreeImage from "../assets/entree.jpg";
import DrinksImage from "../assets/drinks.jpg";
import DessertImage from "../assets/dessert.jpg";
import StartersImage from "../assets/starters.jpg";
import SoupsImage from "../assets/soups.jpg";
import Link from "next/link";
import { RobotoFont } from "@/app/page";

// let category = [
//   {
//     id: "salads",
//     href: "#",
//     image: SaladsImage,
//     label: "Salads",
//   },
//   {
//     id: "starters",
//     href: "#",
//     image: StartersImage,
//     label: "Starters",
//   },
//   {
//     id: "entree",
//     href: "#",
//     image: EntreeImage,
//     label: "Entree",
//   },
//   {
//     id: "soups",
//     href: "#",
//     image: SoupsImage,
//     label: "Soups",
//   },
//   {
//     id: "drinks",
//     href: "#",
//     image: DrinksImage,
//     label: "Drinks",
//   },
//   {
//     id: "dessert",
//     href: "#",
//     image: DessertImage,
//     label: "Dessert",
//   },
// ];

const category = [
  {
    id: "salads",
    label: "New York Style Pizza",
    href: "#",
    image: SaladsImage,
    price: "$5.50",
  },
  {
    id: "salads",
    label: "New York Style Pizza",
    href: "#",
    image: SaladsImage,
    price: "$5.50",
  },
  {
    id: "salads",
    label: "New York Style Pizza",
    href: "#",
    image: SaladsImage,
    price: "$5.50",
  },
  {
    id: "salads",
    label: "New York Style Pizza",
    href: "#",
    image: SaladsImage,
    price: "$5.50",
  },
  {
    id: "salads",
    label: "New York Style Pizza",
    href: "#",
    image: SaladsImage,
    price: "$5.50",
  },
  {
    id: "entree",
    label: "New York Style Pizza",
    href: "#",
    image: SaladsImage,
    price: "$5.50",
  },
  {
    id: "salads",
    label: "New York Style Pizza",
    href: "#",
    image: SaladsImage,
    price: "$5.50",
  },
  {
    id: "starters",
    label: "New York Style Pizza",
    href: "#",
    image: SaladsImage,
    price: "$5.50",
  },
  {
    id: "drinks",
    label: "New York Style Pizza",
    href: "#",
    image: SaladsImage,
    price: "$5.50",
  },
  {
    id: "dessert",
    label: "New York Style Pizza",
    href: "#",
    image: SaladsImage,
    price: "$5.50",
  },
  {
    id: "soups",
    label: "New York Style Pizza",
    href: "#",
    image: SaladsImage,
    price: "$5.50",
  },
  {
    id: "salads",
    label: "New York Style Pizza",
    href: "#",
    image: SaladsImage,
    price: "$5.50",
  },
  {
    id: "salads",
    label: "New York Style Pizza",
    href: "#",
    image: SaladsImage,
    price: "$5.50",
  },
  {
    id: "salads",
    label: "New York Style Pizza",
    href: "#",
    image: SaladsImage,
    price: "$5.50",
  },
  {
    id: "salads",
    label: "New York Style Pizza",
    href: "#",
    image: SaladsImage,
    price: "$5.50",
  },
  {
    id: "salads",
    label: "New York Style Pizza",
    href: "#",
    image: SaladsImage,
    price: "$5.50",
  },
  {
    id: "salads",
    label: "New York Style Pizza",
    href: "#",
    image: SaladsImage,
    price: "$5.50",
  },
  {
    id: "salads",
    label: "New York Style Pizza",
    href: "#",
    image: SaladsImage,
    price: "$5.50",
  },
  {
    id: "salads",
    label: "New York Style Pizza",
    href: "#",
    image: SaladsImage,
    price: "$5.50",
  },
  {
    id: "salads",
    label: "New York Style Pizza",
    href: "#",
    image: SaladsImage,
    price: "$5.50",
  },
  {
    id: "salads",
    label: "New York Style Pizza",
    href: "#",
    image: SaladsImage,
    price: "$5.50",
  },
  {
    id: "salads",
    label: "New York Style Pizza",
    href: "#",
    image: SaladsImage,
    price: "$5.50",
  },
];

export default function Category() {
  return (
    <div
      className={`w-full flex flex-col items-center gap-5 px-2 ${RobotoFont.className}`}
    >
      {category.map((item) => (
        <Link key={item.id} href={`/courses/${item.id}`}>
          <Card id={item.id} shadow='sm' isPressable>
            <CardBody className='overflow p-0'>
              <Image
                shadow='sm'
                radius='lg'
                alt={item.label}
                className='object-cover w-[28rem] h-[28rem]'
                src={item.image.src}
              />
            </CardBody>
            <CardFooter className='text-small justify-between'>
              <span className='text-lg font-semibold'>{item.label}</span>
              <p className='text-default-500 text-lg'>{item.price}</p>
            </CardFooter>
          </Card>
        </Link>
      ))}
    </div>
  );
}
