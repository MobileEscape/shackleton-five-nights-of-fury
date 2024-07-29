import classNames from "classnames";
import { FunctionComponent } from "react";
import { useContext } from "react";
import ResetButton from "assets/7 - Button - PopOut Menu - Timer Reset.png";
import StartButton from "assets/7 - Button - PopOut Menu - Timer Start.png";
import StopButton from "assets/8 - Button - PopOut Menu - Timer Stop.png";
import Button from "components/buttons/image-button";
import { AppContext } from "contexts/app";

interface TimerSectionProps {}

const TimerSection: FunctionComponent<TimerSectionProps> = () => {
  const { time, setTime, setPaused, paused } = useContext(AppContext);
  const hours = Math.floor(time / 3600);
  const minutes = Math.floor((time - hours * 3600) / 60);
  const seconds = time - minutes * 60 - hours * 3600;
  return (
    <div className="p-6">
      <div className="font-mrsEaves text-3xl text-center text-white mb-4">{`${`0${hours}`.slice(
        -2
      )}:${`0${minutes}`.slice(-2)}:${`0${seconds}`.slice(-2)}`}</div>
      <div className="flex justify-center gap-4">
        <div className="flex justify-between">
          <button
            className="shadow-sm shadow-black w-24 h-12 pb-1 bg-primary  border-2 border-white rounded-md bg-transparent hover:text-secondary font-mrsEaves hover:border-secondary transition text-white text-3xl font-black leading-0 duration-200"
            onClick={() => {
              setTime(0);
              window.sessionStorage.setItem("timer", "0");
              setPaused(true);
            }}
          >
            Reset
          </button>
        </div>

        <div
          onClick={() => {
            setPaused(!paused);
          }}
          className="cursor-pointer  relative  w-24"
        >
          <button
            className={classNames(
              " absolute shadow-sm shadow-black w-24 h-12 pb-1 bg-primary  border-2 border-white rounded-md bg-transparent hover:text-secondary font-mrsEaves hover:border-secondary transition text-white text-3xl font-black leading-0 duration-200",
              {
                "opacity-0": paused,
                "opacity-100": !paused,
              }
            )}
          >
            Pause
          </button>
          <button
            className={classNames(
              "absolute shadow-sm shadow-black w-24 h-12 pb-1 bg-primary  border-2 border-white rounded-md bg-transparent hover:text-secondary font-mrsEaves hover:border-secondary transition text-white text-3xl font-black leading-0 duration-200",
              {
                "opacity-0": !paused,
                "opacity-100": paused,
              }
            )}
          >
            Start
          </button>
        </div>
      </div>
      {paused && (
        <div className=" font-mrsEaves text-lg text-center text-white leading-tight mt-4">
          Game timer is paused. <br></br> Close menu to resume.
        </div>
      )}
    </div>
  );
};

export default TimerSection;
