import classNames from "classnames";
import { FunctionComponent } from "react";

export interface Subtitle {
  start: number;
  end: number;
  text: string;
}

interface SubtitlesProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  time: number;
  subtitles: Subtitle[];
}

const Subtitles: FunctionComponent<SubtitlesProps> = ({ time, subtitles, className, ...rest }) => {
  const activeSub = subtitles.find((x) => x.start <= time && x.end > time);
  return !activeSub ? null : (
    <div
      dangerouslySetInnerHTML={{ __html: activeSub.text }}
      className={classNames(className, "bg-black/70 text-white text-center px-2 py-2 font-sans")}
      {...rest}
    ></div>
  );
};

export default Subtitles;
