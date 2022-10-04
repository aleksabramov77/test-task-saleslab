import { FC, useState } from "react";
import cn from "classnames";

import styles from "./index.module.css";

const PERIODS = ["Month", "Week", "Yesterday", "Today"] as const;

type PeriodType = typeof PERIODS[number];

export const PeriodSwitcher: FC = () => {
  const [period, setPeriod] = useState<PeriodType>("Month");
  return (
    <div className={styles.container}>
      {PERIODS.map((i) => (
        <div
          key={i}
          onClick={() => setPeriod(i)}
          className={cn(styles.item, i === period && styles.item__active)}
        >
          {i}
        </div>
      ))}
    </div>
  );
};
