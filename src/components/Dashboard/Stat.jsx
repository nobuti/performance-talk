import React from "react";

import styles from "./styles.module.css";

const Component = ({ stat, label }) => (
  <div className={styles.stat}>
    <div className={styles.statName}>{label}</div>
    <div className={styles.statNumber}>{stat}</div>
  </div>
);
Component.displayName = "Stat";

export default Component;
