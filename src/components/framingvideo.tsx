import classNames from "classnames";
import { FunctionComponent, useEffect, useState } from "react";
import useVideo from "react-use/lib/useVideo";
import Controls from "./controls";
import Subtitles, { Subtitle } from "./subtitles";
import Border from "assets/Border-3.png";

interface OctagonVideoProps
  extends React.DetailedHTMLProps<
    React.VideoHTMLAttributes<HTMLVideoElement>,
    HTMLVideoElement
  > {
  subtitles: Subtitle[];
  triggerPlay: boolean;
}

const OctagonVideo: FunctionComponent<OctagonVideoProps> = ({
  className,
  subtitles,
  src,
  triggerPlay,
  ...videoProps
}) => {
  const [video, state, controls] = useVideo({
    ...videoProps,
    src: src as string,
    controls: false,
    className: classNames(
      "absolute left-6 top-6 w-[90%] h-[90%] bg-black z-99999",
      className
    ),
  });
  const [showSubtitles, setShowSubtitles] = useState(true);
  const [showControls, setShowControls] = useState(false);

  useEffect(() => {
    if (triggerPlay) {
      controls.seek(0);
      controls.play();
    } else {
      controls.pause();
    }
  }, [triggerPlay]);

  return (
    <div
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
      className="relative w-[400px] h-[500px]"
    >
      <img src={Border} className="absolute  w-full h-full top-0 left-0" />
      {video}
      <div className="absolute bottom-6 left-9 right-9 overflow-hidden">
        {!showSubtitles ? null : (
          <Subtitles
            className=" text-2xl"
            subtitles={subtitles}
            time={state.time}
          ></Subtitles>
        )}

        <Controls
          className={classNames("transition-[margin] mt-7", {
            "mb-[-60px]": !showControls,
            "mb-0": showControls,
          })}
          state={state}
          controls={controls}
          showSubtitles={showSubtitles}
          toggleSubtitles={() => setShowSubtitles((prev) => !prev)}
        ></Controls>
      </div>
    </div>
  );
};

export default OctagonVideo;
