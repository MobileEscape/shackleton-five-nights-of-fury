import { useState, useEffect } from "react";
import classNames from "classnames";
import {
  ButtonClickSound,
  PlaySound,
  TypingSound,
  SuccessSound,
  ErrorSound,
} from "sounds/sound";

const PuzzleBearing = ({
  index,
  message,
  answer,
  solvePuzzle,
}: {
  index: number;
  message: string;
  answer: string;
  solvePuzzle: () => void;
}) => {
  const [value, setValue] = useState("");
  const [solved, setSolved] = useState(false);
  const [err, setErr] = useState(false);

  useEffect(() => {
    const storage = window.sessionStorage.getItem(answer);
    if (storage === "true") {
      setSolved(true);
      setValue(answer.toUpperCase());
    }
  }, []);

  const keyboardClick = (e: any) => {
    PlaySound(TypingSound);
  };

  const _handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    if (
      e.currentTarget.value.length == answer.length &&
      e.currentTarget.value.toLowerCase() == answer
    ) {
      setErr(false);
      setSolved(true);
      PlaySound(SuccessSound);
      solvePuzzle();
      window.sessionStorage.setItem(answer, "true");
    } else if (
      e.currentTarget.value.length == 5 &&
      e.currentTarget.value.toLowerCase() != answer
    ) {
      PlaySound(ErrorSound);
      setErr(true);
      setTimeout(() => {
        setErr(false);
      }, 3000);
    }
    setValue(e.currentTarget.value);
  };

  return (
    <div
      className=" relative z-20 w-full text-center"
      id={`${answer}`}
      key={`${answer}`}
    >
      <div className="flex ml-8 gap-4  md:ml-0 items-center w-full">
        <h1
          className={classNames(
            "font-frank text-2xl md:text-3xl text-nowrap",
            solved ? "text-green-600 " : "text-primary",
            err ? "text-red-400" : ""
          )}
        >
          {`Day ${index + 1} Bearing:`}
        </h1>
        <input
          value={value}
          onKeyUp={() => PlaySound(TypingSound)}
          onChange={_handleChange}
          onClick={(e) => {
            e.currentTarget.select();
          }}
          className={classNames(
            "w-16 md:w-28 border-b-2 rounded-md bg-white/40 text-center text-2xl md:text-3xl md:h-8 h-6 racking-widest uppercase font-normal font-frank pt-3 ",
            solved
              ? "text-green-600 outline-green-600 border-green-600"
              : "text-primary  border-primary",
            err ? "text-red-400 outline-red-600" : ""
          )}
          disabled={solved}
          type="text"
          maxLength={5}
        />
      </div>
      <h1
        className={classNames(
          "font-frank text-2xl md:text-3xl text-nowrap",
          solved ? "text-green-600 " : "text-primary",
          err ? "text-red-400" : ""
        )}
      >
        {message}
      </h1>
    </div>
  );
};

export default PuzzleBearing;
