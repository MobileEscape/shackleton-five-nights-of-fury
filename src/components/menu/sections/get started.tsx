import { FunctionComponent } from "react";

interface GetStartedSectionProps {}

const GetStartedSection: FunctionComponent<GetStartedSectionProps> = () => {
  return (
    <div className="font-mrsEaves text-xl text-white  p-3">
      Before you Begin: <br />
      <b>1. Gather friends:</b> Although this game can be played solo, puzzle
      games are better in teams for a veriaty of perspectives.
      <br />
      <b>2. Get Pen/ Pencil and Paper:</b> You will want to take notes. <br />
      <b>
        3. read the recap on your envelope and start looking for clues:
      </b>{" "}
      this being an escape-room style puzzle it might not be immediately obvious
      what to do, read the intro letter and start looking for clues in the
      different assets.
    </div>
  );
};

export default GetStartedSection;
