import { FunctionComponent } from "react";
import { useState } from "react";
import Button from "components/buttons/inside-button";
import hints from "assets/data/hints.json";
import Expandable from "components/expandable";
import "react-lazy-load-image-component/src/effects/blur.css";
import Icon1 from "assets/icons/SADDLE.png";
import Icon2 from "assets/icons/HUMS.png";
import Icon3 from "assets/icons/HEAR.png";
import Icon4 from "assets/icons/WRIGHT.png";
import Icon5 from "assets/icons/EVENT.png";
import Icon6 from "assets/icons/ICE.png";
import Meta from "assets/icons/meta.png";

interface HintsSectionProps {
  label?: string;
  text?: string;
  parts?: {
    label: string;
    text: string;
  }[];
}

const Icons = [Icon1, Icon2, Icon3, Icon4, Icon5, Icon6, Meta];

const Hints: FunctionComponent<HintsSectionProps> = () => {
  const [hintSections, setHintSections] = useState("");

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
              <span className="flex gap-4">
                <img
                  src={Icons[i]}
                  className="w-8 h-8 bg-white/90 rounded-md"
                />{" "}
                {x.puzzle}
              </span>
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
