import Image from "next/image";
import RestaurantLogo from "../assets/friendly-s-restaurant.svg";
import BrandLogo from "../assets/wix-company-icon.svg";
import { TbSquareRoundedChevronsRightFilled } from "react-icons/tb";
import Link from "next/link";

export default function SplashScreen() {
  return (
    <div className='w-full flex flex-col items-center gap-36'>
      <div className='mt-10'>
        <Image src={BrandLogo} width={128} height={128} alt='Logo Company' />
      </div>
      <div>
        <Image
          src={RestaurantLogo}
          width={300}
          height={300}
          alt='Logo Restaurant'
        />
      </div>
      <div className='w-full text-center flex flex-col gap-8'>
        <span className='text-xl'>Table #1</span>
        <p className='flex flex-col text-2xl'>
          Crafted menu<span>experiance.</span>
        </p>
        <div className='w-full flex items-center justify-end'>
          <Link
            className='mr-4 hover:text-gray-800'
            href={"/page-language"}
          >
            <TbSquareRoundedChevronsRightFilled className="text-5xl" />
          </Link>
        </div>
      </div>
    </div>
  );
}
