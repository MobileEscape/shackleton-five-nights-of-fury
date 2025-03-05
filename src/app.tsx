import { useState, lazy, Suspense, useEffect } from "react";
import { Route, HashRouter as Router, Routes } from "react-router-dom";
import { AppContext } from "contexts/app";
import { useSound } from "hooks/useSound";
import { useTimer } from "hooks/useTimer";
import OurApologiesFrame from "frames/our-apologies";
import HintImageFrame from "frames/hint-image";
import LoadingSpinner from "components/loading-spinner";
import Recap from "frames/recap";
import { FadeOutSound, IntroSound, PlaySound } from "sounds";

const LandingPage = lazy(() => import("frames/landing-page/landing-page"));
const ContentsPage = lazy(() => import("frames/contents-page"));
const StartGame = lazy(() => import("frames/start-game"));
const OpenningVideo = lazy(
  () => import("frames/videos/openning-video/openning-video")
);
const MainGamePlayPage = lazy(() => import("frames/main-gameplay-page"));
const MetaPuzzlePage = lazy(() => import("frames/meta-puzzle-page"));
const ClosingVideo = lazy(
  () => import("frames/videos/closing-video/closing-video")
);
const GameCompleteFrame = lazy(() => import("frames/game-complete-frame"));
const ContentsPageCopy = lazy(() => import("frames/contents-page-menu"));
function App() {
  const frames = [
    LandingPage,
    ContentsPage,
    StartGame,
    OpenningVideo,
    MainGamePlayPage,
    MetaPuzzlePage,
    ClosingVideo,
    GameCompleteFrame,
  ];
  const search = new URLSearchParams(window.location.search);
  const { sound, setSound, music, setMusic } = useSound();
  const timerProps = useTimer();
  const initialStep = window.sessionStorage.getItem("furthestVisitedStep")
    ? Number(window.sessionStorage.getItem("furthestVisitedStep"))
    : 0;
  const [step, setStep] = useState(initialStep);
  const [furthestVisitedStep, setFurthestVisitedStep] = useState(initialStep);
  const [menu, setMenu] = useState(false);
  const [menuSection, setMenuSection] = useState<number>();

  const [hintsOpen, setHintsOpen] = useState(false);
  const advance = () => {
    setStep((prev) => {
      let newStep = Math.min(prev + 1, frames.length - 1);
      if (newStep > furthestVisitedStep) {
        setFurthestVisitedStep(newStep);
        window.sessionStorage.setItem(
          "furthestVisitedStep",
          newStep.toString()
        );
      }
      return newStep;
    });
  };

  useEffect(() => {
    // Starts and stops music at certain steps
    if (step === 4 || step === 5 || step === 7) {
      if (music && !IntroSound.playing()) PlaySound(IntroSound);
    } else {
      FadeOutSound(IntroSound);
    }
  }, [step, setStep]);

  return (
    <Router>
      <AppContext.Provider
        value={{
          hintsOpen,
          setHintsOpen,
          sound,
          setSound,
          music,
          setMusic,
          step,
          menuSection,
          setMenuSection,
          menu,
          setMenu,
          setStep,
          advance,
          furthestVisitedStep,
          setFurthestVisitedStep,
          ...timerProps,
        }}
      >
        <Routes>
          <Route
            path="/"
            element={frames
              .slice(0, furthestVisitedStep + 3)
              .map((Frame, index) => (
                <Suspense fallback={<LoadingSpinner />}>
                  <Frame key={`frame-${index}`} index={index}></Frame>
                </Suspense>
              ))}
          />

          <Route path="/our-apologies" element={<OurApologiesFrame />} />
          <Route path="/hint-image" element={<HintImageFrame />} />
          <Route path="/recap" element={<Recap />} />

          <Route
            path="/contents-page"
            element={
              <Suspense fallback={<LoadingSpinner />}>
                <ContentsPageCopy />
              </Suspense>
            }
          />
        </Routes>
      </AppContext.Provider>
    </Router>
  );
}

export default App;
