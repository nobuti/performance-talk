import { useState, useEffect } from "react";

const useFetchVolcanos = (initialState) => {
  const [volcanos, setVolcanos] = useState(initialState);

  useEffect(() => {
    fetch("/significant-volcanic-eruption-database.json")
      .then((v) => v.json())
      .then((v) => {
        const volcanos = v.map((volcano) => {
          const { recordid, fields } = volcano;
          const {
            name,
            country,
            elevation,
            deaths,
            type,
            year,
            status,
            tsu,
            eq,
          } = fields;
          return {
            id: recordid,
            name,
            country,
            elevation,
            deaths: deaths || 0,
            type,
            year,
            status,
            tsunami: tsu != null ? 1 : 0,
            earthquake: eq != null ? 1 : 0,
          };
        });

        setVolcanos(volcanos);
      });
  }, []);

  return [volcanos, setVolcanos];
};

export default useFetchVolcanos;
