import classNames from "classnames";
import { FunctionComponent } from "react";
import { ButtonClickSound, PlaySound } from "sounds/sound";

interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  > {
  noMotion?: boolean;
}

const Button: FunctionComponent<ButtonProps> = ({
  className,
  onClick,
  noMotion = false,
  ...rest
}) => {
  return (
    <img
      {...rest}
      onClick={function (e) {
        PlaySound(ButtonClickSound);

        if (onClick) {
          onClick(e);
        }
      }}
      alt=""
      className={classNames(
        className?.toString(),
        "cursor-pointer",
        !noMotion && "transform active:scale-95"
      )}
    ></img>
  );
};

export default Button;
