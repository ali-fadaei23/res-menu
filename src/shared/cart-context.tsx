"use client";
import { CircularProgress } from "@nextui-org/react";
import { StaticImageData } from "next/image";
import { PropsWithChildren, createContext, useContext, useState } from "react";

const CartItemsContext = createContext<ReturnType<typeof GetCart> | undefined>(
  undefined
);

const GetCart = () => {
  const [cartItems, setCartItems] = useState<any[]>([]);
  return {
    cartItems,
    setCartItems,
  };
};

export function useCart() {
  return useContext(CartItemsContext);
}

export default function CartProvider({ children }: PropsWithChildren) {
  const value = GetCart();
  return (
    <CartItemsContext.Provider value={value}>
      <>{children}</>
    </CartItemsContext.Provider>
  );
}
