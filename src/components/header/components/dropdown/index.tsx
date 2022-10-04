import { FC, useState } from "react";
import Arrow from "../../../../shares/icons/arrow.svg";

import styles from "./index.module.css";

const PIPELINES = ["All Pipelines", "Sales", "Marketing", "Partners"] as const;

type PipelineType = typeof PIPELINES[number];

export const Dropdown: FC = () => {
  const [opened, setOpened] = useState(false);
  const [pipeline, setPipeline] = useState<PipelineType>("All Pipelines");

  const handleItemClick = (variant: PipelineType) => () => {
    setPipeline(variant);
    setOpened(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.titleWrapper} onClick={() => setOpened((p) => !p)}>
        <span className={styles.title}>{pipeline}</span>
        <img
          src={Arrow}
          alt="arrow"
          className={opened ? styles.arrowUp : styles.arrowDown}
        />
      </div>
      {opened && (
        <div className={styles.tooltip}>
          {PIPELINES.filter((i) => i !== pipeline).map((i) => (
            <div className={styles.tooltipItem} onClick={handleItemClick(i)}>
              {i}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
