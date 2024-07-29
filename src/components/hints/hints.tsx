import {
  FunctionComponent,
  ReactElement,
  useContext,
  useEffect,
  useState,
} from "react";
import InsideButton from "../buttons/inside-button";
import { AppContext } from "contexts/app";
import classNames from "classnames";
import Border from "assets/Border-bg.png";
import HintsSection from "./hintsSection";

interface HintsProps {}

const Hints: FunctionComponent<HintsProps> = () => {
  const { hintsOpen, setHintsOpen, step } = useContext(AppContext);

  return (
    <div
      className={classNames(
        "font-din leading-tight text-white fixed left-0 top-0 w-full h-full flex flex-col z-40 transition ease-out duration-300 pointer-events-none",
        {
          "translate-x-full ": !hintsOpen,
          "translate-x-0 ": hintsOpen,
        }
      )}
    >
      <div className="flex-grow h-0 p-4">
        <div className="w-full h-full relative flex">
          <div className="max-w-[350px] max-h-full w-full h-[600px] m-auto absolute right-0  bottom-0 flex">
            <img
              src={Border}
              className="absolute max-w-[90vw] w-[96%] h-[98%] z-0 top-0 left-0 m-2"
            />
            <div
              className={classNames(
                "w-full h-full  flex flex-col z-10 p-2  scale-90  overflow-auto",
                {
                  "pointer-events-auto": hintsOpen,
                }
              )}
            >
              <button
                className="absolute w-8 right-4 text-2xl top-0 hover:text-secondary border hover:border-secondary border-white rounded-full"
                onClick={() => setHintsOpen(false)}
              >
                X
              </button>
              <HintsSection />
            </div>
          </div>
        </div>
      </div>
      <div className="h-16"></div>
    </div>
  );
};

export default Hints;
