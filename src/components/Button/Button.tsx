import React, { FC } from "react";
import styles from "./button.module.css";
import classnames from "classnames";

type ButtonProps = {
  children: React.ReactNode;
  action?: () => void;
  variant?: "contained" | "outlined" | "text";
};

const Button: FC<ButtonProps> = ({
  children,
  action = () => {},
  variant = "contained",
}) => {
  let buttonStyles;

  switch (variant) {
    case "contained":
      buttonStyles = classnames(styles.buttonBase, styles.textContained);
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
    <button onClick={action} className={buttonStyles}>
      {children}
    </button>
  );
};

export default Button;
