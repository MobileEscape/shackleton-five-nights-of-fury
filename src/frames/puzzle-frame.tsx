import { FunctionComponent, useContext } from "react";
import PuzzleFrame from "components/frames/puzzle-frame";
import { FrameProps } from "components/frames/non-game-frame";
import { useLocation } from "react-router-dom";
import { AppContext } from "contexts/app";

interface KeyPuzzleFrameProps extends FrameProps {}

const AllPuzzleFrames: FunctionComponent<KeyPuzzleFrameProps> = () => {
  const location = useLocation();
  const { advance } = useContext(AppContext);
  const index: number = Number(
    new URLSearchParams(location.search).get("index")
  );

  const hints = [
    <div className="text-center font-din leading-tight text-[32px] text-white m-auto px-12 py-3 w-full h-full flex overflow-auto">
      <div className="m-auto">
        {index == 1 && "Puzzle 1 Hint 1"}
        {index == 2 && "Puzzle 2 Hint 1"}
        {index == 3 && "Puzzle 3 Hint 1"}
        {index == 4 && "Puzzle 4 Hint 1"}
        {index == 5 && "Puzzle 5 Hint 1"}
        {index == 6 && "Puzzle 6 Hint 1"}
      </div>
    </div>,
    <div className="text-center font-din leading-tight text-[32px] text-white m-auto px-12 py-3 w-full h-full flex overflow-auto">
      <div className="m-auto">
        {index == 1 && "Puzzle 1 Hint 2"}
        {index == 2 && "Puzzle 2 Hint 2"}
        {index == 3 && "Puzzle 3 Hint 2"}
        {index == 4 && "Puzzle 4 Hint 2"}
        {index == 5 && "Puzzle 5 Hint 2"}
        {index == 6 && "Puzzle 6 Hint 2"}
      </div>
    </div>,
    <div className="text-center font-din leading-tight text-[32px] text-white m-auto px-12 py-3 w-full h-full flex overflow-auto">
      <div className="m-auto">
        {index == 1 && "Puzzle 1 Hint 3"}
        {index == 2 && "Puzzle 2 Hint 3"}
        {index == 3 && "Puzzle 3 Hint 3"}
        {index == 4 && "Puzzle 4 Hint 3"}
        {index == 5 && "Puzzle 5 Hint 3"}
        {index == 6 && "Puzzle 6 Hint 3"}
      </div>
    </div>,
    <div className="text-center font-din leading-tight text-[32px] text-white m-auto px-12 py-3 w-full h-full flex overflow-auto">
      <div className="m-auto">
        {index == 1 && "Puzzle 1 Hint 5"}
        {index == 2 && "Puzzle 2 Hint 5"}
        {index == 3 && "Puzzle 3 Hint 5"}
        {index == 4 && "Puzzle 4 Hint 5"}
        {index == 5 && "Puzzle 5 Hint 5"}
        {index == 6 && "Puzzle 6 Hint 5"}
      </div>
    </div>,
  ];

  const answers = ["ashes", "exist", "graph", "safer", "oddly", "shipheldfast"];
  return (
    <PuzzleFrame
      hints={hints}
      task="Input your answer and check if it's correct"
      answer={answers[index - 1]}
    ></PuzzleFrame>
  );
};

export default AllPuzzleFrames;
