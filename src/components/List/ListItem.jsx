import React from "react";
import styles from "./styles.module.css";

const noop = () => {};

const ListItem = ({ Country, Name, id, onClick = noop }) => (
  <div className={styles.item} onClick={() => onClick(id)}>
    <div>{Name}</div>
    <div>{Country}</div>
  </div>
);

export default ListItem;
