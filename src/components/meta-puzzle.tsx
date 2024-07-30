import { useState, useEffect, FunctionComponent, useContext } from "react";
import classNames from "classnames";
import {
  ButtonClickSound,
  PlaySound,
  TypingSound,
  SuccessSound,
  ErrorSound,
} from "sounds/sound";
import ShipInIce from "assets/Ship-in-ice.png";
import ShipInIceLoading from "assets/Ship-in-ice-loading.png";
import { AppContext } from "contexts/app";
import PuzzleField from "./puzzle-fields";

interface InputType {
  index: number;
}

const MetaPuzzle = () => {
  const [solved, setSolved] = useState(false);
  const [value, setValue] = useState(["", "", "", "", "", "", "", ""]);
  const [err, setErr] = useState(false);

  const answer = "EIGHTHUNDREDMILESRESCUETHECREW";
  const metaStyle = classNames(
    "w-12 h-12 caret-transparent rounded-md ring-2 selection:bg-transparent bg-white/50 ring-black focus:outline-secondary  bg-transparent transition z-20 duration-200 ease-in text-center font-frank pt-3 font-semibold text-4xl justify-center shadow-md shadow-black",

    solved ? "ring-green-400 shadow-green-600" : "",
    err ? "ring-red-400 shadow-red-600" : ""
  );

  useEffect(() => {
    const storage = window.sessionStorage.getItem(answer);
    if (storage === "true") {
      setSolved(true);
      setValue(answer.toUpperCase().split(""));
    }
  }, []);

  return (
    <div className="flex flex-col items-center ">
      <h3 className="relative z-10 text-xl  font-black font-frank m-4 ">
        "My new mission is clear. I know what I must do:"
      </h3>
      <div className="gap-2 my-3 grid grid-cols-12">
        <PuzzleField
          changeImage={() => {}}
          givenLetters={[
            "E",
            "",
            "",
            "",
            "",
            "",
            "",
            "N",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "E",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
          ]}
          image={""}
          answer={answer}
          key={`answer-${1}`}
          solvePuzzle={() => setSolved(true)}
        />
      </div>
    </div>
  );
};

export default MetaPuzzle;
