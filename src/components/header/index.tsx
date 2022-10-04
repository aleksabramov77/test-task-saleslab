import { FC } from "react";
import { Dropdown } from "./components/dropdown";
import { PeriodSwitcher } from "./components/period-switcher";

import styles from "./index.module.css";

export const Header: FC = () => {
  return (
    <div className={styles.container}>
      <Dropdown />
      <PeriodSwitcher />
    </div>
  );
};
