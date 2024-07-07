import Image from "next/image";
import Link from "next/link";
import BrandLogo from "../assets/wix-company-icon.svg";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { MdStars, MdInfo } from "react-icons/md";
import { roboto_mono } from "@/app/page";

export default function HeaderCourses() {
  return (
    <div
      className={`bg-header w-full flex flex-col items-center pt-20 pb-10 px-10`}
    >
      <div className='text-white flex flex-col items-start justify-start gap-3'>
        <h1 className='font-extrabold text-xl'>friendly&apos;s Restaurant</h1>
        <p className={`${roboto_mono.className}`}>
          Friendly&apos;s is a restaurant chain on the East Coast of the United
          States.{" "}
        </p>
      </div>
    </div>
  );
}
