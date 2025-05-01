import Frame, { FrameProps } from "components/frames/non-game-frame";
import { useNavigate, useLocation } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import OctagonVideo from "components/framingvideo";
import { FunctionComponent, lazy } from "react";
import "react-lazy-load-image-component/src/effects/blur.css";

import BoatsGridAnswer from "assets/Hint-Images/BoatsGridAnswer.jpg";
import DudleyDockerClue from "assets/Hint-Images/Dudley-Docker-Clue.gif";
import IceFlowSolution from "assets/Hint-Images/IceFlowSolution.jpg";
import JamesCairdClue from "assets/Hint-Images/James-Caird-Clue.gif";
import StancombWillsClue from "assets/Hint-Images/Stancomb-Wills-Clue.gif";
import StoveBuild from "assets/Hint-Images/StoveBuild.mp4";
import StoveSolution from "assets/Hint-Images/StoveSolution.mp4";
import TobaccoSolution from "assets/Hint-Images/TobaccoSolution.mp4";
import MetaWheel from "assets/Hint-Images/MetaWheel.jpg";

const MainButton = lazy(() => import("components/buttons/main-button"));
interface HintImageProps extends FrameProps {}

const HintImageFrame: FunctionComponent<HintImageProps> = ({}) => {
  const navigate = useNavigate();
  const location = useLocation();

  const hintImages = [
    {
      title: "BoatsGridAnswer",
      image: BoatsGridAnswer,
    },
    {
      title: "Dudley-Docker-Clue",
      image: DudleyDockerClue,
    },
    {
      title: "IceFlowSolution",
      image: IceFlowSolution,
    },
    {
      title: "James-Caird-Clue",
      image: JamesCairdClue,
    },
    {
      title: "Stancomb-Wills-Clue",
      image: StancombWillsClue,
    },
    {
      title: "StoveBuild",
      image: StoveBuild,
    },
    {
      title: "StoveSolution",
      image: StoveSolution,
    },
    {
      title: "TobaccoSolution",
      image: TobaccoSolution,
    },
    {
      title: "MetaWheel",
      image: MetaWheel,
    },
  ];

  const param = new URLSearchParams(location.search).get("image");
  const image = hintImages.filter((x) => x.title === param)[0].image;

  if (image.includes(".mp4"))
    return (
      <Frame>
        <div className="flex flex-col justify-center items-center h-screen w-screen">
          <OctagonVideo
            src={image}
            className="w-full max-w-[90%] m-auto"
            autoPlay
            triggerPlay={true}
            subtitles={[]}
            loop
            muted
            playsInline
            controls={false}
            onEnded={() => {
              navigate(-1);
            }}
          />
          <MainButton
            onClick={() => navigate(-1)}
            className="mx-auto mt-8 w-[300px] scale-90"
            text="Back"
          />
        </div>
      </Frame>
    );

  return (
    <Frame>
      <div className="flex flex-col justify-center items-center h-screen w-screen">
        <LazyLoadImage
          src={image}
          placeholderSrc={image}
          effect="blur"
          className="w-full max-w-[90%] m-auto"
        />
        <MainButton
          onClick={() => navigate(-1)}
          className="mx-auto mt-8 w-[300px] scale-90"
          text="Back"
        />
      </div>
    </Frame>
  );
};

export default HintImageFrame;
