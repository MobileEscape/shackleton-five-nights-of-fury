import Frame, { FrameProps } from "components/frames/non-game-frame";
import { useNavigate } from "react-router-dom";
import { FunctionComponent, lazy } from "react";

const MainButton = lazy(() => import("components/buttons/main-button"));
interface HintImageProps extends FrameProps {}

const HintImageFrame: FunctionComponent<HintImageProps> = ({}) => {
  const navigate = useNavigate();

  return (
    <Frame>
      <div className="flex flex-col items-center mt-20 overflow-auto">
        <p className="text-xl my-8 font-frank mx-6 md:mx-16 max-w-[500px] [text-shadow:_0_1px_1px_rgb(0_0_0_/_20%)]">
          Ernest Shackleton attempted to cross the Antarctic Continent in 1914,
          but Mother Nature had other plans. Their ship, Endurance, was held
          fast in the ice and would remain so for the duration of the 1915
          Antarctic winter. The break-up of the ice that spring would prove
          fatal to the ship as she was slowly crushed and took on water.
          Shackleton ordered the crew to the ice where they would regroup in
          order to make the long trek to reach land and rescue.
          <br />
          <br />
          The long trek never happened as the ice was impassable to the convoy.
          The next few months saw the crew drifting on ice, meagerly surviving,
          and waiting for the ice pack to break up enough to get into the
          lifeboats. Then, Shackleton planned to head for land and rescue. This
          was the moment they had long awaited. Now all that was left was to
          actually accomplish it.
        </p>
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
