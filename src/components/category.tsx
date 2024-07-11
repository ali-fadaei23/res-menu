import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Button,
  Tabs,
  Tab,
} from "@nextui-org/react";
import { useRouter } from "next/navigation";
import SaladsImage from "../assets/salads.jpg";
import EntreeImage from "../assets/entree.jpg";
import DrinksImage from "../assets/drinks.jpg";
import DessertImage from "../assets/dessert.jpg";
import StartersImage from "../assets/starters.jpg";
import SoupsImage from "../assets/soups.jpg";
import Link from "next/link";
import { RobotoFont } from "@/app/page";
import { useState } from "react";
import { StaticImageData } from "next/image";

export default function Category(props: {
  category: {
    id: string;
    label: string;
    href: string;
    image: StaticImageData;
  }[];
}) {
  const router = useRouter();

  return (
    <div
      className={`w-full grid grid-cols-2 gap-5 px-2 ${RobotoFont.className}`}
    >
      {props.category.map((item) => (
        <div key={item.id} id='home'>
          <Link href={`#${item.id}`}>
            <Card id={item.id} shadow='sm' isPressable>
              <CardBody className='w-full overflow p-0 '>
                <Image
                  removeWrapper
                  shadow='sm'
                  radius='lg'
                  alt={item.label}
                  className='object-cover w-52 h-52'
                  src={item.image.src}
                />
              </CardBody>
              <CardFooter className='text-small text-[#f0f0f0] absolute bottom-0 z-30 justify-center'>
                <span className='text-lg font-semibold capitalize'>
                  {item.label}
                </span>
              </CardFooter>
            </Card>
          </Link>
        </div>
      ))}
    </div>
  );
}
