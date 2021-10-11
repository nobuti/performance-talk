import React from "react";

import Stat from "components/Dashboard/Stat";

import styles from "./styles.module.css";

const Component = ({ metrics, keys }) => {
  return (
    <div className={styles.container}>
      {keys.map((key) => (
        <Stat key={key} label={key} stat={metrics[key]} />
      ))}
    </div>
  );
};

export default Component;
