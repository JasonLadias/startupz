import React, { FC } from "react";
import styles from "./button.module.css";
import classnames from "classnames";

type ButtonProps = {
  children: React.ReactNode;
  action?: () => void;
  variant?: "contained" | "outlined" | "text" | "submit";
  disabled?: boolean;
};

const Button: FC<ButtonProps> = ({
  children,
  action = () => {},
  variant = "contained",
  disabled = false,
}) => {
  let buttonStyles;

  switch (variant) {
    case "contained":
      buttonStyles = classnames(styles.buttonBase, styles.textContained);
      break;
    case "submit":
      buttonStyles = classnames(styles.buttonBase, styles.submitContained);
      break;
    case "outlined":
      buttonStyles = classnames(styles.buttonBase, styles.textOutlined);
      break;
    case "text":
      buttonStyles = classnames(styles.buttonBase, styles.textPlain);
      break;
    default:
      break;
  }

  return (
    <button
      onClick={action}
      className={buttonStyles}
      type={variant === "submit" ? "submit" : "button"}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
