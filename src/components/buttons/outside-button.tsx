import classNames from "classnames";
import { FunctionComponent } from "react";
import { ButtonClickSound, PlaySound } from "sounds";

interface OutsideButtonProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  small?: boolean;
}

const OutsideButton: FunctionComponent<OutsideButtonProps> = ({
  small = false,
  onClick,
  children,
  className,
  ...rest
}) => {
  return (
    <div
      {...rest}
      onClick={(e) => {
        PlaySound(ButtonClickSound);
        if (onClick) {
          onClick(e);
        }
      }}
      id="aux-container"
      className={classNames(
        "border-white border-[3px] ring-4 ring-primary  bg-primary hover:bg-secondary font-mrsEaves font-medium text-white tansform active:scale-95 cursor-pointer select-none",
        className,
        { " py-2 px-12 text-[28px]": !small, "py-1 px-9  text-[22px]": small }
      )}
    >
      {children}
    </div>
  );
};

export default OutsideButton;
