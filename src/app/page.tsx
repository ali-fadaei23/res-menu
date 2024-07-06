import LanguageScreen from "@/components/language";
import Splash from "@/components/splash";
import Image from "next/image";

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between'>
      {/* <Splash /> */}
      <LanguageScreen />
    </main>
  );
}
