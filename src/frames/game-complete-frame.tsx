import DinText from "components/din-text";
import Frame, { FrameProps } from "components/frames/frame";
import { AppContext } from "contexts/app";
import { FunctionComponent, useContext, lazy } from "react";
import { useState } from "react";
import Border from "assets/Border-3.png";
const MainButton = lazy(() => import("components/buttons/main-button"));

interface JohnsonIsInFrameProps extends FrameProps {}

const JohnsonIsInFrame: FunctionComponent<JohnsonIsInFrameProps> = ({
  index,
}) => {
  const { time } = useContext(AppContext);
  const [ModalIsOpen, setModalOpen] = useState(false);

  const hours = Math.floor(time / 3600);
  const minutes = Math.floor((time - hours * 3600) / 60);
  const seconds = time - minutes * 60 - hours * 3600;

  return (
    <Frame index={index}>
      <div className="relative w-[800px] m-auto mt-[100px] items-center max-w-[90vw] flex flex-col ">
        {ModalIsOpen && (
          <div className="relative   w-[500px] max-w-[90vw] leading-tight   font-lemon z-10 text-black text-center text-xl font-medium left-0 py-10">
            <img
              src={Border}
              className="absolute max-w-[90vw] w-full h-full top-0 right-0 "
            />
            <p className="relative z-10 text-wrap text-3xl my-8 font-mrsEaves mx-2">
              Click below to leave a review:
            </p>
            <MainButton
              onClick={() =>
                window.open(
                  "https://www.amazon.ca/review/create-review/?ie=UTF8&channel=glance-detail&asin=B0D23KRFR1"
                )
              }
              className="mx-auto w-[300px] mt-10 scale-90"
              text="Amazon"
            />

            <MainButton
              onClick={() =>
                window.open(
                  "https://www.theescapemail.ca/a/review/write?product=shackleton-box-set"
                )
              }
              className="mx-auto w-[300px]  scale-90"
              text="Our Website"
            ></MainButton>
            <MainButton
              onClick={() =>
                window.open(
                  "https://boardgamegeek.com/boardgame/427073/the-shackleton-series-interactive-puzzle-adventure"
                )
              }
              className="mx-auto w-[300px] scale-90"
              text="BoadGameGeek"
            />
            <MainButton
              onClick={() => setModalOpen(false)}
              className="mx-auto w-[300px] scale-75 mt-5 "
              text="Back"
            ></MainButton>
          </div>
        )}
        {!ModalIsOpen && (
          <div className="relative text-center z-30  w-[500px] max-w-[90vw] p-2">
            <img
              src={Border}
              className="absolute max-w-[90vw] w-full h-full top-0 left-0 z-0 "
            />
            <p className="relative text-2xl mt-8 mb-2 font-mrsEaves mx-3 md:mx-16 z-10 leading-[1.2]">
              {`You have successfully completed Episode 4 of the Shackleton Series! Your time was: ${`0${hours}`.slice(
                -2
              )}:${`0${minutes}`.slice(-2)}:${`0${seconds}`.slice(-2)} `}
            </p>

            <div className="border-2 border-black bg-secondary/30 rounded-lg p-2 mb-4 mx-2 text-center">
              <p className="relative text-2xl  px-4 z-30 font-mrsEaves leading-[1]">
                Share your thoughts, review the game on:
              </p>
              <MainButton
                onClick={() => setModalOpen(true)}
                className="mx-auto  w-[300px] scale-75 "
                text="Review"
              />
            </div>
            <div className="border-2 border-black bg-secondary/30 rounded-lg p-2 mb-4 mx-2  text-center">
              <p className="relative text-2xl  px-4 z-30 font-mrsEaves leading-[1]">
                Buy a refill kit and check out our other products:{" "}
              </p>
              <MainButton
                onClick={() =>
                  window.open(
                    "https://www.theescapemail.com/pages/shackleton-complete"
                  )
                }
                className="mx-auto  w-[300px] scale-75"
                text="Shop"
              />
            </div>

            <p className="relative text-2xl mb-6 px-4 z-30 font-mrsEaves mx-4 leading-[1.2]">
              Check how historically accurate this episode is{" "}
              <a
                href="https://www.theescapemail.com/pages/shackleton-ep4-historicity"
                target="_blank"
                className="z-30 text-secondary hover:text-primary transition duration-300"
              >
                here
              </a>
              .
            </p>
          </div>
        )}
      </div>
    </Frame>
  );
};

export default JohnsonIsInFrame;
