import { FC } from "react";
import styles from "./typographies.module.css";

type TypographyProps = {
  children: React.ReactNode;
  style?: React.CSSProperties;
};

export const H1: FC<TypographyProps> = ({ children, style }) => {
  return (
    <h1 className={styles["header1"]} style={style}>
      {children}
    </h1>
  );
};

export const YellowParagraph: FC<TypographyProps> = ({ children, style }) => {
  return (
    <p className={styles["yellowParagraph"]} style={style}>
      {children}
    </p>
  );
};
