import React from "react";

import styles from "./styles.module.css";

const TITLES = [
  "Name",
  "Country",
  "Region",
  "Subregion",
  "Latitude",
  "Longitude",
  "class",
];

const Details = (volcano) => (
  <div className={styles.container}>
    <div className={styles.details}>
      {TITLES.map((t) => {
        return (
          <div className={styles.row} key={`detail-${t}`}>
            <div className={styles.key}>{t}</div>
            <div className={styles.content}>{volcano[t]}</div>
          </div>
        );
      })}
    </div>
  </div>
);

export default Details;
