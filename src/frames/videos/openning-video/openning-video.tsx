import { FrameProps } from "components/frames/frame";
import { FunctionComponent, lazy, Suspense } from "react";
import Video from "assets/videos/Episode 4 Intro.mp4";
const VideoFrame = lazy(() => import("components/frames/video-frame"));

interface EfOneFrameProps extends FrameProps {}

const EfOneFrame: FunctionComponent<EfOneFrameProps> = ({ index }) => {
  return (
    <Suspense>
      <VideoFrame
        subtitles={[]}
        index={index}
        videoSrc={Video}
        speakerBadge={{ text: "EF", position: "right" }}
      ></VideoFrame>
    </Suspense>
  );
};

export default EfOneFrame;
