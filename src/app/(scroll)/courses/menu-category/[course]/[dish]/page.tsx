"use client";
import { dataCategories } from "@/components/courses-detail";
import Dish from "@/components/dish";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function DishScreen() {
  const pathname = usePathname().split("/");
  const category: keyof typeof dataCategories = pathname[
    pathname.length - 2
  ] as any;

  const id = pathname[pathname.length - 1];

  const d = dataCategories[`${category}`].map((item) => {
    return {
      id: item.id,
      label: item.label,
      price: item.price,
    };
  });

  const dishProduct = d.find((item) => item.id === id)!;

  const [product, setProduct] = useState(dishProduct);

  return (
    <main className='flex min-h-screen flex-col items-center'>
      <Dish dish={product} />
    </main>
  );
}
