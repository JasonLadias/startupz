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

export const H2: FC<TypographyProps> = ({ children, style }) => {
  return (
    <h2 className={styles["header2"]} style={style}>
      {children}
    </h2>
  );
};

export const YellowH3: FC<TypographyProps> = ({ children, style }) => {
  return (
    <h3 className={styles["yellowHeader3"]} style={style}>
      {children}
    </h3>
  );
};

export const YellowParagraph: FC<TypographyProps> = ({ children, style }) => {
  return (
    <p className={styles["yellowParagraph"]} style={style}>
      {children}
    </p>
  );
};

export const YellowNumberSpan: FC<TypographyProps> = ({ children, style }) => {
  return (
    <div className={styles["yellowNumberSpan"]} style={style}>
      {children}
    </div>
  );
};

export const BlackParagraph: FC<TypographyProps> = ({ children, style }) => {
  return (
    <p className={styles["blackParagraph"]} style={style}>
      {children}
    </p>
  );
};
