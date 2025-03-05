import classNames from "classnames";
import { FunctionComponent } from "react";
import { ButtonClickSound, PlaySound } from "sounds/sound";
import Border1 from "assets/Border1.png";

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
      <div className="relative  hover:child-first:bg-secondary select:bg-transparent rounded-full w-[300px] h-16 group cursor-pointer scale-90">
        <div className="h-full w-full scale-75 rounded-2xl bg-white/50  md:group-hover:bg-secondary"></div>
        <h1 className="absolute inset-0 font-mrsEaves flex items-center justify-center text-center text-3xl font-black">
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
          src={Border1}
          className="absolute inset-0 w-full h-full"
        />
      </div>
    </div>
  );
};

export default Button;
