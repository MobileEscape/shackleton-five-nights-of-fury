import { FunctionComponent, useContext } from "react";
import { AppContext } from "contexts/app";
import Button from "../../buttons/inside-button";
import { useNavigate } from "react-router-dom";

interface HintsSectionProps {}

export interface Hint {
  label: string;
  icon?: string;
  text?: string;
  parts?: Hint[];
  link: string;
}

const HintComponent = ({
  value,
  index,
  link,
}: {
  value: Hint;
  index: number;
  link: string;
}) => {
  const { setMenu } = useContext(AppContext);

  const navigate = useNavigate();

  return (
    <Button
      className=" cursor-pointer font-mrsEaves  hover:bg-secondary text-center bg-primary/80 m-2"
      onClick={() => {
        navigate(link);
        setMenu(false);
      }}
    >
      {" "}
      {value.label}
    </Button>
  );
};

const ContentsSection: FunctionComponent<HintsSectionProps> = () => {
  const hints: Hint[] = [
    {
      label: "Map",
      link: "/our-apologies?index=0",
    },
    {
      label: "Invitation",
      link: "/our-apologies?index=1",
    },
    {
      label: "Soup Label",
      link: "/our-apologies?index=2",
    },
    {
      label: "Journal Pages x 5",
      link: "/our-apologies?index=3",
    },
    {
      label: "Dot Matrix Puzzle",
      link: "/our-apologies?index=4",
    },
    {
      label: "Wuzzle Puzzle",
      link: "/our-apologies?index=5",
    },
    {
      label: "Plankton Painting",
      link: "/our-apologies?index=6",
    },
    {
      label: "Wild's Winds / Dot Matrix",
      link: "/our-apologies?index=6",
    },
    {
      label: "Pipes x 4",
      link: "/our-apologies?index=7",
    },
  ];
  return (
    <div>
      <br />
      {hints.map((x, i) => (
        <HintComponent
          key={`content-${x.label}`}
          value={x}
          index={i}
          link={x.link}
        ></HintComponent>
      ))}
      <div className="text-xl text-white font-mrsEaves m-2">
        <br />
        If you're missing any of these items click on it for more support.
      </div>
    </div>
  );
};

export default ContentsSection;
