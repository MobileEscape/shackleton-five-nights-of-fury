import classNames from "classnames";
import { FunctionComponent, ReactElement, lazy, Suspense } from "react";
import { useContext } from "react";
import { AppContext } from "contexts/app";
import MutedIndicator from "assets/15 - Button - Floating Footer - Sound Turned Off.png";

const Button = lazy(() => import("../buttons/image-button"));
const Topbar = lazy(() => import("../topbar"));
const Menu = lazy(() => import("../menu/menu"));

export interface FrameProps extends React.HTMLAttributes<HTMLDivElement> {
  transparentHeader?: boolean;
  hints?: ReactElement[];
}

const Frame: FunctionComponent<FrameProps> = ({
  className,
  children,
  transparentHeader = false,
  ...rest
}) => {
  const { step, sound, setSound } = useContext(AppContext);

  return (
    <div
      className={classNames(
        "h-full w-full overflow-auto md:bg-image-lg bg-image-sm fixed left-0 top-0 bg-center bg-cover select-none ",
        className?.toString()
      )}
      {...rest}
    >
      <Suspense>
        <Topbar noBackground={transparentHeader}></Topbar>
        <Menu></Menu>
        {children}

        <Button
          onClick={() => setSound(true)}
          src={MutedIndicator}
          className={classNames("left-4 bottom-4 fixed z-30", {
            invisible: sound,
          })}
          width={40}
        ></Button>
      </Suspense>
    </div>
  );
};

export default Frame;
