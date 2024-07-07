import Image from "next/image";
import BrandLogo from "../assets/wix-company-icon.svg";
import FlagGb from "../assets/gb.svg";
import FlagNl from "../assets/nl.svg";
import Link from "next/link";
import { roboto_mono } from "@/app/page";

export default function LanguageScreen() {
  return (
    <div className='w-full flex flex-col items-center gap-80'>
      <div className='mt-10'>
        <Image src={BrandLogo} width={128} height={128} alt='Logo Company' />
      </div>
      <div className='flex flex-col items-center gap-4'>
        <div className='text-center flex flex-col'>
          <p className='flex flex-col text-2xl'>
            Please choose your<span>desired language.</span>
          </p>
        </div>
        <div
          className={`text-center flex flex-col ${roboto_mono.className} text-xs`}
        >
          <div className='w-full mt-6 flex flex-row items-center justify-center gap-7'>
            <Image src={FlagGb} width={48} height={48} alt='Logo Language GB' />
            <Link href={`/courses`}>
              <div className='bg-neutral-200 hover:bg-neutral-300 py-3 rounded-lg w-60'>
                English
              </div>
            </Link>
          </div>
          <div className='w-full mt-6 flex flex-row items-center justify-center gap-7'>
            <Image src={FlagNl} width={48} height={48} alt='Logo Language NL' />
            <Link href={`/courses`}>
              <div className='bg-neutral-200 hover:bg-neutral-300 py-3 rounded-lg w-60'>
                Dutch
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
