import React, { ButtonHTMLAttributes } from "react";
import Button from "../Button/Button";
import Check from "./components/Check";
import Spinner from "./components/Spinner";
import LoadingButtonProps from "./models/LoadingButtonProps";

const LoadingButton: React.FC<
  LoadingButtonProps & ButtonHTMLAttributes<HTMLButtonElement>
> = (props) => {
  const {
    disabled = false,
    onClick = undefined,
    children,
    loading,

    success,

    color,
    size,
    ...rest
  } = props;

  const handleClick = (e?: React.MouseEvent<Element, MouseEvent>) => {
    e?.stopPropagation();
    if (!disabled && !loading && onClick) onClick(e);
  };

  return (
    <Button
      {...rest}
      onClick={handleClick}
      size={size}
      color={color}
      disabled={disabled}
    >
      <span className="flex items-center gap-1.5">
        {loading && <Spinner size={size} />}
        {!loading && success && <Check size={size} />}
        {children}
      </span>
    </Button>
  );
};

export default LoadingButton;
