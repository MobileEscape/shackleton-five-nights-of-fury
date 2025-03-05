import { FunctionComponent, useContext, lazy } from "react";
import Frame, { FrameProps } from "components/frames/non-game-frame";
import { useNavigate } from "react-router-dom";
import Border from "assets/Border-3.png";
import { contents, type Asset } from "assets/data/contents";

const MainButton = lazy(() => import("components/buttons/main-button"));

interface ContentsFrameProps extends FrameProps {}

const AssetComponent = ({
  value,
  index,
  link,
}: {
  value: Asset;
  index: number;
  link: string;
}) => {
  const navigate = useNavigate();
  return (
    <button
      className="my-1 w-[80%] h-10 text-center border-2 border-black text-black font-mrsEaves text-2xl font-standard hover:bg-secondary z-30 shadow-md shadow-primary/80"
      onClick={() => navigate("/our-apologies?index=" + index)}
    >
      {value.label}
    </button>
  );
};

const ContentsFrame: FunctionComponent<ContentsFrameProps> = () => {
  const navigate = useNavigate();
  return (
    <Frame>
      <div className="relative w-[500px] max-w-[90vw] m-auto mt-[100px] h-fit md:h-fit first-letter flex flex-col items-center  ">
        <img
          src={Border}
          className="absolute max-w-[90vw] w-full h-full top-0 left-0"
        />
        <h1 className=" relative z-10 text-center font-kingEdwards font-semibold text-7xl mt-6 text-primary">
          Contents
        </h1>
        <div className="z-10 w-[80%] text-black font-mrsEaves  text-xl font-regular ">
          Check that you have all the items.
        </div>
        <br />
        <div className="mx-auto flex flex-col items-center w-[97%]  md:h-fit">
          {contents.map((x, i) => (
            <AssetComponent
              key={`content-${x.label}`}
              value={x}
              index={i}
              link={x.link ? x.link : ""}
            ></AssetComponent>
          ))}
        </div>
        <div className=" my-8 scale-90 ">
          <MainButton text="Back" onClick={() => navigate(-1)} />
        </div>
      </div>
    </Frame>
  );
};

export default ContentsFrame;
