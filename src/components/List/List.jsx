import React, { memo } from "react";
import { FixedSizeList as VirtualisedList } from "react-window";

import ListItem from "./ListItem";

import styles from "./styles.module.css";

const List = memo(({ volcanos, volcanoHandler }) => {
  const height = Math.min(
    document.body.clientHeight - 178,
    volcanos.length * 60
  );

  const Row = (props) => (
    <ListItem volcanoHandler={volcanoHandler} {...props} />
  );

  return (
    <div className={styles.list}>
      <div className={styles.header}>
        <div className={styles.left}>Name</div>
        <div className={styles.center}>Deaths</div>
        <div className={styles.right}>Year</div>
      </div>

      <VirtualisedList
        height={height}
        itemData={volcanos}
        itemCount={volcanos.length}
        itemSize={60}
        width="100%"
      >
        {Row}
      </VirtualisedList>
    </div>
  );
});

export default List;
