import { useState, useEffect } from "react";
import { sortBy } from "lodash";

const useFetchVolcanos = (initialState) => {
  const [volcanos, setVolcanos] = useState(initialState);

  useEffect(() => {
    fetch("/volcano.json")
      .then((v) => v.json())
      .then((v) => {
        const volcanos = v.features.map((volcano) => {
          const { properties } = volcano;
          const { VolcanoID, V_Name, ...rest } = properties;
          return {
            ...rest,
            id: VolcanoID,
            Name: V_Name,
          };
        });

        setVolcanos(sortBy(volcanos, (p) => p.Name));
      });
  }, []);

  return [volcanos, setVolcanos];
};

export default useFetchVolcanos;
