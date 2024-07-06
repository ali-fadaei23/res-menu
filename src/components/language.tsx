import Image from "next/image";
import BrandLogo from "../assets/wix-company-icon.svg";
import FlagGb from "../assets/gb.svg";
import FlagNl from "../assets/nl.svg";

export default function LanguageScreen() {
  return (
    <div className='flex flex-col items-center gap-40'>
      <div className='mt-10'>
        <Image src={BrandLogo} width={128} height={128} alt='Logo Company' />
      </div>
      <div className='text-center flex flex-col gap-5'>
        <p className='flex flex-col text-2xl'>
          Please choose your<span>desired language.</span>
        </p>
      </div>
      <div className='text-center flex flex-col gap-5'>
        <div className='mt-10'>
          <Image src={FlagGb} width={128} height={128} alt='Logo Company' />
        </div>
        <div className='mt-10'>
          <Image src={FlagNl} width={128} height={128} alt='Logo Company' />
        </div>
      </div>
    </div>
  );
}
