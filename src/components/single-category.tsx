import { StaticImageData } from "next/image";
import Link from "next/link";
import { CardBody, Image, CardFooter, Card } from "@nextui-org/react";
import { RobotoFont } from "@/app/page";

export default function SingleCategory(props: {
  singleCategory: {
    id: string;
    label: string;
    price: string;
    href: string;
    image: StaticImageData;
  }[];
}) {
  return (
    <div
      className={`w-full grid grid-cols-1 gap-5 px-2 ${RobotoFont.className}`}
    >
      {props.singleCategory.map((item) => (
        <div key={item.id} id='home'>
          <Link href={`#${item.id}`}>
            <Card id={item.id} shadow='sm' isPressable>
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
              <CardFooter className='z-30 justify-center'>
                <div className='w-full flex flex-row items-center justify-between'>
                  <span className='text-lg font-semibold capitalize'>
                    {item.label}
                  </span>
                  <span className='text-lg font-semibold text-neutral-500'>
                    {item.price}
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
