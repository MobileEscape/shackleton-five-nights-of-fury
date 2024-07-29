import { useState, useEffect, FunctionComponent, useContext } from "react";
import classNames from "classnames";
import {
  ButtonClickSound,
  PlaySound,
  TypingSound,
  SuccessSound,
  ErrorSound,
} from "sounds/sound";
import { AppContext } from "contexts/app";

interface InputType {
  index: number;
}

const MetaPuzzle = () => {
  const { advance, setPaused } = useContext(AppContext);
  const [solved, setSolved] = useState(false);
  const [value, setValue] = useState(["", "", "", "", "", "", "", ""]);
  const [err, setErr] = useState(false);

  const answer = "totheice";
  const metaStyle = classNames(
    "w-12 h-12 caret-transparent rounded-md ring-2 selection:bg-transparent bg-white/50 ring-black focus:outline-secondary  bg-transparent transition z-20 duration-200 ease-in text-center font-frank pt-3 font-semibold text-4xl justify-center shadow-md shadow-black",

    solved ? "ring-green-400 shadow-green-600" : "",
    err ? "ring-red-400 shadow-red-600" : ""
  );

  const Input: FunctionComponent<InputType> = ({ index }) => {
    const keyboardClick = (e: any) => {
      PlaySound(TypingSound);
      if (e.key === "Enter") {
        if (Number(index) < 8)
          document
            .getElementById("meta-" + (Number(index) + 1).toString())
            ?.focus();
        else {
        }
        return;
      } else if (e.key === " " || e.key === "Spacebar") {
        e.value = e.currentTarget.value.slice(0, e.currentTarget.value.length);
        if (Number(index) < 8) {
          document
            .getElementById("meta-" + (Number(index) + 1).toString())
            ?.focus();
          return;
        }
      } else if (e.key === "ArrowLeft") {
        if (Number(index) > 1)
          document
            .getElementById("meta-" + (Number(index) - 1).toString())
            ?.focus();
        else e.currentTarget.select();
      } else if (e.key === "ArrowRight") {
        if (Number(index) < 8)
          document
            .getElementById("meta-" + (Number(index) + 1).toString())
            ?.focus();
        else e.currentTarget.select();
      } else {
        if (!/[a-zA-Z]/i.test(e.key)) {
          e.value = e.value.replace(/[0-9]/gi, "");
        }
        if (Number(index) < 8 && e.currentTarget.value.length > 0) {
          document
            .getElementById("meta-" + (Number(index) + 1).toString())
            ?.focus();
        }
        if (
          e.key === "Backspace" &&
          Number(index) > 1 &&
          e.currentTarget.value.length === 0
        ) {
          document
            .getElementById("meta-" + (Number(index) - 1).toString())
            ?.focus();
        }
      }
    };

    const handleChange = (index: number, newValue: string) => {
      const updatedValue = [...value];
      updatedValue[index] = newValue.toUpperCase();
      setValue(updatedValue);
      if (
        updatedValue.join("").length == 8 &&
        updatedValue.join("") == answer.toUpperCase()
      ) {
        setSolved(true);
        PlaySound(SuccessSound);
        setTimeout(() => {
          advance();
          setPaused(true);
        }, 4000);

        window.sessionStorage.setItem(answer, "true");
      } else if (updatedValue.join("").length == 8) {
        PlaySound(ErrorSound);
        setErr(true);
        setTimeout(() => {
          setErr(false);
        }, 5000);
      }
    };
    return (
      <input
        id={`meta-${index}`}
        className={metaStyle}
        maxLength={1}
        onClick={(e) => {
          e.currentTarget.select();
        }}
        type="text"
        value={value[index - 1]}
        onChange={(e) => handleChange(index - 1, e.target.value)}
        onFocus={(e) => {
          e.currentTarget.select();
        }}
        onKeyUp={keyboardClick}
        disabled={solved}
      />
    );
  };

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
        "After all our struggle, the pack has won. I gave the order: "
      </h3>
      <div className=" group grid grid-cols-4 md:grid-cols-8  gap-2 my-3 ">
        {Input({ index: 1 })}
        {Input({ index: 2 })}
        {Input({ index: 3 })}
        {Input({ index: 4 })}
        {Input({ index: 5 })}
        {Input({ index: 6 })}
        {Input({ index: 7 })}
        {Input({ index: 8 })}
      </div>
    </div>
  );
};

export default MetaPuzzle;
