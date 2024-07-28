"use client";
import AppProvider from "@/shared/context";
import { NextUIProvider } from "@nextui-org/react";
import { useEffect, useState } from "react";

export function Providers({ children }: { children: React.ReactNode }) {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    isClient && (
      <NextUIProvider className='w-full'>
        <AppProvider>{children}</AppProvider>
      </NextUIProvider>
    )
  );
}
