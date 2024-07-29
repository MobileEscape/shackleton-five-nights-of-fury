import { FunctionComponent, useContext } from "react";
import { AppContext } from "contexts/app";
import classNames from "classnames";

interface HintToggleProps {}

const HintToggle: FunctionComponent<HintToggleProps> = () => {
  const { hintsOpen, setHintsOpen } = useContext(AppContext);
  return (
    <>
      <button
        onClick={() => {
          setHintsOpen(false);
        }}
        className={classNames(
          "fixed z-10 right-4 bottom-4 md:right-8 md:bottom-8 w-12 h-12 bg-secondary rounded-full text-black ring-2 shodow-md shadow-secondary ring-black text-3xl",
          {
            "invisible pointer-events-none": !hintsOpen,
          }
        )}
      >
        ?
      </button>
      <button
        onClick={() => {
          setHintsOpen(true);
        }}
        className={classNames(
          "fixed  z-10 right-4  bottom-4 md:right-8 md:bottom-8 w-12 h-12 bg-white/80  md:bg-transparent rounded-full text-primary text-3xl ring-2 shodow-md shadow-secondary ring-primary",
          {
            "invisible pointer-events-none": hintsOpen,
          }
        )}
      >
        ?
      </button>
    </>
  );
};

export default HintToggle;
