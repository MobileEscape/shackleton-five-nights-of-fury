import Frame, { FrameProps } from "components/frames/frame";
import { FunctionComponent, lazy, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import Icon1 from "assets/icons/SADDLE.png";
import Icon2 from "assets/icons/HUMS.png";
import Icon3 from "assets/icons/HEAR.png";
import Icon4 from "assets/icons/WRIGHT.png";
import Icon5 from "assets/icons/EVENT.png";
import Icon6 from "assets/icons/ICE.png";

import Soup from "assets/Soup.png";
import SoupLoading from "assets/Soup-Loading.png";
import Sailors from "assets/Sailors.png";
import SailorsLoading from "assets/Sailors-Loading.png";
import Beaker from "assets/Beaker.png";
import BeakerLoading from "assets/BeakerLoading.png";
import SledDogs from "assets/Sled-dogs.png";
import SledDogsLoading from "assets/Sled-dogs-Loading.png";
import Anchor from "assets/Anchor.png";
import AnchorLoading from "assets/AnchorLoading.png";
import ShipInIce from "assets/Ship-in-ice.png";
import ShipInIceLoading from "assets/Ship-in-ice-loading.png";
import Masks from "assets/Masks.png";
import MasksLoading from "assets/MasksLoading.png";

import Border from "assets/Border-2.png";
import PuzzleField from "components/puzzle-fields";
import classNames from "classnames";
import MetaPuzzle from "components/meta-puzzle";

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

const givenLetters = [
  ["", "", "", "", "", "E"],
  ["W", "", "", "", "", ""],
  ["", "", "", "S"],
  ["", "", "", "", ""],
  ["", "E", "", ""],
  ["", "", ""],
];

const backgroundImage: any = {
  saddle: [Sailors, SailorsLoading],
  wright: [Masks, MasksLoading],
  hums: [Soup, SoupLoading],
  event: [Beaker, BeakerLoading],
  hear: [Anchor, AnchorLoading],
  ice: [SledDogs, SledDogsLoading],
  totheice: [ShipInIce, ShipInIceLoading],
};

const MainGameFrame: FunctionComponent<MainGameFrame> = ({ index }) => {
  const [bgImage, setbgImage] = useState("");
  const [metaPuzzle, setMetaPuzzle] = useState(false);
  const [solved, setSolved] = useState(0);
  const [visible, setVisible] = useState("hidden bg-black/0 opacity-0");

  const changeImage = (answer: string) => {
    if (bgImage === answer) return;
    setbgImage("");
    setTimeout(() => setbgImage(answer), 500);
  };

  const solvePuzzle = () => {
    setSolved((prev) => prev + 1);

    if (solved == 5) {
      setVisible("");
      setTimeout(() => setVisible("bg-black/80 opacity-100"), 100);
      setTimeout(() => setMetaPuzzle(true), 1000);
      setTimeout(() => setVisible("bg-black/0 opacity-0"), 4000);
      setTimeout(() => setVisible("hidden"), 4700);
    }
  };

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
            <h1 className="relative z-10 mt-[30vh] text-center font-kingEdwards text-white font-semibold text-5xl md:text-6xl">
              Well done! Now:
              <br />
              1. Fill in the metapuzzle grid.
              <br />
              2. Note the pipe icons.
              <br />
              3. Deduce the final answer.
            </h1>
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
            {!metaPuzzle ? "Check Puzzle Answers" : "Solve The Meta Puzzle"}
          </h1>
          {!metaPuzzle && (
            <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-3 items-center m-auto justify-center gap-4 my-4 md:my-12 p-4 z-30">
              {Icons.map((x, i) => (
                <div className="group flex gap-2">
                  <PuzzleField
                    changeImage={changeImage}
                    givenLetters={givenLetters[i]}
                    image={x}
                    answer={answers[i]}
                    key={`answer-${i}`}
                    solvePuzzle={solvePuzzle}
                  />
                </div>
              ))}
            </div>
          )}
          {metaPuzzle && (
            <div className="flex flex-col w-fit p-4 items-center m-auto justify-center gap-4 my-4 md:my-12">
              <MetaPuzzle />
            </div>
          )}
          <div className="bg-black w-full h-[3px] my-8" />
          <h1 className="relative z-10 text-center font-kingEdwards text-primary font-semibold text-5xl mt-3 md:my-10 md:text-6xl my-12 ">
            {!metaPuzzle ? "Solve The Meta Puzzle" : ""}
          </h1>
          <div className="flex-grow basis-0 flex items-center justify-center flex-shrink-0  -mt-8 md:my-6 scale-90 ">
            <MainButton
              text={!metaPuzzle ? "Meta Puzzle" : "Back"}
              onClick={() => {
                setMetaPuzzle((prev) => !prev);
                changeImage(metaPuzzle ? "" : "totheice");
              }}
            />
          </div>
        </div>
      </div>
    </Frame>
  );
};

export default MainGameFrame;
