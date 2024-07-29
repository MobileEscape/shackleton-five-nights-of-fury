import classNames from "classnames";
import { FunctionComponent } from "react";

interface DinTextProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {}

const DinText: FunctionComponent<DinTextProps> = ({ className, ...rest }) => {
  return (
    <div
      {...rest}
      className={classNames(
        className,
        "font-din text-black font-mrsEaves leading-tight text-center"
      )}
    ></div>
  );
};

export default DinText;
