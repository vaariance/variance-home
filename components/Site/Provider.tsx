"use client";
import { FC, PropsWithChildren, useState } from "react";
import { PalleteColor, PalleteContext } from "./Context";

export const PalleteProvider: FC<PropsWithChildren> = ({ children }) => {
  const [color, setColor] = useState<PalleteColor>({
    bg: "bg-gray-50",
    text: "text-gray-950",
  });

  const getNextColor = () => {
    switch (color.bg) {
      case "bg-gray-50":
        return { bg: "bg-gray-950", text: "text-gray-100" };
      default:
        return { bg: "bg-gray-50", text: "text-gray-950" };
    }
  };

  return (
    <PalleteContext.Provider value={{ color, setColor, getNextColor }}>
      {children}
    </PalleteContext.Provider>
  );
};
