import { FunctionComponent } from "react";

interface CornerProps extends React.SVGProps<SVGSVGElement> {}

const Corner: FunctionComponent<CornerProps> = (props) => {
  return (
    <svg viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M29 29L0 0H29V29Z" fill="currentColor" />
    </svg>
  );
};

export default Corner;
