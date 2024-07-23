"use client";
import { CircularProgress } from "@nextui-org/react";
import { StaticImageData } from "next/image";
import { PropsWithChildren, createContext, useContext, useState } from "react";

const AppContext = createContext<ReturnType<typeof GetData> | undefined>(
  undefined
);

const GetData = () => {
  const [cartItems, setCartItems] = useState<any[]>([]);
  const [activeTab, setActiveTab] = useState(0);
  return {
    cartItems,
    setCartItems,
    activeTab,
    setActiveTab,
  };
};

export function useData() {
  return useContext(AppContext);
}

export default function AppProvider({ children }: PropsWithChildren) {
  const value = GetData();
  return (
    <AppContext.Provider value={value}>
      <>{children}</>
    </AppContext.Provider>
  );
}
