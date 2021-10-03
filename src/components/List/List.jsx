import React from "react";

import ListItem from "./ListItem";

import styles from "./styles.module.css";

const List = ({ volcanos, volcanoHandler }) => (
  <div className={styles.list}>
    <div className={styles.header}>
      <span>Name</span>
      <span>Country</span>
    </div>

    {volcanos.map((volcano) => (
      <ListItem key={volcano.id} onClick={volcanoHandler} {...volcano} />
    ))}
  </div>
);

export default List;
