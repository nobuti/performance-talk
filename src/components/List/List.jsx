import React from "react";

import ListItem from "./ListItem";

import styles from "./styles.module.css";

const List = ({ volcanos, volcanoHandler }) => (
  <div className={styles.list}>
    <div className={styles.header}>
      <div className={styles.left}>Name</div>
      <div className={styles.center}>Deaths</div>
      <div className={styles.right}>Year</div>
    </div>

    {volcanos.map((volcano) => (
      <ListItem key={volcano.id} onClick={volcanoHandler} {...volcano} />
    ))}
  </div>
);

export default List;
