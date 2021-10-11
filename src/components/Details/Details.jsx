import React from "react";

import styles from "./styles.module.css";

const capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1);

const TITLES = [
  "name",
  "elevation",
  "country",
  "type",
  "status",
  "year",
  "tsunami",
  "earthquake",
];

const Details = (volcano) => (
  <div className={styles.container}>
    <div className={styles.details}>
      {TITLES.map((t) => {
        return (
          <div className={styles.row} key={`detail-${t}`}>
            <div className={styles.key}>{capitalize(t)}</div>
            <div className={styles.content}>{volcano[t]}</div>
          </div>
        );
      })}
    </div>
  </div>
);

export default Details;
