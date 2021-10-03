import React from "react";
import cx from "classnames";
import styles from "./styles.module.css";

const noop = () => {};
const ListItem = ({ selected, Country, Name, id, onClick = noop }) => (
  <div
    className={cx(styles.item, { [styles.active]: selected === id })}
    onClick={() => onClick(selected === id ? null : id)}
  >
    <div>{Name}</div>
    <div>{Country}</div>
  </div>
);

export default ListItem;
