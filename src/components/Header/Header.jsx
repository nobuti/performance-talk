import React from "react";
import { InputText, InputSelect } from "@jobandtalent/design-system";

import styles from "./styles.module.css";

const Component = ({
  countries,
  country,
  search,
  searchHandler,
  countryHandler,
}) => (
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
      placeholder="Country"
      onChange={countryHandler}
      value={country}
      options={countries.map((c) => ({
        label: c.name,
        value: c.name,
      }))}
      isClearable
    />
  </div>
);

Component.displayName = "Header";

export default Component;
