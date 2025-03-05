import { useState, useEffect } from "react";
import classNames from "classnames";
import { PlaySound, TypingSound, SuccessSound, ErrorSound } from "sounds/sound";

const PuzzleField = ({
  image,
  answer,
  changeImage,
  solvePuzzle,
  givenLetters,
}: {
  image: string;
  answer: string;
  changeImage: (answer: string) => void;
  solvePuzzle: () => void;
  givenLetters: string[];
}) => {
  const [solved, setSolved] = useState(false);
  const [value, setValue] = useState(givenLetters);
  const [err, setErr] = useState(false);

  useEffect(() => {
    const storage = window.sessionStorage.getItem(answer);
    if (storage === "true") {
      setSolved(true);
      setValue(answer.toUpperCase().split(""));
    }
  }, []);

  const inputArray = answer.toUpperCase().split("");

  const handleChange = (index: number, newValue: string) => {
    changeImage(answer);
    const updatedValue = [...value];
    updatedValue[index] = newValue.toUpperCase();
    setValue(updatedValue);

    if (
      updatedValue.join("").length == answer.length &&
      updatedValue.join("") == answer.toUpperCase()
    ) {
      setErr(false);
      setSolved(true);
      PlaySound(SuccessSound);
      solvePuzzle();
      window.sessionStorage.setItem(answer, "true");
    } else if (updatedValue.join("").length == answer.length) {
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
      if (Number(e.currentTarget.id.slice(answer.length + 1)) < answer.length)
        document
          .getElementById(
            answer +
              "-" +
              (
                Number(e.currentTarget.id.slice(answer.length + 1)) + 1
              ).toString()
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
      if (Number(e.currentTarget.id.slice(answer.length + 1)) < answer.length) {
        document
          .getElementById(
            answer +
              "-" +
              (
                Number(e.currentTarget.id.slice(answer.length + 1)) + 1
              ).toString()
          )
          ?.focus();
        return;
      }
    } else if (e.key === "ArrowLeft") {
      if (Number(e.currentTarget.id.slice(answer.length + 1)) > 1)
        document
          .getElementById(
            answer +
              "-" +
              (
                Number(e.currentTarget.id.slice(answer.length + 1)) - 1
              ).toString()
          )
          ?.focus();
      else e.currentTarget.select();
    } else if (e.key === "ArrowRight") {
      if (Number(e.currentTarget.id.slice(answer.length + 1)) < answer.length)
        document
          .getElementById(
            answer +
              "-" +
              (
                Number(e.currentTarget.id.slice(answer.length + 1)) + 1
              ).toString()
          )
          ?.focus();
      else e.currentTarget.select();
    } else {
      if (!/[a-zA-Z]/i.test(e.key)) {
        let temp = value;
        value[Number(e.currentTarget.id.slice(answer.length + 1))] = "";
        setValue(temp);
      }
      if (
        Number(e.currentTarget.id.slice(answer.length + 1)) < answer.length &&
        e.currentTarget.value.length > 0
      ) {
        document
          .getElementById(
            answer +
              "-" +
              (
                Number(e.currentTarget.id.slice(answer.length + 1)) + 1
              ).toString()
          )
          ?.focus();
      }
      if (
        e.key === "Backspace" &&
        Number(e.currentTarget.id.slice(answer.length + 1)) > 1 &&
        e.currentTarget.value.length === 0
      ) {
        document
          .getElementById(
            answer +
              "-" +
              (
                Number(e.currentTarget.id.slice(answer.length + 1)) - 1
              ).toString()
          )
          ?.focus();
      }
    }
  };

  return (
    <>
      {image && (
        <a
          className={classNames(
            "md:w-12 md:h-12 h-10 w-10 caret-transparent rounded-md ring-2 ring-black z-30 focus:bg-transparent transition ease-in  duration-200 shadow-md shadow-black",

            solved
              ? "ring-green-400 shadow-green-600 animate-pulse animate-thrice"
              : "",
            err
              ? "ring-red-400 shadow-red-600 decoration-red-600 animate-[shake_0.3s_0s_1.5]"
              : ""
          )}
        >
          <img src={image} alt="Icon" className="w-[50px]" />
        </a>
      )}
      {inputArray.map((_, index) => (
        <input
          id={`${answer}-${index + 1}`}
          key={`${answer}-${index + 1}`}
          className={classNames(
            "md:w-8 md:h-12 h-10 w-7 rounded-md caret-transparent ring-2 ring-black focus:outline-secondary selection:bg-transparent bg-white/50 z-20 transition duration-200 ease-in text-center font-frank pr-1 font-semibold md:text-4xl text-3xl justify-center shadow-md shadow-black",
            solved
              ? "ring-green-400 shadow-green-600 animate-pulse animate-thrice"
              : "",
            err
              ? "ring-red-400 shadow-red-600 decoration-red-600 animate-[shake_0.3s_0s_1.5]"
              : ""
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
          value={value[index]}
          onChange={(e) => handleChange(index, e.target.value)}
          onKeyUp={keyboardClick}
        />
      ))}
    </>
  );
};

export default PuzzleField;
