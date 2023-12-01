import { Dispatch, SetStateAction, createContext } from "react";

export type PalleteColor = { bg: string; text: string };

export const PalleteContext = createContext<{
  color: PalleteColor;
  setColor: Dispatch<SetStateAction<PalleteColor>>;
  getNextColor: () => PalleteColor;
}>({
  color: { bg: "", text: "" },
  setColor: () => {},
  getNextColor: () => ({ bg: "", text: "" }),
});
