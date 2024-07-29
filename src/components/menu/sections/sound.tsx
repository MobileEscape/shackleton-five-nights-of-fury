import { FunctionComponent } from "react";

import classNames from "classnames";
import { AppContext } from "contexts/app";
import { useContext } from "react";

interface SoundSectionProps {}

const SoundSection: FunctionComponent<SoundSectionProps> = () => {
  const { sound, setSound, music, setMusic } = useContext(AppContext);

  return (
    <div>
      <div className="px-7 py-2 flex justify-center gap-2 md:gap-4">
        <h1 className="text-white font-bold font-mrsEaves text-3xl md:text-4xl mt-1">
          Effect
        </h1>
        <button
          className={classNames(
            " shadow-sm shadow-black w-24 h-10  md:w-24 md:h-12 pb-1  border-2 border-white rounded-md   font-mrsEaves transition  text-white md:text-3xl  text-2xl font-black leading-0 duration-200",
            {
              "bg-secondary": sound,
              "bg-transparent": !sound,
            }
          )}
          onClick={() => setSound(true)}
        >
          ON
        </button>

        <button
          onClick={() => setSound(false)}
          className={classNames(
            " shadow-sm shadow-black w-24 h-10  md:w-24 md:h-12 pb-1  border-2 border-white rounded-md   font-mrsEaves  transition text-white md:text-3xl  text-2xl font-black leading-0 duration-200",
            { "bg-secondary": !sound, "bg-transparent": sound }
          )}
        >
          OFF
        </button>
      </div>
      <div className="px-7 py-2 flex justify-center gap-2 md:gap-4">
        <h1 className="text-white font-bold font-mrsEaves text-3xl md:text-4xl mt-1">
          Music
        </h1>
        <button
          className={classNames(
            " shadow-sm shadow-black w-24 h-10  md:w-24 md:h-12 pb-1   border-2 border-white rounded-md  font-mrsEaves transition text-white md:text-3xl  text-2xl font-black leading-0 duration-200",
            {
              "bg-secondary": music,
              "bg-transparent": !music,
            }
          )}
          onClick={() => setMusic(true)}
        >
          ON
        </button>

        <button
          onClick={() => setMusic(false)}
          className={classNames(
            " shadow-sm shadow-black w-24 h-10  md:w-24 md:h-12 pb-1   border-2 border-white rounded-md font-mrsEaves transition text-white md:text-3xl  text-2xl font-black leading-0 duration-200",
            { "bg-secondary": !music, "bg-transparent": music }
          )}
        >
          OFF
        </button>
      </div>
    </div>
  );
};

export default SoundSection;
