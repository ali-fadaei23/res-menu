import LanguageScreen from "@/components/language";
import SplashScreen from "@/components/splash";
import Splash from "@/components/splash";
import Image from "next/image";
import { Roboto_Mono } from "next/font/google";

export const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
  display: "swap",
});

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between'>
      <SplashScreen />
    </main>
  );
}
