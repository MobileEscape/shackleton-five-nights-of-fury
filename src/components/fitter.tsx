import classNames from "classnames";
import { ScaleContext } from "contexts/scale";
import { FunctionComponent, PropsWithChildren } from "react";
import { useMeasure } from "react-use";

interface FitterProps
  extends PropsWithChildren<{}>,
    React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLDivElement>,
      HTMLDivElement
    > {}

//ONLY USE INSIDE CONTAINER WHICH HAS NON ZERO WIDTH AND HEIGHT

const Fitter: FunctionComponent<FitterProps> = ({ children }) => {
  const [containerRef, { width: containerWidth, height: containerHeight }] =
    useMeasure();
  const [childRef, { width: childWidth, height: childHeight }] = useMeasure();
  const scaleHeight = containerHeight / childHeight;
  const scaleWidth = containerWidth / childWidth;
  const scale = Math.min(scaleHeight, scaleWidth);
  const puzzleWidth = childWidth * scale;
  const puzzleHeight = childHeight * scale;

  return (
    <ScaleContext.Provider value={scale}>
      <div
        ref={containerRef as any}
        className="w-full h-full flex justify-center items-center"
      >
        <div
          style={{ width: puzzleWidth, height: puzzleHeight }}
          className="relative"
        >
          <div
            style={{
              transform: `scale(${scale})`,
              transformOrigin: "top left",
            }}
            className="absolute flex"
          >
            <div
              ref={childRef as any}
              className={classNames({
                "opacity-0": containerWidth === 0 || childWidth === 0,
              })}
            >
              {children}
            </div>
          </div>
        </div>
      </div>
    </ScaleContext.Provider>
  );
};

export default Fitter;
