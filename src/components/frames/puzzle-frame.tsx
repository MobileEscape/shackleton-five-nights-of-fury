import { FunctionComponent, useState, useContext } from "react";
import Frame, { FrameProps } from "./non-game-frame";
import OutsideButton from "components/buttons/outside-button";
import { useNavigate } from "react-router-dom";
import { AppContext } from "contexts/app";

interface PuzzleFrameProps extends FrameProps {
  task: string;
  answer: String;
}

const PuzzleFrame: FunctionComponent<PuzzleFrameProps> = ({
  task,
  answer,
  ...rest
}) => {
  const [input, setAnswer] = useState("");
  const [solved, setSolved] = useState(false);
  const { advance } = useContext(AppContext);

  const CheckAnswer = (value: string) => {
    if (
      answer == "shipheldfast" &&
      value.toLowerCase() == answer.toLowerCase()
    ) {
      advance();
      navigate("/");
    }
    return value.toLowerCase() == answer.toLowerCase();
  };

  const navigate = useNavigate();

  return (
    <Frame transparentHeader {...rest}>
      <div className="w-full h-[95%] max-h-[800px] flex flex-col">
        <div className="h-[84px] flex-shrink-0"></div>
        <div className="flex-grow h-0 flex flex-col relative">
          <div className="flex-grow h-0"></div>

          <div className="absolute left-0 top-0 w-full h-full px-4  text-center">
            <div className="max-w-[400px] w-full mx-auto flex flex-col h-full">
              <div className="flex relative z-10 mb-3">
                <div>
                  <div className="text-black font-mrsEaves text-2xl">
                    “{task}”
                    {solved && (
                      <div className="text-black font-mrsEaves text-2xl">
                        Corrrect!
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <form className="mt-12 text-black">
                <input
                  type="text"
                  placeholder="Enter your answer"
                  className=" bg-secondary border-2 border- primary p-2 text-black font-mrsEaves focus:border-primary placeholder:text-primary"
                  value={input}
                  onChange={({ target }) => setAnswer(target.value)}
                />
                <OutsideButton
                  className="mt-12"
                  onClick={() => setSolved(CheckAnswer(input))}
                >
                  Check
                </OutsideButton>
                <OutsideButton className="mt-12" onClick={() => navigate("/")}>
                  Back
                </OutsideButton>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Frame>
  );
};

export default PuzzleFrame;
