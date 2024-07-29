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
          The journey thus far has been one of immense preparation,
          anticipation, and the ever-present challenge of the Antarctic
          environment. Our expedition, the Imperial Trans-Antarctic Expedition,
          set sail with the grand ambition of crossing the Antarctic continent
          from west to east. This bold endeavor follows my previous expeditions,
          including the near-miss of reaching the South Pole in 1907 and the
          subsequent frustration of being beaten to it by Amundsen in 1912.
          <br />
          <br />
          Securing the necessary vessels, the Aurora for the Ross Sea party and
          the Endurance for our Weddell Sea party, required relentless effort
          and significant financial maneuvering. Despite the outbreak of war, we
          received the Admiralty's blessing to proceed, reflecting our mission's
          perceived importance.
          <br />
          <br /> We departed from South Georgia after overcoming numerous
          logistical challenges, including assembling our crew of 27 aboard the
          Endurance, which involved careful selection from over 5000 applicants.
          Our journey south has had its challenges already, from battling
          seasickness to navigating through treacherous ice floes.
          <br />
          <br /> As of now, despite our high spirits and perseverance, we find
          ourselves held fast by the pack ice. The progress towards Vahsel Bay
          has been thwarted by thick, impenetrable ice, confining us like an
          almond in a chocolate bar. After years of meticulous planning and
          months of arduous sailing, this is our current predicament: the
          Endurance is trapped, unable to advance.
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
