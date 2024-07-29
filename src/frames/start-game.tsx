import Frame, { FrameProps } from "components/frames/frame";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useNavigate } from "react-router-dom";
import "react-lazy-load-image-component/src/effects/blur.css";
import ShipInIce from "assets/Ship-in-ice.png";
import ShipInIceLoading from "assets/Ship-in-ice-loading.png";
import { AppContext } from "contexts/app";
import { FunctionComponent, useContext, lazy } from "react";

const MainButton = lazy(() => import("components/buttons/main-button"));

interface YourFirstMissionFrameProps extends FrameProps {}

const StartGame: FunctionComponent<YourFirstMissionFrameProps> = ({
  index,
}) => {
  const navigate = useNavigate();
  const { advance, setPaused } = useContext(AppContext);
  return (
    <Frame index={index}>
      <div className="relative w-[360px] m-auto mt-[30vh] ">
        <div className="absolute  w-[500px]   top-0 -left-[25%] transition duration-1000 opacity-30">
          <LazyLoadImage
            src={ShipInIce}
            placeholderSrc={ShipInIceLoading}
            effect="blur"
            alt=""
          />
        </div>
        <h1 className="text-center font-kingEdwards text-primary font-semibold text-8xl">
          Are you ready?
        </h1>
        <br />
        <p className="relative text-2xl mt-6 px-4 z-30 font-mrsEaves mx-4">
          See recap of{" "}
          <a
            onClick={() => navigate("/recap")}
            className="z-30 text-secondary hover:text-primary transition duration-300 cursor-pointer"
          >
            Episode 1
          </a>
          , or:
        </p>
      </div>
      <div className="flex-grow basis-0 flex items-center justify-center flex-shrink-0 mt-10 ">
        <MainButton
          text="Start Game"
          onClick={() => {
            advance();
            setPaused(false);
          }}
        />
      </div>
    </Frame>
  );
};

export default StartGame;
