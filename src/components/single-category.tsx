"use client";
import { StaticImageData } from "next/image";
import Link from "next/link";
import { CardBody, Image, CardFooter, Card } from "@nextui-org/react";
import { RobotoFont } from "@/app/page";
import { useSearchParams } from "next/navigation";

export default function SingleCategory(props: {
  singleCategory: {
    id: string;
    label: string;
    price: number;
    href: string;
    image: StaticImageData;
  }[];
  title: string;
}) {
  return (
    <div className={`w-full grid grid-cols-1 gap-5 px-2`}>
      <h1 className={`text-3xl`}>{props.title}</h1>
      {props.singleCategory.map((item) => (
        <div
          id={item.id}
          className={`${RobotoFont.className}`}
          key={`${item.id}`}
        >
          <Link href={item.href}>
            <Card shadow='sm' isPressable>
              <CardBody className='w-full overflow p-0 '>
                <Image
                  removeWrapper
                  shadow='sm'
                  radius='lg'
                  alt={item.label}
                  className='object-cover w-[28rem] h-[28rem]'
                  src={item.image.src}
                />
              </CardBody>
              <CardFooter className='justify-center'>
                <div className='w-full flex flex-row items-center justify-between'>
                  <span className='text-lg font-semibold capitalize'>
                    {item.label}
                  </span>
                  <span className='text-lg font-semibold text-neutral-500'>
                    {`$${item.price}`}
                  </span>
                </div>
              </CardFooter>
            </Card>
          </Link>
        </div>
      ))}
    </div>
  );
}
