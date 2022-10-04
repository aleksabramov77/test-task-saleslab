import { FC } from "react";
import { Card, CardProps } from "./components/card";

import styles from "./index.module.css";

interface CardsProps {
  cardsData: CardProps[];
}

export const Cards: FC<CardsProps> = ({ cardsData }) => {
  return (
    <div className={styles.container}>
      {cardsData.map((i) => (
        <Card
          key={i.title}
          color={i.color}
          icon={i.icon}
          title={i.title}
          count={i.count}
          amount={i.amount}
        />
      ))}
    </div>
  );
};
