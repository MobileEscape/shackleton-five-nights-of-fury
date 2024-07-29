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
  const [expanded, setExpanded] = useState(false);
  const [solved, setSolved] = useState(false);
  const [value, setValue] = useState(["", "", "", "", ""]);
  const [err, setErr] = useState(false);

  useEffect(() => {
    const storage = window.sessionStorage.getItem(answer);
    if (storage === "true") {
      setSolved(true);
      setValue(answer.toUpperCase().split(""));
    }
  }, []);

  const handleChange = (index: number, newValue: string) => {
    const updatedValue = [...value];
    updatedValue[index] = newValue.toUpperCase();
    setValue(updatedValue);
    if (
      updatedValue.join("").length == 5 &&
      updatedValue.join("") == answer.toUpperCase()
    ) {
      setErr(false);
      setSolved(true);
      PlaySound(SuccessSound);
      solvePuzzle();
      window.sessionStorage.setItem(answer, "true");
    } else if (updatedValue.join("").length == 5) {
      PlaySound(ErrorSound);
      setErr(true);
      setTimeout(() => {
        setErr(false);
      }, 5000);
    }
  };

  const keyboardClick = (e: any) => {
    PlaySound(TypingSound);
    if (e.key === "Enter") {
      if (Number(e.currentTarget.id.slice(6)) < 5)
        document
          .getElementById(
            answer + "-" + (Number(e.currentTarget.id.slice(6)) + 1).toString()
          )
          ?.focus();
      else {
      }
      return;
    } else if (e.key === " " || e.key === "Spacebar") {
      e.currentTarget.value = e.currentTarget.value.slice(
        0,
        e.currentTarget.value.length - 1
      );
      if (Number(e.currentTarget.id.slice(6)) < 5) {
        document
          .getElementById(
            answer + "-" + (Number(e.currentTarget.id.slice(6)) + 1).toString()
          )
          ?.focus();
        return;
      }
    } else if (e.key === "ArrowLeft") {
      if (Number(e.currentTarget.id.slice(6)) > 1)
        document
          .getElementById(
            answer + "-" + (Number(e.currentTarget.id.slice(6)) - 1).toString()
          )
          ?.focus();
      else e.currentTarget.select();
    } else if (e.key === "ArrowRight") {
      if (Number(e.currentTarget.id.slice(6)) < 5)
        document
          .getElementById(
            answer + "-" + (Number(e.currentTarget.id.slice(6)) + 1).toString()
          )
          ?.focus();
      else e.currentTarget.select();
    } else {
      if (!/[a-zA-Z]/i.test(e.key)) {
        let temp = value;
        value[Number(e.currentTarget.id.slice(6))] = "";
        setValue(temp);
      }
      if (
        Number(e.currentTarget.id.slice(6)) < 5 &&
        e.currentTarget.value.length > 0
      ) {
        document
          .getElementById(
            answer + "-" + (Number(e.currentTarget.id.slice(6)) + 1).toString()
          )
          ?.focus();
      }
      if (
        e.key === "Backspace" &&
        Number(e.currentTarget.id.slice(6)) > 1 &&
        e.currentTarget.value.length === 0
      ) {
        document
          .getElementById(
            answer + "-" + (Number(e.currentTarget.id.slice(6)) - 1).toString()
          )
          ?.focus();
      }
    }
  };

  return (
    <div className="group flex gap-2">
      <a
        className={classNames(
          " corsur-pointer w-12 h-12 caret-transparent rounded-md ring-2 ring-black z-30 md:hover:bg-secondary  focus:bg-transparent transition ease-in  duration-200 shadow-md shadow-black cursor-pointer",
          expanded! ? "bg-white/50" : "translate-x-36 bg-transparent",
          solved ? "ring-green-400 shadow-green-600" : "",
          err ? "ring-red-400 shadow-red-600" : ""
        )}
        onClick={() => {
          PlaySound(ButtonClickSound);
          setExpanded((prev) => !prev);
          document.getElementById(answer + "-" + 1)?.focus();
          changeImage(!expanded ? answer : "");
        }}
      >
        <img src={image} alt="Icon" className="w-[50px]" />
      </a>
      <input
        id={`${answer}-1`}
        key={`${answer}-1`}
        className={classNames(
          "w-12 h-12 rounded-md caret-transparent ring-2 ring-black focus:outline-secondary selection:bg-transparent  bg-white/50  z-20 transition  duration-200 ease-in text-center font-frank pt-3 font-semibold text-4xl justify-center shadow-md shadow-black",
          expanded! ? "" : "translate-x-[88px] opacity-0 ",
          solved ? "ring-green-400 shadow-green-600" : "",
          err ? "ring-red-400 shadow-red-600" : ""
        )}
        onClick={(e) => {
          e.currentTarget.select();
        }}
        maxLength={1}
        type="text"
        disabled={solved}
        onFocus={(e) => {
          e.currentTarget.select();
        }}
        value={value[0]}
        onChange={(e) => handleChange(0, e.target.value)}
        onKeyUp={keyboardClick}
      />
      <input
        id={`${answer}-2`}
        key={`${answer}-2`}
        className={classNames(
          "w-12 h-12 rounded-md caret-transparent ring-2 ring-black focus:outline-secondary selection:bg-transparent  bg-white/50  z-20 transition z-3 duration-200 ease-in text-center font-frank pt-3 font-semibold text-4xl justify-center shadow-md shadow-black",
          expanded! ? "" : "translate-x-[32px] opacity-0",
          solved ? "ring-green-400 shadow-green-600" : "",
          err ? "ring-red-400" : ""
        )}
        maxLength={1}
        onClick={(e) => {
          e.currentTarget.select();
        }}
        type="text"
        disabled={solved}
        onFocus={(e) => {
          e.currentTarget.select();
        }}
        value={value[1]}
        onChange={(e) => handleChange(1, e.target.value)}
        onKeyUp={keyboardClick}
      />
      <input
        id={`${answer}-3`}
        key={`${answer}-3`}
        className={classNames(
          "w-12 h-12 rounded-md ring-2 caret-transparent ring-black focus:outline-secondary selection:bg-transparent   bg-white/50  transition z-20 duration-200 ease-in text-center font-frank pt-3 font-semibold text-4xl justify-center shadow-md shadow-black",
          expanded! ? "" : "-translate-x-[24px] opacity-0",
          solved ? "ring-green-400 shadow-green-600" : "",
          err ? "ring-red-400 shadow-red-600" : ""
        )}
        onClick={(e) => {
          e.currentTarget.select();
        }}
        maxLength={1}
        type="text"
        disabled={solved}
        onFocus={(e) => {
          e.currentTarget.select();
        }}
        value={value[2]}
        onChange={(e) => handleChange(2, e.target.value)}
        onKeyUp={keyboardClick}
      />
      <input
        id={`${answer}-4`}
        key={`${answer}-4`}
        className={classNames(
          "w-12 h-12 rounded-md ring-2 caret-transparent ring-black focus:outline-secondary selection:bg-transparent bg-white/50 transition z-20 duration-200 ease-in text-center font-frank pt-3 font-semibold text-4xl justify-center shadow-md shadow-black",
          expanded! ? "" : "-translate-x-[80px] opacity-0 ",
          solved ? "ring-green-400 shadow-green-600" : "",
          err ? "ring-red-400 shadow-red-600" : ""
        )}
        maxLength={1}
        onClick={(e) => {
          e.currentTarget.select();
        }}
        type="text"
        disabled={solved}
        onFocus={(e) => {
          e.currentTarget.select();
        }}
        value={value[3]}
        onChange={(e) => handleChange(3, e.target.value)}
        onKeyUp={keyboardClick}
      />
      <input
        id={`${answer}-5`}
        maxLength={1}
        className={classNames(
          "w-12 h-12 rounded-md ring-2 caret-transparent ring-black focus:outline-secondary selection:bg-transparent  bg-white/50  transition z-20  duration-200 ease-in text-center font-frank pt-3 font-semibold text-4xl justify-center decoration-black shadow-md shadow-black",
          expanded! ? "" : "-translate-x-[136px] opacity-0",
          solved ? "ring-green-400 shadow-green-600" : "",
          err ? "ring-red-400 shadow-red-600" : ""
        )}
        onClick={(e) => {
          e.currentTarget.select();
        }}
        onFocus={(e) => {
          e.currentTarget.select();
        }}
        type="text"
        disabled={solved}
        value={value[4]}
        onChange={(e) => handleChange(4, e.target.value)}
        onKeyUp={keyboardClick}
      />
    </div>
  );
};

export default PuzzleIcon;
