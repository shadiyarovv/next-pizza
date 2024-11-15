"use client";

import { cn } from "@/lib/utils";
import React from "react";
import { useCategoryStore } from "../../../store/category";

interface Props {
  className?: string;
}

const categories = [
  { id: 1, title: "Пиццы" },
  { id: 2, title: "Комбо" },
  { id: 3, title: "Закуски" },
  { id: 4, title: "Коктейли" },
  { id: 5, title: "Кофе" },
  { id: 6, title: "Напитки" },
  { id: 7, title: "Десерты" },
  { id: 8, title: "Десерты" },
];

export const Categories: React.FC<Props> = ({ className }: Props) => {
  const categoryActiveId = useCategoryStore((state) => state.activeId);

  return (
    <div
      className={cn("inline-flex gap-1 bg-gray-50 p-1 rounded-2xl", className)}
    >
      {categories.map(({ title, id }, index) => (
        <a
          className={cn(
            "flex items-center font-bold h-11 rounded-2xl px-5",
            categoryActiveId === id
              ? "bg-white shadow-md shadow-gray-200 text-primary"
              : ""
          )}
          href={`/#${title}`}
          key={index}
        >
          <button>{title}</button>
        </a>
      ))}
    </div>
  );
};
