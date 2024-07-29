import Frame, { FrameProps } from "components/frames/non-game-frame";
import { useNavigate, useLocation } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { FunctionComponent, lazy } from "react";
import "react-lazy-load-image-component/src/effects/blur.css";
import DotMatrixLoading from "../assets/contents/Dot-Matrix-Loading.png";
import DotMatrix from "../assets/contents/Dot-Matrix.png";
import InvitationLoading from "../assets/contents/Invitation-Loading.png";
import Invitation from "../assets/contents/Invitation.png";
import MapLoading from "../assets/contents/Map-Loading.png";
import Map from "../assets/contents/Map.png";
import PagesLoading from "../assets/contents/Pages-Loading.png";
import Pages from "../assets/contents/Pages.png";
import PipesLoading from "../assets/contents/Pipes-Loading.png";
import Pipes from "../assets/contents/Pipes.png";
import PlanktonLoading from "../assets/contents/Plankton-Loading.png";
import SoupLabelLoading from "../assets/contents/Soup-Label-Loading.png";
import SoupLabel from "../assets/contents/Soup-Label.png";
import WuzzleLoading from "../assets/contents/Wuzzle-Loading.png";
import Wuzzle from "../assets/contents/Wuzzle.png";

const MainButton = lazy(() => import("components/buttons/main-button"));
interface OurApologiesProps extends FrameProps {}

const getHelp = [
  {
    image: Map,
    loading: MapLoading,
    title: "Map",
    text: `Your envelope should have a map. If you're missing this item please contact <a style="color:darkblue" href="mailto:info@theescapemail.com" target="_blank">info@theescapemail.com</a> and we'll help make it right. In the meantime, you can access a digital version of this item <a style="color:darkblue" href="https://cdn.shopify.com/s/files/1/0601/8855/7506/files/Season_2_-_Episode_1_-_Map_Print.pdf?v=1712940870" target="_blank">here</a> to print and play with.`,
  },
  {
    image: Invitation,
    loading: InvitationLoading,
    title: "Invitation",
    text: `Your envelope should have an Invitation. If you're missing this item please contact <a style="color:darkblue" href="mailto:info@theescapemail.com" target="_blank">info@theescapemail.com</a> and we'll help make it right.`,
  },
  {
    image: SoupLabel,
    loading: SoupLabelLoading,
    title: "Soup Label",
    text: `Your envelope should have a Soup Label. If you're missing this item please contact <a style="color:darkblue" href="mailto:info@theescapemail.com" target="_blank">info@theescapemail.com</a> and we'll help make it right.`,
  },
  {
    image: Pages,
    loading: PagesLoading,
    title: "Journal Pages x 5",
    text: `Your envelope should have 4 Journal Pages. If you're missing this item please contact <a style="color:darkblue" href="mailto:info@theescapemail.com" target="_blank">info@theescapemail.com</a> and we'll help make it right. In the meantime, you can access a digital version of this item <a style="color:darkblue" href="https://cdn.shopify.com/s/files/1/0601/8855/7506/files/Shackleton_-_Epsiode_1_-_Narrative_artwork_only_outlined.pdf?v=1712941038" target="_blank">here</a> to print and play with.`,
  },
  {
    image: DotMatrix,
    loading: DotMatrixLoading,
    title: "Dot Matrix Puzzle",
    text: `Your envelope should have a Dot Matrix. If you're missing this item please contact <a style="color:darkblue" href="mailto:info@theescapemail.com" target="_blank">info@theescapemail.com</a> and we'll help make it right.`,
  },
  {
    image: Wuzzle,
    loading: WuzzleLoading,
    title: "Wuzzle Puzzle",
    text: `Your envelope should have a Wuzzle. If you're missing this item please contact <a style="color:darkblue" href="mailto:info@theescapemail.com" target="_blank">info@theescapemail.com</a> and we'll help make it right.`,
  },
  {
    image: PlanktonLoading,
    loading: PlanktonLoading,
    title: "Plankton Painting",
    text: `Your envelope should have Plankton. If you're missing this item please contact <a style="color:darkblue" href="mailto:info@theescapemail.com" target="_blank">info@theescapemail.com</a> and we'll help make it right.`,
  },
  {
    image: DotMatrix,
    loading: DotMatrixLoading,
    title: "Wild's Winds / Dot Matrix",
    text: `Your envelope should have the Dot Matrix asset. If you're missing this item please contact <a style="color:darkblue" href="mailto:info@theescapemail.com" target="_blank">info@theescapemail.com</a> and we'll help make it right.`,
  },
  {
    image: Pipes,
    loading: PipesLoading,
    title: "Pipes x 4",
    text: `Your envelope should have Pipes. If you're missing this item please contact <a style="color:darkblue" href="mailto:info@theescapemail.com" target="_blank">info@theescapemail.com</a> and we'll help make it right.`,
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
