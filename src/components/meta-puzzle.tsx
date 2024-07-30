import { useState, useEffect, FunctionComponent, useContext } from "react";
import classNames from "classnames";
import { AppContext } from "contexts/app";

import { PlaySound, TypingSound, SuccessSound, ErrorSound } from "sounds/sound";

const MetaPuzzle = () => {
  const { advance, setPaused } = useContext(AppContext);
  const [solved, setSolved] = useState(false);
  const [value, setValue] = useState([
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
  ]);
  const [err, setErr] = useState(false);

  const answer = "EIGHTHUNDREDMILESRESCUETHECREW";

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
      updatedValue.join("").length == answer.length &&
      updatedValue.join("") == answer.toUpperCase()
    ) {
      setErr(false);
      setSolved(true);
      PlaySound(SuccessSound);
      setSolved(true);
      setTimeout(() => {
        advance();
        setPaused(true);
      }, 4000);

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
    <div className="flex flex-col items-center ">
      <h3 className="relative z-10 text-xl  font-black font-frank m-4 ">
        "My new mission is clear. I know what I must do:"
      </h3>
      <div className="gap-2 my-3 flex flex-col items-center">
        <div className="flex gap-2">
          {["e", "i", "g", "h", "t"].map((_, index) => (
            <input
              id={`${answer}-${index + 1}`}
              key={`${answer}-${index + 1}`}
              className={classNames(
                "md:w-8 md:h-12 h-10 w-7 rounded-md caret-transparent ring-2 ring-black focus:outline-secondary selection:bg-transparent bg-white/50 z-20 transition duration-200 ease-in text-center font-frank pt-3 font-semibold md:text-4xl text-3xl justify-center shadow-md shadow-black",
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
              value={value[index]}
              onChange={(e) => handleChange(index, e.target.value)}
              onKeyUp={keyboardClick}
            />
          ))}
        </div>
        <div className="flex gap-2">
          {["h", "u", "n", "d", "r", "e", "d"].map((_, index) => (
            <input
              id={`${answer}-${index + 6}`}
              key={`${answer}-${index + 6}`}
              className={classNames(
                "md:w-8 md:h-12 h-10 w-7 rounded-md caret-transparent ring-2 ring-black focus:outline-secondary selection:bg-transparent bg-white/50 z-20 transition duration-200 ease-in text-center font-frank pt-3 font-semibold md:text-4xl text-3xl justify-center shadow-md shadow-black",
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
              value={value[index + 5]}
              onChange={(e) => handleChange(index + 5, e.target.value)}
              onKeyUp={keyboardClick}
            />
          ))}
        </div>
        <div className="flex gap-2">
          {["m", "i", "l", "e", "s"].map((_, index) => (
            <input
              id={`${answer}-${index + 13}`}
              key={`${answer}-${index + 13}`}
              className={classNames(
                "md:w-8 md:h-12 h-10 w-7 rounded-md caret-transparent ring-2 ring-black focus:outline-secondary selection:bg-transparent bg-white/50 z-20 transition duration-200 ease-in text-center font-frank pt-3 font-semibold md:text-4xl text-3xl justify-center shadow-md shadow-black",
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
              value={value[index + 12]}
              onChange={(e) => handleChange(index + 12, e.target.value)}
              onKeyUp={keyboardClick}
            />
          ))}
        </div>
        <div className="flex gap-2">
          {["r", "e", "s", "c", "u", "e"].map((_, index) => (
            <input
              id={`${answer}-${index + 18}`}
              key={`${answer}-${index + 18}`}
              className={classNames(
                "md:w-8 md:h-12 h-10 w-7 rounded-md caret-transparent ring-2 ring-black focus:outline-secondary selection:bg-transparent bg-white/50 z-20 transition duration-200 ease-in text-center font-frank pt-3 font-semibold md:text-4xl text-3xl justify-center shadow-md shadow-black",
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
              value={value[index + 17]}
              onChange={(e) => handleChange(index + 17, e.target.value)}
              onKeyUp={keyboardClick}
            />
          ))}
        </div>
        <div className="flex gap-2">
          {["t", "h", "e"].map((_, index) => (
            <input
              id={`${answer}-${index + 24}`}
              key={`${answer}-${index + 24}`}
              className={classNames(
                "md:w-8 md:h-12 h-10 w-7 rounded-md caret-transparent ring-2 ring-black focus:outline-secondary selection:bg-transparent bg-white/50 z-20 transition duration-200 ease-in text-center font-frank pt-3 font-semibold md:text-4xl text-3xl justify-center shadow-md shadow-black",
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
              value={value[index + 23]}
              onChange={(e) => handleChange(index + 23, e.target.value)}
              onKeyUp={keyboardClick}
            />
          ))}
        </div>
        <div className="flex gap-2">
          {["c", "r", "e", "w"].map((_, index) => (
            <input
              id={`${answer}-${index + 27}`}
              key={`${answer}-${index + 27}`}
              className={classNames(
                "md:w-8 md:h-12 h-10 w-7 rounded-md caret-transparent ring-2 ring-black focus:outline-secondary selection:bg-transparent bg-white/50 z-20 transition duration-200 ease-in text-center font-frank pt-3 font-semibold md:text-4xl text-3xl justify-center shadow-md shadow-black",
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
              value={value[index + 26]}
              onChange={(e) => handleChange(index + 26, e.target.value)}
              onKeyUp={keyboardClick}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MetaPuzzle;
