"use client";
import { CircularProgress } from "@nextui-org/react";
import { StaticImageData } from "next/image";
import { PropsWithChildren, createContext, useContext, useState } from "react";

const AppContext = createContext<ReturnType<typeof GetData> | undefined>(
  undefined
);

const GetData = () => {
  const [cartItems, setCartItems] = useState<any[]>([]);
  const [statusOrder, setStatusOrder] = useState<String>("");
  const [activeTab, setActiveTab] = useState(0);
  return {
    cartItems,
    setCartItems,
    activeTab,
    setActiveTab,
    statusOrder,
    setStatusOrder,
  };
};

export function useData() {
  return useContext(AppContext);
}

export default function AppProvider({ children }: PropsWithChildren) {
  const value = GetData();
  return (
    <AppContext.Provider value={value}>
      {value === undefined && value === null ? (
        <div className='absolute left-0 top-0 w-screen h-screen opacity-40 flex items-center justify-center'>
          <CircularProgress
            size='lg'
            color='primary'
            label='Now Loading'
            className='absolute left-1/2 top-1/2 text-black'
          />
        </div>
      ) : (
        <>{children}</>
      )}
    </AppContext.Provider>
  );
}
