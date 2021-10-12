import React, { useMemo } from "react";

import Container from "components/Container";
import Header from "components/Header";
import List from "components/List/List";
import Details from "components/Details";
import Dashboard from "components/Dashboard";

import { useFetchVolcanos, useVolcanos } from "hooks";

import {
  getYears,
  filterVolcanos,
  getSelectedVolcano,
  getMetrics,
  // getMapData,
} from "utils/utils";

import styles from "./styles.module.css";

const getValue = (c) => (c != null ? c.value : null);

function App() {
  const [volcanos] = useFetchVolcanos([]);

  const { year, search, volcano, yearHandler, searchHandler, volcanoHandler } =
    useVolcanos();

  const years = useMemo(() => getYears(volcanos), [volcanos]);

  const filteredVolcanos = useMemo(
    () =>
      filterVolcanos({
        volcanos,
        year: getValue(year),
        search,
      }),
    [volcanos, search, year]
  );

  const metrics = useMemo(
    () => getMetrics(filteredVolcanos),
    [filteredVolcanos]
  );

  const mainKeys = useMemo(
    () => ["deaths", "tsunamis", "earthquakes", "countries"],
    []
  );
  const statusKeys = useMemo(() => Object.keys(metrics.status), [metrics]);
  const typesKeys = useMemo(() => Object.keys(metrics.types), [metrics]);

  return (
    <Container>
      <div className={styles.left}>
        <Dashboard metrics={metrics} keys={mainKeys} />
        <Dashboard metrics={metrics.types} keys={typesKeys} />
        <Dashboard metrics={metrics.status} keys={statusKeys} />
      </div>
      <div className={styles.center}>
        <div className={styles.content}>
          <Header
            years={years}
            year={year}
            search={search}
            searchHandler={searchHandler}
            yearHandler={yearHandler}
          />

          <div className={styles.volcanos}>
            <List volcanos={filteredVolcanos} volcanoHandler={volcanoHandler} />
          </div>
        </div>
      </div>

      <div className={styles.right}>
        {volcano && <Details {...getSelectedVolcano({ volcanos, volcano })} />}
      </div>
    </Container>
  );
}

export default App;
