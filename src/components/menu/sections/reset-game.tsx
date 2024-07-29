import classNames from "classnames";
import { FunctionComponent } from "react";
import { useContext } from "react";
import { AppContext } from "contexts/app";

interface ResetGameSectionProps {}

const ResetGameSection: FunctionComponent<ResetGameSectionProps> = () => {
  const { setTime, setMenu, setFurthestVisitedStep, setStep, setPaused } =
    useContext(AppContext);
  return (
    <div className="p-6">
      <div className="font-mrsEaves text-3xl text-center text-white mb-4">
        Are you sure?
      </div>
      <div className="flex justify-center gap-4">
        <div className="flex justify-between">
          <button
            className="shadow-sm shadow-black w-24 h-12 pb-1 bg-primary  border-2 border-white rounded-md bg-transparent hover:text-secondary font-mrsEaves hover:border-secondary transition text-white text-3xl font-black leading-0 duration-200"
            onClick={() => {
              window.sessionStorage.clear();
              setMenu(false);
              setTime(0);
              setPaused(true);
              setFurthestVisitedStep(0);
              setStep(0);
            }}
          >
            Reset
          </button>
        </div>

        <div
          onClick={() => setMenu(false)}
          className="cursor-pointer  relative  w-24"
        >
          <button
            className={classNames(
              " absolute shadow-sm shadow-black w-24 h-12 pb-1 bg-primary  border-2 border-white rounded-md bg-transparent hover:text-secondary font-mrsEaves hover:border-secondary transition text-white text-3xl font-black leading-0 duration-200"
            )}
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResetGameSection;
