"use client";

import { NextUIProvider } from "@nextui-org/react";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      <div className='size-full sm:w-[480px] border-x-2'>{children}</div>
    </NextUIProvider>
  );
}
