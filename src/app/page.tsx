import LanguageScreen from "@/components/language";
import Splash from "@/components/splash";
import Image from "next/image";
import localFont from "next/font/local";

export const RobotoFont = localFont({
  src: "../assets/fonts/Roboto-Regular.ttf",
});

export default function SplashScreen() {
  return <Splash />;
}
