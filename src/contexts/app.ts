import { createContext } from "react";
import { useTimer } from "hooks/useTimer";

export interface AppContextType extends ReturnType<typeof useTimer> {
  sound: boolean;
  setSound: (val: boolean) => void;
  music: boolean;
  setMusic: (val: boolean) => void;
  step: number;
  setStep: (val: number) => void;
  furthestVisitedStep: number;
  advance: () => void;
  menu: boolean;
  setMenu: (val: boolean) => void;
  menuSection: number | undefined;
  setMenuSection: (val: number | undefined) => void;
  hintsOpen: boolean;
  setHintsOpen: (val: boolean) => void;
  setFurthestVisitedStep: (val: number) => void;
}

export const AppContext = createContext<AppContextType>({} as any);
