import React, { memo } from "react";
import { InputText, InputSelect } from "@jobandtalent/design-system";

import styles from "./styles.module.css";

const Component = memo(
  ({ years, year, search, searchHandler, yearHandler }) => (
    <div className={styles.header}>
      <InputText
        className={styles.search}
        placeholder="Search"
        onChange={searchHandler}
        value={search}
      />
      <img alt="Volcano!" src="/volcano.svg" className={styles.logo} />
      <InputSelect
        className={styles.select}
        placeholder="Year"
        onChange={yearHandler}
        value={year}
        options={years.map((c) => ({
          label: c.year,
          value: c.year,
        }))}
        isClearable
      />
    </div>
  )
);

Component.displayName = "Header";

export default Component;
