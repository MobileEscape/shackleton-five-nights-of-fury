import classNames from "classnames";
import { FunctionComponent } from "react";
import { ButtonClickSound, PlaySound } from "sounds";

interface InsideButtonProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {}

const InsideButton: FunctionComponent<InsideButtonProps> = ({
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
      className={classNames(
        "border-white border border-b-4 font-mrsEaves text-left hover:bg-secondary font-medium text-white tracking-wider text-xl px-5 py-1.5 tansform active:scale-95 cursor-pointer select-none",
        className
      )}
    >
      {children}
    </div>
  );
};

export default InsideButton;
