import classNames from "classnames";
import { FunctionComponent } from "react";
import { ButtonClickSound, PlaySound } from "sounds/sound";

interface DivButtonProps extends React.HTMLAttributes<HTMLDivElement> {
  noMotion?: boolean;
}

const DivButton: FunctionComponent<DivButtonProps> = ({ className, onClick, noMotion = false, ...rest }) => {
  return (
    <div
      {...rest}
      onClick={function (e) {
        PlaySound(ButtonClickSound);
        if (onClick) {
          onClick(e);
        }
      }}
      className={classNames(className?.toString(), "cursor-pointer", !noMotion && "transform active:scale-95")}
    ></div>
  );
};

export default DivButton;
