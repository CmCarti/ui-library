import getSvgSize from "../../helpers/getSvgSize";
import LoadingButtonSvgProps from "../models/LoadingButtonSvgProps";

const Check: React.FC<
  LoadingButtonSvgProps & React.SVGAttributes<SVGElement>
> = ({ size = "md", ...rest }) => {
  const sizeClass = getSvgSize(size);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
      className={`text-base ${sizeClass}  stroke-current`}
      viewBox="0 0 24 24"
      fill="none"
      strokeLinecap="round"
      strokeWidth="4"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M5 12l5 5l10 -10" />
    </svg>
  );
};

export default Check;
