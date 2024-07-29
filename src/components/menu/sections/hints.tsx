import { FunctionComponent } from "react";

interface HintsSectionProps {}

const HintsSection: FunctionComponent<HintsSectionProps> = () => {
  return (
    <div className="font-mrsEaves text-white text-xl p-3 relative">
      During gameplay, hints can be accessed by clicking the{" "}
      <span className="w-6 h-6 rounded-full border border-white inline-flex justify-center items-center text-s">
        ?
      </span>{" "}
      icon at the bottom of the main gamplay page
    </div>
  );
};

export default HintsSection;
