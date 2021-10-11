import React from "react";

import Container from "components/Container";
import Header from "components/Header";
import List from "components/List/List";
import Details from "components/Details";
import Map from "components/Map";

import { useFetchVolcanos, useVolcanos } from "hooks";

import {
  getCountries,
  filterVolcanos,
  getSelectedVolcano,
  getMapData,
} from "utils/utils";

import styles from "./styles.module.css";

const getValue = (c) => (c != null ? c.value : null);

function App() {
  const [volcanos] = useFetchVolcanos([]);

  const {
    country,
    search,
    volcano,
    countryHandler,
    searchHandler,
    volcanoHandler,
  } = useVolcanos();

  const countries = getCountries(volcanos);

  const filteredVolcanos = filterVolcanos({
    volcanos,
    country: getValue(country),
    search,
  });

  const data = getMapData(filteredVolcanos);

  return (
    <Container>
      <div className={styles.column}>
        <Map data={data} />
      </div>
      <div className={styles.column}>
        <div className={styles.content}>
          <Header
            countries={countries}
            country={country}
            search={search}
            searchHandler={searchHandler}
            countryHandler={countryHandler}
          />

          <div className={styles.volcanos}>
            <List volcanos={filteredVolcanos} volcanoHandler={volcanoHandler} />

            {volcano && (
              <Details {...getSelectedVolcano({ volcanos, volcano })} />
            )}
          </div>
        </div>
      </div>
    </Container>
  );
}

export default App;
