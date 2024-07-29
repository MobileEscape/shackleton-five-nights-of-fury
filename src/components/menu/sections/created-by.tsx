import { FunctionComponent } from "react";

interface CreatedBySectionProps {}

const CreatedBySection: FunctionComponent<CreatedBySectionProps> = () => {
  return (
    <div className="text-center px-2 py-3 text-white text-[19px] font-mrsEaves leading-tight">
      DECODED is brought to you
      <br />
      by:
      <br />
      <strong>
        <u
          className="cursor-pointer"
          onClick={() => window.open("https://www.socialchangery.com/")}
        >
          The Social Changery
        </u>
      </strong>
      <br />
      <br />
      Created by:
      <br />
      <strong>
        <u
          className="cursor-pointer"
          onClick={() => window.open("https://www.mobileescape.ca/")}
        >
          Mobile Escape
        </u>
      </strong>
    </div>
  );
};

export default CreatedBySection;
