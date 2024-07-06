import Image from "next/image";
import RestaurantLogo from "../assets/friendly-s-restaurant.svg";
import BrandLogo from "../assets/wix-company-icon.svg";

export default function SplashScreen() {
  return (
    <div className='flex flex-col items-center gap-40'>
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
      <div className='text-center flex flex-col gap-5'>
        <span className='text-xl'>Table #1</span>
        <p className='flex flex-col text-2xl'>
          Crafted menu<span>experiance.</span>
        </p>
      </div>
    </div>
  );
}
