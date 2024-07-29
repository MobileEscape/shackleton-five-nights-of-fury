import Frame, { FrameProps } from "./frame";
import { FunctionComponent } from "react";
import VideoFrameImage from "assets/video-frame.png";
import FramingVideo from "../framingvideo";
import { useContext, useEffect, useRef, useState } from "react";

import { Subtitle } from "../subtitles";
import OutsideButton from "../buttons/main-button";
import { AppContext } from "contexts/app";
import Fitter from "components/fitter";

interface VideoFrameProps extends FrameProps {
  videoSrc: string;
  speakerBadge: { text: string; position: "left" | "right" };
  subtitles: Subtitle[];
}

const VideoFrame: FunctionComponent<VideoFrameProps> = ({
  videoSrc,
  index,
  speakerBadge,
  subtitles,
}) => {
  const { sound, step } = useContext(AppContext);
  const { advance } = useContext(AppContext);
  const clipPathWidth = 402;
  const clipPathHeight = 496;
  const [ended, setEnded] = useState(false);
  const trackRef = useRef<HTMLTrackElement>(null);
  const [controls, setControls] = useState(false);

  useEffect(() => {
    trackRef.current?.addEventListener("load", (e) => {
      const cues = trackRef.current?.track.cues;
      if (cues == null) return;
      Array.from(cues).forEach((c) => {
        console.log(c);
        (c as VTTCue).line = -3;
      });
    });
  }, []);

  return (
    <Frame index={index}>
      <div className="w-[95%] m-auto h-full flex flex-col pt-[120px]">
        <div className="max-w-[400px] md:max-w-[800px] flex-grow h-0 w-full mx-auto ">
          <Fitter>
            <div className="relative">
              <FramingVideo
                triggerPlay={step === index}
                subtitles={subtitles}
                onMouseOver={() => setControls(true)}
                onMouseLeave={() => setControls(false)}
                controls={controls}
                onEnded={() => setEnded(true)}
                src={videoSrc}
                muted={!sound}
                playsInline
              ></FramingVideo>
            </div>
          </Fitter>
        </div>
        <div className="flex justify-center flex-shrink-0 w-full py-9">
          <OutsideButton
            onClick={() => {
              advance();
            }}
            text={ended ? "Next" : "Skip"}
          ></OutsideButton>
        </div>
      </div>
    </Frame>
  );
};

export default VideoFrame;
