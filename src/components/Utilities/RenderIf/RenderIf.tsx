import RenderIfProps from "./models/RenderIfProps";

const RenderIf: React.FC<RenderIfProps> = ({ render: condition, children }) => {
  if (condition) return <>{children}</>;
  return null;
};

export default RenderIf;
