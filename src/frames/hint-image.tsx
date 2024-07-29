import Frame, { FrameProps } from "components/frames/non-game-frame";
import { useNavigate, useLocation } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { FunctionComponent, lazy } from "react";
import "react-lazy-load-image-component/src/effects/blur.css";

import MetaPuzzleSolved from "assets/Hint-Images/MetaPuzzle-Solution.jpg";

const MainButton = lazy(() => import("components/buttons/main-button"));
interface HintImageProps extends FrameProps {}

const HintImageFrame: FunctionComponent<HintImageProps> = ({}) => {
  const navigate = useNavigate();
  const location = useLocation();

  const hintImages = [
    {
      title: "MetaPuzzle Solution",
      image: MetaPuzzleSolved,
    },
  ];

  const param = new URLSearchParams(location.search).get("image");
  const image = hintImages.filter((x) => x.title === param)[0].image;

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
