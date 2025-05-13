import Frame, { FrameProps } from "components/frames/non-game-frame";
import { useNavigate, useLocation } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { FunctionComponent, lazy } from "react";
import "react-lazy-load-image-component/src/effects/blur.css";
import CompassLoading from "../assets/contents/Compass-Loading.png";
import Compass from "../assets/contents/Compass.png";
import FlowCardLoading from "../assets/contents/FlowCard-Loading.png";
import FlowCard from "../assets/contents/FlowCard.png";
import MapLoading from "../assets/contents/Map-Loading.png";
import Map from "../assets/contents/Map.png";
import PagesLoading from "../assets/contents/Pages-Loading.png";
import Pages from "../assets/contents/Pages.png";
import SeatingChart from "../assets/contents/Seating-Chart.png";
import SeatingChartLoading from "../assets/contents/Seating-Chart-Loading.png";
import StoveParts from "../assets/contents/StoveParts.png";
import StovePartsLoading from "../assets/contents/StoveParts-Loading.png";
import TobaccoLoading from "../assets/contents/Tobacco-Loading.png";
import Tobacco from "../assets/contents/Tobacco.png";
import WildsNoteLoading from "../assets/contents/WildsNote-Loading.png";
import WildsNote from "../assets/contents/WildsNote.png";
import WuzzlePuzzleLoading from "../assets/contents/WuzzlePuzzle-Loading.png";
import WuzzlePuzzle from "../assets/contents/WuzzlePuzzle.png";

const MainButton = lazy(() => import("components/buttons/main-button"));
interface OurApologiesProps extends FrameProps {}

const getHelp = [
  {
    image: Map,
    loading: MapLoading,
    title: "Map",
    text: `Your envelope should have a map. If you're missing this item please contact <a style="color:darkblue" href="mailto:info@theescapemail.com" target="_blank">info@theescapemail.com</a> and we'll help make it right.`,
  },
  {
    image: SeatingChart,
    loading: SeatingChartLoading,
    title: "Seating Chart Grid",
    text: `Your envelope should have a Seating Chart. If you're missing this item please contact <a style="color:darkblue" href="mailto:info@theescapemail.com" target="_blank">info@theescapemail.com</a> and we'll help make it right.`,
  },
  {
    image: StoveParts,
    loading: StovePartsLoading,
    title: "Stove Parts x 4",
    text: `Your envelope should have a 4 Stove Parts. If you're missing any of them please contact <a style="color:darkblue" href="mailto:info@theescapemail.com" target="_blank">info@theescapemail.com</a> and we'll help make it right.`,
  },
  {
    image: Pages,
    loading: PagesLoading,
    title: "Journal Pages x 5",
    text: `Your envelope should have 5 Journal Pages. If you're missing this item please contact <a style="color:darkblue" href="mailto:info@theescapemail.com" target="_blank">info@theescapemail.com</a> and we'll help make it right.`,
  },
  {
    image: Tobacco,
    loading: TobaccoLoading,
    title: "Tobacco Paper",
    text: `Your envelope should have Tobacco Paper. If you're missing this item please contact <a style="color:darkblue" href="mailto:info@theescapemail.com" target="_blank">info@theescapemail.com</a> and we'll help make it right.`,
  },
  {
    image: WuzzlePuzzle,
    loading: WuzzlePuzzleLoading,
    title: "Wuzzle Puzzle",
    text: `Your envelope should have a Wuzzle. If you're missing this item please contact <a style="color:darkblue" href="mailto:info@theescapemail.com" target="_blank">info@theescapemail.com</a> and we'll help make it right.`,
  },
  {
    image: Compass,
    loading: CompassLoading,
    title: "Compass Wheel",
    text: `Your envelope should have a Compass Wheel. If you're missing this item please contact <a style="color:darkblue" href="mailto:info@theescapemail.com" target="_blank">info@theescapemail.com</a> and we'll help make it right.`,
  },
  {
    image: WildsNote,
    loading: WildsNoteLoading,
    title: "Wild's Note",
    text: `Your envelope should have Wild's Note. If you're missing this item please contact <a style="color:darkblue" href="mailto:info@theescapemail.com" target="_blank">info@theescapemail.com</a> and we'll help make it right.`,
  },
  {
    image: FlowCard,
    loading: FlowCardLoading,
    title: "Flow Card",
    text: `Your envelope should have a Flow Card. If you're missing this item please contact <a style="color:darkblue" href="mailto:info@theescapemail.com" target="_blank">info@theescapemail.com</a> and we'll help make it right.`,
  },
];

const OurApologiesFrame: FunctionComponent<OurApologiesProps> = ({}) => {
  const navigate = useNavigate();
  const location = useLocation();

  const index: number = Number(
    new URLSearchParams(location.search).get("index")
  );

  return (
    <Frame>
      <div className="flex flex-col w-[300px] m-auto mt-[100px] h-[30px] items-center">
        <LazyLoadImage
          src={getHelp[index].image}
          placeholderSrc={getHelp[index].loading}
          effect="blur"
          className="max-h-[30vh]"
        />
        <h1 className="text-center font-mrsEaves font-semibold text-5xl my-8">
          {getHelp[index].title}
        </h1>
        <p
          id="text"
          className=" font-mrsEaves font-regular text-2xl text-left"
          dangerouslySetInnerHTML={{ __html: getHelp[index].text }}
        />

        <div className="flex-grow basis-0 flex items-center justify-center flex-shrink-0 mt-10 scale-75 ">
          <MainButton text="Back" onClick={() => navigate(-1)}></MainButton>
        </div>
      </div>
    </Frame>
  );
};

export default OurApologiesFrame;
