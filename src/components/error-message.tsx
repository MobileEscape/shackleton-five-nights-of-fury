import { FunctionComponent } from "react";
import Trapeze from "./trapeze";

interface ErrorMessageProps {
  closeError: () => void;
  message: string;
}

const ErrorMessage: FunctionComponent<ErrorMessageProps> = ({ closeError, message }) => {
  return (
    <div onClick={closeError} className="absolute z-10 left-0 top-0 w-full h-full flex">
      <div className="m-auto">
        <Trapeze side="top" width={"100%"} height={15} color="white"></Trapeze>
        <div
          dangerouslySetInnerHTML={{ __html: message }}
          className="px-5 bg-white leading-tight font-lemon text-[#B154FF] text-center text-lg font-medium"
        ></div>
        <Trapeze side="bottom" width={"100%"} height={15} color="white"></Trapeze>
      </div>
    </div>
  );
};

export default ErrorMessage;
