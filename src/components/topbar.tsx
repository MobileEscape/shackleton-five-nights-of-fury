import { FunctionComponent, lazy } from "react";
import { useLocation } from "react-router-dom";

import { AppContext } from "contexts/app";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import classNames from "classnames";
const SecondaryButton = lazy(
  () => import("components/buttons/secondary-button")
);

interface TopbarProps {
  noBackground?: boolean;
}

const Topbar: FunctionComponent<TopbarProps> = ({ noBackground = false }) => {
  const { setStep, step, furthestVisitedStep, menu, setMenu, time } =
    useContext(AppContext);
  const hours = Math.floor(time / 3600);
  const minutes = Math.floor((time - hours * 3600) / 60);
  const seconds = time - minutes * 60 - hours * 3600;
  const genericHamburgerLine = `h-1 w-8 my-1 rounded-full bg-primary transition ease transform duration-300 drop-shadow-md`;
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className="absolute left-0 top-0 w-full z-20">
      {!noBackground ? null : (
        <div className="absolute left-0 top-0 w-full h-full "></div>
      )}

      <div className=""></div>
      <div className="absolute left-0 top-3 w-full h-full flex items-center justify-center z-10 pointer-events-none">
        {time ? (
          <div className="font-mrsEaves text-4xl text-center text-black mb-4  ">{`${`0${hours}`.slice(
            -2
          )}:${`0${minutes}`.slice(-2)}:${`0${seconds}`.slice(-2)}`}</div>
        ) : (
          <div />
        )}
      </div>

      <div
        className={classNames(
          "flex justify-between items-center px-4 h-[70px]",
          {
            "bg-black/00": !noBackground,
          }
        )}
      >
        <button
          className="flex flex-col h-12 w-12  justify-center items-center group"
          onClick={() => setMenu(!menu)}
        >
          <div
            className={`${genericHamburgerLine} ${
              menu
                ? "rotate-45 translate-y-3 opacity-50 group-hover:opacity-100 "
                : "opacity-100 group-hover:bg-secondary"
            }`}
          />
          <div
            className={`${genericHamburgerLine} ${
              menu ? "opacity-0" : "opacity-100 group-hover:bg-secondary"
            }`}
          />
          <div
            className={`${genericHamburgerLine} ${
              menu
                ? "-rotate-45 -translate-y-3 opacity-50 group-hover:opacity-100"
                : "opacity-100 group-hover:bg-secondary"
            }`}
          />
        </button>

        <div className="flex">
          {step > 0 && location.pathname == "/" && (
            <button
              className="mr-1  shadow-sm shadow-black w-x-2 md:w-12 md:h-12 h-10 w-10 pb-1 hover:bg-primary  border-2 hover:border-white rounded-md bg-transparent text-primary font-mrsEaves border-primary transition hover:text-white text-3xl font-black leading-0 duration-200"
              onClick={() => setStep(Math.max(step - 1, 0))}
            >
              {"<"}
            </button>
          )}
          {location.pathname != "/" && (
            <button
              className="mr-1  shadow-sm shadow-black w-x-2 md:w-12 md:h-12 h-10 w-10 pb-1 hover:bg-primary  border-2 hover:border-white rounded-md bg-transparent text-primary font-mrsEaves border-primary transition hover:text-white text-3xl font-black leading-0 duration-200"
              onClick={() => navigate(-1)}
            >
              {"<"}
            </button>
          )}
          {furthestVisitedStep > step && location.pathname == "/" && (
            <button
              className="mr-1  shadow-sm shadow-black w-x-2  md:w-12 md:h-12 h-10 w-10 pb-1 hover:bg-primary  border-2 hover:border-white rounded-md bg-transparent text-primary font-mrsEaves border-primary transition hover:text-white text-3xl font-black leading-0 duration-200"
              onClick={() => setStep(step + 1)}
            >
              {">"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Topbar;
