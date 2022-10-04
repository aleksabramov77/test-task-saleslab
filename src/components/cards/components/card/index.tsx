import { FC } from "react";

import styles from "./index.module.css";

export interface CardProps {
  color: "purple" | "green" | "red" | "blue";
  icon: any;
  title: string;
  count: number;
  amount?: number;
}

const COLOR_MAP: Record<CardProps["color"], string> = {
  purple: "#C37ADD",
  green: "#63D422",
  red: "#F56C6C",
  blue: "#2BBEF8",
};

export const Card: FC<CardProps> = ({ color, icon, title, count, amount }) => {
  const getNumberWithSpaces = (number: number): string =>
    number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");

  return (
    <div className={styles.container}>
      <img className={styles.icon} src={icon} alt={title} />
      <div className={styles.text}>
        <div className={styles.title} style={{ color: COLOR_MAP[color] }}>
          {title}
        </div>
        <span className={styles.count}>{count}</span>
        {amount && (
          <>
            <span className={styles.count}> | </span>
            <span className={styles.amount}>{`${getNumberWithSpaces(
              amount
            )} €`}</span>
          </>
        )}
      </div>
    </div>
  );
};
