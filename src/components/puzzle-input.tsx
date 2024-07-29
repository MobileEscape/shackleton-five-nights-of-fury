import { useState, useEffect } from "react";
import classNames from "classnames";
import {
  ButtonClickSound,
  PlaySound,
  TypingSound,
  SuccessSound,
  ErrorSound,
} from "sounds/sound";

const PuzzleIcon = ({
  image,
  answer,
  changeImage,
  solvePuzzle,
}: {
  image: string;
  answer: string;
  changeImage: (answer: string) => void;
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
      id={`${answer}`}
      key={`${answer}`}
      className="flex gap-4 relative z-20 scale-75 md:scale-100 -ml-5 md:ml-0 "
    >
      <img className="w-14 h-14 " src={image} />
      <input
        value={value}
        onKeyUp={() => PlaySound(TypingSound)}
        onChange={_handleChange}
        onClick={(e) => {
          changeImage(answer);
          e.currentTarget.select();
        }}
        className={classNames(
          "w-28 md:w-36 border-b-2 border-primary rounded-md bg-white/40 text-center text-3xl h-12 racking-widest uppercase font-normal font-frank pt-3 ",
          solved
            ? "text-green-400 outline-green-600 border-green-600"
            : "text-primary",
          err ? "text-red-400 outline-red-600" : ""
        )}
        disabled={solved}
        type="text"
        maxLength={5}
      />
    </div>
  );
};

export default PuzzleIcon;
