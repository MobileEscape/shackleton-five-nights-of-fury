import { FunctionComponent } from "react";
import { ReactComponent as PlayIcon } from "assets/playback-play.svg";
import { ReactComponent as PauseIcon } from "assets/playback-pause.svg";
import SubtitlesIcon from "./subtitles-icon";
import classNames from "classnames";
import useVideo from "react-use/lib/useVideo";

interface ControlsProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  state: ReturnType<typeof useVideo>[1];
  controls: ReturnType<typeof useVideo>[2];
  showSubtitles: boolean;
  toggleSubtitles: () => void;
}

const Controls: FunctionComponent<ControlsProps> = ({
  controls,
  state,
  showSubtitles,
  toggleSubtitles,
  className,
  ...rest
}) => {
  return (
    <div {...rest} className={classNames("flex items-center", className)}>
      <div className="cursor-pointer h-[25px] flex items-center">
        {state.playing ? (
          <PauseIcon onClick={controls.pause} width={23}></PauseIcon>
        ) : (
          <PlayIcon onClick={controls.play} width={23}></PlayIcon>
        )}
      </div>
      <div
        onClick={(e) => {
          try {
            const width = e.currentTarget.getBoundingClientRect().width;
            const x = e.pageX - e.currentTarget.getBoundingClientRect().left;
            controls.seek(state.duration * (x / width));
          } catch (er) {}
        }}
        className="mx-5 rounded-full h-[16px] bg-white flex-grow cursor-pointer overflow-hidden"
      >
        <div
          className="bg-[#5195BA] rounded-full h-full pointer-events-none transition-[width]"
          style={{ width: `${(state.time / state.duration) * 100}%` }}
        ></div>
      </div>
      {/*<SubtitlesIcon onClick={toggleSubtitles} turnedOn={showSubtitles} className="cursor-pointer"></SubtitlesIcon>*/}
    </div>
  );
};

export default Controls;
