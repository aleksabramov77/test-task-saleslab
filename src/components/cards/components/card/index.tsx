import { FC } from "react";

import styles from "./index.module.scss";
import cn from "classnames";

export interface CardProps {
  color: "purple" | "green" | "coral" | "blue";
  icon: any;
  title: string;
  count: number;
  amount?: number;
}

export const Card: FC<CardProps> = ({ color, icon, title, count, amount }) => {
  const getNumberWithSpaces = (number: number): string =>
    number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");

  return (
    <div className={styles.container}>
      <div className={cn(styles.box, styles[color])}>
        <img className={styles.icon} src={icon} alt={title} />
      </div>
      <div className={styles.text}>
        <div className={cn(styles.title, styles[color])}>{title}</div>
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
