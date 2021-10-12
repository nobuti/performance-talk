import { compact, uniq, minBy, maxBy } from "lodash";

export const getYears = (volcanos) => {
  const uniqueYears = compact(uniq(volcanos.map((p) => p.year)).sort());

  return uniqueYears
    .map((year) => ({
      year,
      count: volcanos.filter((p) => p.year === year).length,
    }))
    .sort((a, b) => b.year - a.year);
};

export const getMetrics = (volcanos) => {
  const uniqueCountries = compact(uniq(volcanos.map((p) => p.country)));
  const result = volcanos.reduce(
    (memo, v) => {
      const { type, status } = v;
      if (memo.status[status] == null) {
        memo.status[status] = 1;
      } else {
        memo.status[status] = memo.status[status] + 1;
      }

      if (memo.types[type] == null) {
        memo.types[type] = 1;
      } else {
        memo.types[type] = memo.types[type] + 1;
      }

      return {
        ...memo,
        deaths: memo.deaths + v.deaths,
        tsunamis: memo.tsunamis + v.tsunami,
        earthquakes: memo.earthquakes + v.earthquake,
      };
    },
    {
      deaths: 0,
      tsunamis: 0,
      earthquakes: 0,
      types: {},
      status: {},
    }
  );

  return {
    ...result,
    countries: uniqueCountries.length,
  };
};

export const getSelectedVolcano = ({ volcano, volcanos }) =>
  volcanos.find((v) => v.id === volcano);

export const getMapData = (volcanos) => {
  if (volcanos.length === 0) {
    return null;
  }

  const minLat = minBy(volcanos, (v) => v.Latitude).Latitude;
  const maxLat = maxBy(volcanos, (v) => v.Latitude).Latitude;
  const minLon = minBy(volcanos, (v) => v.Longitude).Longitude;
  const maxLon = minBy(volcanos, (v) => v.Longitude).Longitude;

  return {
    volcanos,
    minLat,
    maxLat,
    minLon,
    maxLon,
  };
};

export const filterVolcanos = ({ volcanos = [], search = "", year = null }) => {
  let filteredVolcanos = [...volcanos];

  if (year) {
    filteredVolcanos = filteredVolcanos.filter((p) => p.year === year);
  }

  if (search) {
    filteredVolcanos = filteredVolcanos
      .filter((p) => p.name.toLowerCase().includes(search))
      .slice(0, 20);
  }

  return filteredVolcanos;
};
