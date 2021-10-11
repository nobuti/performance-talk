import React from "react";
import { InputText, InputSelect } from "@jobandtalent/design-system";

import styles from "./styles.module.css";

const Component = ({ years, year, search, searchHandler, yearHandler }) => (
  <div className={styles.header}>
    <InputText
      className={styles.search}
      placeholder="Search"
      onChange={(e) => searchHandler(e.target.value)}
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
);

Component.displayName = "Header";

export default Component;
