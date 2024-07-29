import classNames from "classnames";
import { FunctionComponent } from "react";
import { ButtonClickSound, PlaySound } from "sounds/sound";
import Border2 from "assets/Border2.png";

interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  > {
  text?: string;
}

const Button: FunctionComponent<ButtonProps> = ({
  className,
  onClick,
  text,
  ...rest
}) => {
  return (
    <div className={`relative ${className}`}>
      <div className="relative  hover:child-first:bg-secondary  rounded-full w-[100px] h-10 group">
        <div className="h-full w-full scale-y-[0.8] scale-x-[0.86] rounded-2xl group-hover:bg-secondary"></div>
        <h1 className="absolute inset-0 flex items-center justify-center text-center text-xl font-semibold">
          {text}
        </h1>
        <img
          {...rest}
          onClick={(e) => {
            PlaySound(ButtonClickSound);

            if (onClick) {
              onClick(e);
            }
          }}
          alt=""
          src={Border2}
          className="absolute inset-0 w-full h-full"
        />
      </div>
    </div>
  );
};

export default Button;
