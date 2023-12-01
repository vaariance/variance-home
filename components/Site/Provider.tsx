"use client";
import { FC, PropsWithChildren, useState } from "react";
import { PalleteColor, PalleteContext } from "./Context";

export const PalleteProvider: FC<PropsWithChildren> = ({ children }) => {
  const [color, setColor] = useState<PalleteColor>({
    bg: "bg-gray-950",
    text: "text-blue-700",
  });

  const getNextColor = () => {
    switch (color.bg) {
      case "bg-gray-950":
        return { bg: "bg-blue-700", text: "text-red-700" };
      case "bg-blue-700":
        return { bg: "bg-red-700", text: "text-purple-700" };
      case "bg-red-700":
        return { bg: "bg-purple-700", text: "text-stone-700" };
      case "bg-purple-700":
        return { bg: "bg-stone-700", text: "text-gray-950" };
      default:
        return { bg: "bg-gray-950", text: "text-blue-700" };
    }
  };

  return (
    <PalleteContext.Provider value={{ color, setColor, getNextColor }}>
      {children}
    </PalleteContext.Provider>
  );
};
