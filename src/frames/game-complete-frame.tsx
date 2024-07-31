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
              Share your thoughts, review us on:
            </p>
            <MainButton
              onClick={() =>
                window.open(
                  "https://www.amazon.com/review/create-review/?ie=UTF8&channel=glance-detail&asin=B0D23KRFR1"
                )
              }
              className="mx-auto w-[300px] mt-10 scale-90"
              text="Amazon"
            />
            <MainButton
              onClick={() =>
                window.open(
                  "https://www.theescapemail.com/a/review/write?product=7956684144834"
                )
              }
              className="mx-auto w-[300px] my-3 scale-90"
              text="Our Website"
            ></MainButton>
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
            <p className="relative z-10 text-xl my-8 font-frank mx-6 md:mx-16">
              My new mission is clear. I know what I must do,{" "}
              <b>eight hundred miles rescure the crew!</b>.
            </p>
            <p className="relative z-10 text-3xl my-8 font-mrsEaves mx-6 md:mx-16">
              {`You have successfully completed the fourth episode of the Shackleton Series! Your time was: ${`0${hours}`.slice(
                -2
              )}:${`0${minutes}`.slice(-2)}:${`0${seconds}`.slice(-2)} `}
            </p>

            <DinText
              className="relative z-10 text-[26px] my-4 mb-10 mx-4 md:mx-16"
              dangerouslySetInnerHTML={{
                __html: `Liking the series so far? Please consider leaving a review. `,
              }}
            ></DinText>
            <MainButton
              onClick={() => setModalOpen(true)}
              className="mx-auto my-2 w-[300px] scale-90"
              text="Review"
            />
            <MainButton
              onClick={() => window.open("http://theescapemail.com")}
              className="mx-auto my-2 w-[300px] scale-90"
              text="Shop"
            />

            <p className="relative text-2xl mt-6 px-4 z-30 font-mrsEaves mx-4">
              Did you know that the plot of this episode is based on a true
              story?
            </p>
            <p className="relative text-2xl mb-6 px-4 z-30 font-mrsEaves mx-4">
              Check how historically accurate this episode is{" "}
              <a
                href="https://www.theescapemail.com/pages/shackleton-ep1-historicity"
                target="_blank"
                className="z-30 text-secondary hover:text-primary transition duration-300"
              >
                here.
              </a>
            </p>
          </div>
        )}
      </div>
    </Frame>
  );
};

export default JohnsonIsInFrame;
