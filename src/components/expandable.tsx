import { FunctionComponent, useState } from "react";
import classNames from "classnames";
import useMeasure from "react-use/lib/useMeasure";

interface ExpandableProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  header: ReturnType<FunctionComponent>;
  content: ReturnType<FunctionComponent>;
  link: string;
}

const Expandable: FunctionComponent<ExpandableProps> = ({
  header,
  content,
  link,
  className,
  ...rest
}) => {
  const [expanded, setExpanded] = useState(false);
  const [headerRef, { height: headerHeight }] = useMeasure();
  const [contentRef, { height: contentHeight }] = useMeasure();
  return headerHeight === 0 ? (
    <div className={className} ref={headerRef as any}>
      {header}
    </div>
  ) : (
    <div
      className={classNames("transition-all", className, {
        "overflow-hidden": !expanded,
        "delayed-overflow-unset": expanded,
      })}
      style={{ height: expanded ? headerHeight + contentHeight : headerHeight }}
      {...rest}
    >
      <style>
        {`.delayed-overflow-unset {
            animation: change-overflow 150ms step-end forwards;
          }

          @keyframes change-overflow {
            from {
              overflow: hidden;
            }
            to {
              overflow: unset;
            }
          }`}
      </style>
      <div
        onClick={() => {
          if (link) window.open(link, "_blank", "noreferrer");
          else setExpanded((prev) => !prev);
        }}
      >
        {header}
      </div>
      <div ref={contentRef as any}>{content}</div>
    </div>
  );
};

export default Expandable;
