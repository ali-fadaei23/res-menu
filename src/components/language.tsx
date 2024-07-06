import Image from "next/image";
import BrandLogo from "../assets/wix-company-icon.svg";
import FlagGb from "../assets/gb.svg";
import FlagNl from "../assets/nl.svg";
import Link from "next/link";
import { Roboto_Mono } from "next/font/google";

export const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
  display: "swap",
});

export default function LanguageScreen() {
  return (
    <div className='w-full flex flex-col items-center gap-64'>
      <div className='mt-10'>
        <Image src={BrandLogo} width={128} height={128} alt='Logo Company' />
      </div>
      <div className='w-3/5'>
        <div className='text-center flex flex-col'>
          <p className='flex flex-col text-2xl'>
            Please choose your<span>desired language.</span>
          </p>
        </div>
        <div
          className={`text-center flex flex-col ${roboto_mono.className} text-xs`}
        >
          <div className='mt-6 flex flex-row items-center gap-6'>
            <Image src={FlagGb} width={48} height={48} alt='Logo Language GB' />
            <Link href={`#`}>
              <div className='bg-neutral-200 py-3 px-2 rounded-lg w-60'>
                English
              </div>
            </Link>
          </div>
          <Link href={`#`}>
            <div className='mt-6 flex flex-row items-center gap-6'>
              <Image
                src={FlagNl}
                width={48}
                height={48}
                alt='Logo Language NL'
              />
              <div className='bg-neutral-200 py-3 px-2 rounded-lg w-60'>
                Netherlands
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
