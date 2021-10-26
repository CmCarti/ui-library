import ButtonProps from "../../models/ButtonProps";

export default interface LoadingButtonProps extends ButtonProps {
  loading?: boolean;
  success?: boolean;
}
