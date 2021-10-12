import React from "react";
import styles from "./styles.module.css";

const noop = () => {};

const ListItem = ({ year, name, deaths, id, onClick = noop }) => (
  <div className={styles.item} onClick={() => onClick(id)}>
    <div className={styles.left}>{name}</div>
    <div className={styles.center}>
      {deaths > 0 ? (
        <img className={styles.icon} src="/skull.svg" alt="Deathly" />
      ) : null}
    </div>
    <div className={styles.right}>{year}</div>
  </div>
);

export default ListItem;
