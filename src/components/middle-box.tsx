import { FunctionComponent, PropsWithChildren } from "react";
import Trapeze from "./trapeze";

interface MiddleBoxProps extends PropsWithChildren {}

const MiddleBox: FunctionComponent<MiddleBoxProps> = ({ children }) => {
  return (
    <div className="w-full h-full flex pt-[50px]">
      <div className="my-auto w-full">
        <div className="flex justify-center">
          <Trapeze width={295} height={25} color="rgba(0,0,0,0.8)" side="top"></Trapeze>
        </div>
        <div className="bg-black/80">{children}</div>
        <div className="flex justify-center">
          <Trapeze width={320} height={30} color="rgba(0,0,0,0.8)" side="bottom"></Trapeze>
        </div>
      </div>
    </div>
  );
};

export default MiddleBox;
