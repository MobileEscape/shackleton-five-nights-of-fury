import Frame, { FrameProps } from "components/frames/frame";
import { FunctionComponent, useContext, lazy, Suspense } from "react";

import Logo from "assets/Logo.png";
import ShipInIceLoading from "assets/Ship-in-ice-loading.png";
import ShipInIce from "assets/Ship-in-ice.png";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { AppContext } from "contexts/app";
import "react-lazy-load-image-component/src/effects/blur.css";
const Trapeze = lazy(() => import("components/trapeze"));
const MainButton = lazy(() => import("components/buttons/main-button"));

interface InitialFrameProps extends FrameProps {}

const InitialFrame: FunctionComponent<InitialFrameProps> = ({ index }) => {
  const { advance } = useContext(AppContext);

  return (
    <Frame index={index}>
      <Suspense>
        <div className="w-full h-full flex flex-col overflow-hidden">
          <div className="mt-32 basis-0 "></div>
          <div>
            <div className="flex justify-center -mt-16">
              <Trapeze
                width={275}
                height={25}
                color="rgba(61,72,96,1)"
                side="top"
              ></Trapeze>
            </div>
            <h1 className="absolute -bottom-5 w-full bg-[rgba(61,72,96,1)] flex flex-col text-center text-3xl md:text-5xl justify-center font-mrsEaves my-5   text-white">
              EPISODE 4 <p className="text-xl -mt-3">Five Nights of Fury</p>
            </h1>
            <div className="bg-primary flex justify-center py-2  ">
              <img className="w-80" src={Logo} loading="lazy" alt=""></img>
            </div>
            <div className="flex text-center text-xl md:text-2xl justify-center font-mrsEaves my-4  [text-shadow:0px_0px_10px_var(--tw-shadow-color)] shadow-white">
              HISTORICAL FICTION <br></br> SERIES
            </div>
            <div className="relative opacity-20 flex-grow m-auto left-0 right-0 -top-16 bottom-0  w-[45vh] ">
              <LazyLoadImage
                src={ShipInIce}
                placeholderSrc={ShipInIceLoading}
                effect="blur"
                alt=""
              />
            </div>
          </div>
          <div
            onClick={advance}
            className="absolute  bottom-16 md:bottom-24 w-full flex  justify-center scale-90 "
          >
            <MainButton text="Start" />
          </div>
        </div>
      </Suspense>
    </Frame>
  );
};

export default InitialFrame;
