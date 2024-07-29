import { createContext } from "react";

export type ScaleContextType = number;

export const ScaleContext = createContext<ScaleContextType>(1);
