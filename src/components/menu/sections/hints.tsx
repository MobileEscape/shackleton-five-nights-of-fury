import { FunctionComponent, useContext } from "react";
import { AppContext } from "contexts/app";

interface HintsSectionProps {}

const HintsSection: FunctionComponent<HintsSectionProps> = () => {
  const { setHintsOpen } = useContext(AppContext);
  return (
    <div className="font-mrsEaves text-white text-xl p-3 relative">
      During gameplay, hints can be accessed by clicking the{" "}
      <span className="w-6 h-6 rounded-full border border-white inline-flex justify-center items-center text-s">
        ?
      </span>{" "}
      icon at the bottom of the main gamplay page. Or{" "}
      <a
        onClick={() => setHintsOpen(true)}
        className="text-secondary hover:text-blue-700 cursor-pointer"
      >
        click here
      </a>{" "}
      to view the hints.
    </div>
  );
};

export default HintsSection;
