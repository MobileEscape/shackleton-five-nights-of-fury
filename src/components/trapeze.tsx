import { FunctionComponent } from "react";

interface TrapezeProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  color: string;
  height: number | string;
  width: number | string;
  side: "top" | "bottom";
  cut?: "both" | "left" | "right";
}

const Trapeze: FunctionComponent<TrapezeProps> = ({ color, width, height, side, cut = "both", style, ...rest }) => {
  return (
    <div
      style={{
        ...style,
        borderBottom: `${height}px solid ${color}`,
        width,
        borderLeft: `${["both", "left"].includes(cut) ? height : 0}px solid transparent`,
        borderRight: `${["both", "right"].includes(cut) ? height : 0}px solid transparent`,
        transform: side === "bottom" ? "scaleY(-1)" : "none",
      }}
      {...rest}
    ></div>
  );
};

export default Trapeze;
