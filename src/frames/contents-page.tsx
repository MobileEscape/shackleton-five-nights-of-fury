import { FunctionComponent, useContext, lazy } from "react";
import Frame, { FrameProps } from "components/frames/frame";
import Button from "components/buttons/inside-button";
import { AppContext } from "contexts/app";
import { useNavigate } from "react-router-dom";
import Border from "assets/Border-3.png";

const MainButton = lazy(() => import("components/buttons/main-button"));
const SecondaryButton = lazy(() => import("components/buttons/inside-button"));

interface ContentsFrameProps extends FrameProps {}

export interface Hint {
  label: string;
  icon?: string;
  text?: string;
  link?: string;
  parts?: Hint[];
}

const HintComponent = ({
  value,
  index,
  link,
}: {
  value: Hint;
  index: number;
  link: string;
}) => {
  const navigate = useNavigate();
  return (
    <button
      className="my-1 w-[80%] h-10 text-center border-2 border-black text-black font-mrsEaves text-2xl font-standard hover:bg-secondary z-30 shadow-md shadow-primary/80"
      onClick={() => navigate("/our-apologies?index=" + index)}
    >
      {value.label}
    </button>
  );
};

const hints: Hint[] = [
  {
    label: "Map",
    link: "/our-apologies?index=0",
  },
  {
    label: "Penguin Artwork",
    link: "/our-apologies?index=1",
  },
  {
    label: "Sea Shanty",
    link: "/our-apologies?index=2",
  },
  {
    label: "Journal Pages x 5",
    link: "/our-apologies?index=3",
  },
  {
    label: "Tobacco Paper",
    link: "/our-apologies?index=4",
  },
  {
    label: "Wuzzle Puzzle",
    link: "/our-apologies?index=5",
  },
  {
    label: "Compass Wheel",
    link: "/our-apologies?index=6",
  },
  {
    label: "Wild's Note",
    link: "/our-apologies?index=6",
  },
  {
    label: "Flow Card",
    link: "/our-apologies?index=7",
  },
];

const ContentsFrame: FunctionComponent<ContentsFrameProps> = ({ index }) => {
  const { advance } = useContext(AppContext);
  const navigate = useNavigate();
  return (
    <Frame index={index}>
      <div className="relative w-[500px] max-w-[90vw] m-auto mt-[100px] h-fit md:h-fit first-letter flex flex-col items-center  ">
        <img
          src={Border}
          className="absolute z-0 max-w-[90vw] w-full h-full top-0 left-0"
        />
        <h1 className=" relative z-10 text-center font-kingEdwards font-semibold text-7xl mt-6 text-primary">
          Contents
        </h1>
        <div className=" relative z-10 w-[80%] text-black font-mrsEaves  text-xl font-regular ">
          Check that you have all the items.
        </div>
        <br />
        <div className="mx-auto flex flex-col items-center w-[97%] h-[380px] md:h-fit">
          {hints.map((x, i) => (
            <HintComponent
              key={`content-${x.label}`}
              value={x}
              index={i}
              link={x.link ? x.link : ""}
            ></HintComponent>
          ))}
        </div>
        <div className=" my-8 scale-90">
          <MainButton text="Next" onClick={advance} />
        </div>
      </div>
    </Frame>
  );
};

export default ContentsFrame;
