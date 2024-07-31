import Frame, { FrameProps } from "components/frames/frame";
import {
  FunctionComponent,
  lazy,
  useContext,
  useState,
  useEffect,
} from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import Icon1 from "assets/icons/SADDLE.png";
import Icon2 from "assets/icons/HUMS.png";
import Icon3 from "assets/icons/HEAR.png";
import Icon4 from "assets/icons/WRIGHT.png";
import Icon5 from "assets/icons/EVENT.png";
import Icon6 from "assets/icons/ICE.png";

import CastleLoading from "assets/Background Images/Castle-Loading.png";
import Castle from "assets/Background Images/Castle.png";
import IcefieldLoading from "assets/Background Images/Icefield-Loading.png";
import Icefield from "assets/Background Images/Icefield.png";
import MatchLoading from "assets/Background Images/Match-Loading.png";
import Match from "assets/Background Images/Match.png";
import PenguinLoading from "assets/Background Images/Penguin-Loading.png";
import Penguin from "assets/Background Images/Penguin.png";
import PolaroidLoading from "assets/Background Images/Polaroid-Loading.png";
import Polaroid from "assets/Background Images/Polaroid.png";
import SealLoading from "assets/Background Images/Seal-Loading.png";
import Seal from "assets/Background Images/Seal.png";
import ShipInIceLoading from "assets/Ship-in-ice-loading.png";
import ShipInIce from "assets/Ship-in-ice.png";

import PuzzleBearing from "components/puzzle-bearings";

import Border from "assets/Border-2.png";
import PuzzleField from "components/puzzle-fields";
import classNames from "classnames";

import { AppContext } from "contexts/app";

const MainButton = lazy(() => import("components/buttons/main-button"));

const Icons = [Icon1, Icon4, Icon2, Icon5, Icon3, Icon6];

interface MainGameFrame extends FrameProps {}

const answers = [
  "saddle",
  "wright",
  "hums",
  "event",
  "hear",
  "ice",
  "totheice",
];

const messages = [
  "142,178,214",
  "42,82,208,72,180,16",
  "268-280,80,6,140,116,352",
  "196-224",
  "264,124,350-0,278",
  "96,134,110-122",
];

const bearings = ["120", "160", "130", "60", "270", "90"];

const givenLetters = [
  ["", "", "", "", "", "E"],
  ["W", "", "", "", "", ""],
  ["", "", "", "S"],
  ["", "", "", "", ""],
  ["", "E", "", ""],
  ["", "", ""],
];

const backgroundImage: any = {
  saddle: [Seal, SealLoading],
  wright: [Penguin, PenguinLoading],
  hums: [Castle, CastleLoading],
  event: [Polaroid, PolaroidLoading],
  hear: [Icefield, IcefieldLoading],
  ice: [Match, MatchLoading],
  totheice: [ShipInIce, ShipInIceLoading],
};

