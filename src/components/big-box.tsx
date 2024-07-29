import { FunctionComponent, PropsWithChildren } from "react";
import Trapeze from "./trapeze";

interface BigBoxProps extends PropsWithChildren {}

const BigBox: FunctionComponent<BigBoxProps> = ({ children }) => {
  return (
    <div className="w-full h-full pt-[110px] pb-[20px]">
      <div className="h-full flex items-center">
        <div className="flex flex-col max-h-[700px] h-full w-full">
          <div className="flex justify-center">
            <Trapeze width={275} height={25} color="rgba(0,0,0,0.8)" side="top"></Trapeze>
          </div>
          <div className="bg-black/80 flex justify-center flex-grow px-6">{children}</div>
          <div className="flex justify-center">
            <Trapeze width={330} height={35} color="rgba(0,0,0,0.8)" side="bottom"></Trapeze>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BigBox;
