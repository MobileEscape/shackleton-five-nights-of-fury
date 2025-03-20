import { FrameProps } from "components/frames/frame";
import VideoFrame from "components/frames/video-frame";
import { FunctionComponent } from "react";
import Video from "assets/videos/Episode 4 Outro.mp4";

interface EfTwoFrameProps extends FrameProps {}

const EfTwoFrame: FunctionComponent<EfTwoFrameProps> = ({ index }) => {
  return (
    <VideoFrame
      subtitles={[]}
      index={index}
      videoSrc={Video}
      speakerBadge={{ text: "JS", position: "right" }}
    ></VideoFrame>
  );
};

export default EfTwoFrame;
