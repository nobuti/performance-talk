import { compact, uniq, minBy, maxBy } from "lodash";

export const getCountries = (volcanos) => {
  const uniqueCountries = compact(uniq(volcanos.map((p) => p.Country)).sort());

  return uniqueCountries.map((country) => ({
    name: country,
    count: volcanos.filter((p) => p.Country === country).length,
  }));
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

export const filterVolcanos = ({
  volcanos = [],
  search = "",
  country = null,
}) => {
  let filteredVolcanos = [...volcanos];

  if (search) {
    filteredVolcanos = filteredVolcanos.filter((p) =>
      p.Name.toLowerCase().includes(search)
    );
  }

  if (country) {
    filteredVolcanos = filteredVolcanos.filter((p) => p.Country === country);
  }
  return filteredVolcanos;
};