const MainGameFrame: FunctionComponent<MainGameFrame> = ({ index }) => {
  const { advance } = useContext(AppContext);
  const [bgImage, setbgImage] = useState("");
  const [solved, setSolved] = useState(0);
  const [solvedBearings, setSolveBearings] = useState(0);
  const [visible, setVisible] = useState("hidden bg-black/0 opacity-0");

  const changeImage = (answer: string) => {
    if (bgImage === answer) return;
    setbgImage("");
    setTimeout(() => setbgImage(answer), 500);
  };

  useEffect(() => {
    if (solved == 6) {
      setVisible("");
      setTimeout(() => setVisible("bg-black/80 opacity-100"), 100);
    }
  }, [solved]);

  useEffect(() => {
    if (solvedBearings == 6) {
      setVisible("");
      setTimeout(() => setVisible("bg-black/80 opacity-100"), 100);
    }
  }, [solvedBearings]);

  return (
    <Frame index={index}>
      <div className="w-fit m-auto mt-[100px] items-center max-w-[90vw]">
        <div className="relative   p-4  my-4 rounded-md bg- ">
          <div
            className={classNames(
              "fixed left-0 top-0 w-full  z-50 h-full  transition ease-in-out duration-700 ",
              visible
            )}
          >
            {solved == 6 && solvedBearings != 6 ? (
              <div className="text-center">
                <h1 className="relative z-10 mt-[30vh] text-center font-kingEdwards text-white font-semibold text-5xl md:text-6xl">
                  Well done! Now:
                  <br />
                  1. Enter answers onto the compass.
                  <br />
                  2. Find the bearings.
                  <br />
                  3. Deduce the final answer.
                </h1>
                <button
                  onClick={() => setVisible("hidden bg-black/0 opacity-0")}
                  className=" font-kingEdwards text-white font-semibold text-4xl md:text-5xl my-5 hover:bg-gray-300 border border-white rounded-lg px-2"
                >
                  Close
                </button>
              </div>
            ) : solved != 6 && solvedBearings == 6 ? (
              <div className="text-center">
                <h1 className="relative z-10 mt-[30vh] text-center font-kingEdwards text-white font-semibold text-5xl md:text-6xl">
                  {" "}
                  Well done! Now:
                  <br />
                  1. Get all the answers from the previous section.
                  <br />
                  2. Enter them onto the compass
                  <br />
                  3. Solve the meta puzzle
                </h1>{" "}
                <button
                  onClick={() => setVisible("hidden bg-black/0 opacity-0")}
                  className=" font-kingEdwards text-white font-semibold text-4xl md:text-5xl my-5 hover:bg-gray-300 border border-white rounded-lg px-2"
                >
                  Close
                </button>
              </div>
            ) : (
              <div className="text-center">
                <h1 className="relative z-10 mt-[30vh] text-center font-kingEdwards text-white font-semibold text-5xl md:text-6xl">
                  {" "}
                  Well done! Now solve the meta puzzle!
                </h1>{" "}
                <button
                  onClick={() => {
                    setVisible("hidden bg-black/0 opacity-0");
                    advance();
                  }}
                  className=" font-kingEdwards text-white font-semibold text-4xl md:text-5xl my-5 hover:bg-gray-300 border border-white rounded-lg px-2"
                >
                  Close
                </button>
              </div>
            )}
          </div>
          <img
            src={Border}
            className="absolute max-w-[90vw] w-full h-full top-0 left-0"
          />

          <div
            className={classNames(
              "absolute max-w-[90vw] w-fit  top-0 left-0 transition duration-1000",
              bgImage ? "opacity-30" : "opacity-0"
            )}
          >
            {bgImage && (
              <LazyLoadImage
                className="z-0"
                src={backgroundImage[bgImage][0]}
                placeholderSrc={backgroundImage[bgImage][1]}
                effect="blur"
                alt=""
              />
            )}
          </div>
          <h1 className="relative text-center font-kingEdwards text-primary font-semibold text-5xl md:text-6xl z-10">
            Check Puzzle Answers
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-3 items-center m-auto justify-center gap-4 my-4 md:my-12 p-4 z-30">
            {Icons.map((x, i) => (
              <div className="group flex gap-2">
                <PuzzleField
                  changeImage={changeImage}
                  givenLetters={givenLetters[i]}
                  image={x}
                  answer={answers[i]}
                  key={`answer-${i}`}
                  solvePuzzle={() => setSolved((prev) => prev + 1)}
                />
              </div>
            ))}
          </div>

          <div className="bg-black w-full h-[3px] my-8" />
          <h1 className="relative text-center font-kingEdwards text-primary font-semibold text-5xl md:text-6xl z-10">
            Enter Bearings
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-3 items-center m-auto justify-center md:gap-4 gap-4 my-4 md:my-12 p-4 z-30">
            {bearings.map((_, i) => (
              <div className="group flex">
                <PuzzleBearing
                  index={i}
                  message={messages[i]}
                  answer={bearings[i]}
                  key={`answer-${i}`}
                  solvePuzzle={() => setSolveBearings((prev) => prev + 1)}
                />
              </div>
            ))}
          </div>
          <div className="bg-black w-full h-[3px] my-8" />
          <h1 className="relative z-10 text-center font-kingEdwards text-primary font-semibold text-5xl mt-3 md:my-10 md:text-6xl my-12 ">
            Solve The Meta Puzzle
          </h1>
          <div className="flex-grow basis-0 flex items-center justify-center flex-shrink-0  -mt-8 md:my-6 scale-90 mb-5 ">
            <MainButton
              text="Meta Puzzle"
              onClick={() => {
                advance();
              }}
            />
          </div>
        </div>
      </div>
    </Frame>
  );
};

export default MainGameFrame;
