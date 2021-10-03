import React from "react";

import ListItem from "./ListItem";

import styles from "./styles.module.css";

const List = ({ volcanos, selected, volcanoHandler }) => (
  <div className={styles.list}>
    <div className={styles.header}>
      <span>Name</span>
      <span>Country</span>
    </div>

    {volcanos.map((volcano) => (
      <ListItem
        key={volcano.id}
        selected={selected}
        onClick={volcanoHandler}
        {...volcano}
      />
    ))}
  </div>
);

export default List;
