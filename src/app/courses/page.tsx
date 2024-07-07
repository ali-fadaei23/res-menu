import HeaderCourses from "@/components/header-courses";
import LanguageScreen from "@/components/language";
import Navbar from "@/components/navbar";
import SplashScreen from "@/components/splash";
import Splash from "@/components/splash";
import Image from "next/image";

export default function Courses() {
  return (
    <main className='flex min-h-screen flex-col items-center'>
      <Navbar />
      <HeaderCourses />
    </main>
  );
}
