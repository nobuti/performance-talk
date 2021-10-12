import React from "react";
import styles from "./styles.module.css";

const noop = () => {};

const ListItem = ({ index, style, data, volcanoHandler }) => {
  const { year, name, deaths, id } = data[index];
  const onClick = volcanoHandler || noop;

  return (
    <div style={style} className={styles.item} onClick={() => onClick(id)}>
      <div className={styles.left}>{name}</div>
      <div className={styles.center}>
        {deaths > 0 ? (
          <img className={styles.icon} src="/skull.png" alt="Deathly" />
        ) : null}
      </div>
      <div className={styles.right}>{year}</div>
    </div>
  );
};

export default ListItem;
