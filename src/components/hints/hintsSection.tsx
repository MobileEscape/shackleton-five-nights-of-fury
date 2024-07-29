import { FunctionComponent } from "react";
import { useState } from "react";
import Button from "components/buttons/inside-button";
import hints from "assets/data/hints.json";
import Expandable from "components/expandable";
import CoastlinesSolutionPart1 from "assets/Meta Solution Icon 4.png";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

interface HintsSectionProps {
  label?: string;
  text?: string;
  parts?: {
    label: string;
    text: string;
  }[];
}

/*interface HintProps {
  image: string | HTMLImageElement;
}

const HintImage: FunctionComponent<HintProps> = ({ image }) => {
  return (
    <div>
      <LazyLoadImage
        src={CoastlinesSolutionPart1}
        placeholderSrc={CoastlinesSolutionPart1}
        effect="blur"
        className=" w-[500px]  left-20 top-20 "
      />
    </div>
  );
};*/

const Hints: FunctionComponent<HintsSectionProps> = () => {
  const [hintSections, setHintSections] = useState("");
  const [propImage, setPropImage] = useState("");

  /*
  const handleClick = (e: MouseEvent) => {
    const target = e.currentTarget as HTMLElement;
    setPropImage(CoastlinesSolutionPart1);
  };

  const handleExpand = () => {
    const puzzleImage = document.getElementById("puzzleImage");

    const hasEventListener = puzzleImage?.getAttribute(
      "data-has-click-listener"
    );
    if (!hasEventListener) {
      puzzleImage?.addEventListener("click", handleClick);
      puzzleImage?.setAttribute("data-has-click-listener", "true");
    }
  };
*/
  return (
    <div>
      {!hintSections && (
        <div>
          <h2 className="text-white text-6xl font-kingEdwards text-center mb-4">
            Hints
          </h2>
          {hints.map((x, i) => (
            <Button
              key={`hintButoon-${i}`}
              className=" cursor-pointer font-mrsEaves  hover:bg-secondary text-center bg-primary/80 m-2"
              onClick={() => {
                setHintSections(x.puzzle);
              }}
            >
              {" "}
              {x.puzzle}
            </Button>
          ))}
        </div>
      )}
      {hintSections && (
        <div>
          <button
            className="absolute w-8 left-4 text-2xl text-center top-0 hover:text-secondary border hover:border-secondary border-white rounded-full"
            onClick={() => setHintSections("")}
          >
            {"<"}
          </button>
          <h2 className="text-white text-6xl font-kingEdwards text-center mb-4">
            {hintSections}
          </h2>
          {hints
            .filter((x) => x.puzzle == hintSections)[0]
            .hints.map((x: HintsSectionProps) => (
              <Expandable
                className="mb-3 mx-2"
                key={`section-${x.label}`}
                header={
                  <Button className="w-full cursor-pointer"> {x.label}</Button>
                }
                content={
                  x.text ? (
                    <p
                      className="p-2 font-mrsEaves text-2xl leading-tight italic"
                      dangerouslySetInnerHTML={{ __html: x.text }}
                    ></p>
                  ) : (
                    (x.parts?.map((part) => (
                      <Expandable
                        className="my-2 mx-2"
                        header={
                          <Button className="w-full cursor-pointer">
                            {" "}
                            {part.label}
                          </Button>
                        }
                        key={`section-${part.label}`}
                        content={
                          <div
                            className="p-2 font-mrsEaves text-2xl leading-tight italic"
                            dangerouslySetInnerHTML={{ __html: part.text }}
                          ></div>
                        }
                        link={""}
                      />
                    )) as any)
                  )
                }
                link={""}
              ></Expandable>
            ))}
        </div>
      )}
    </div>
  );
};

export default Hints;
