import React from "react";
import {
  MapContainer,
  CircleMarker,
  TileLayer,
  Tooltip,
  useMap,
} from "react-leaflet";
import { latLngBounds } from "leaflet";

function ChangeView({ center, bounds }) {
  const map = useMap();
  const [lng, lat] = center;
  map.setView({ lng, lat }, 12);

  let markerBounds = latLngBounds([]);
  bounds.forEach((marker) => {
    markerBounds.extend(marker);
  });
  map.fitBounds(markerBounds);
  return null;
}

const Component = ({ data }) => {
  if (data == null) {
    return null;
  }

  const centerLat = (data.minLat + data.maxLat) / 2;
  const distanceLat = data.maxLat - data.minLat;
  const bufferLat = distanceLat * 0.05;
  const centerLong = (data.minLon + data.maxLon) / 2;
  const distanceLon = data.maxLon - data.minLon;
  const bufferLon = distanceLon * 0.05;

  return (
    <MapContainer
      style={{ height: "100%", width: "100%" }}
      center={[centerLat, centerLong]}
      bounds={[
        [data.minLat - bufferLat, data.minLon - bufferLon],
        [data.maxLat + bufferLat, data.maxLon + bufferLon],
      ]}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <ChangeView
        center={[centerLat, centerLong]}
        bounds={data.volcanos.map((volcano) => [
          volcano.Latitude,
          volcano.Longitude,
        ])}
      />

      {data.volcanos.map((volcano, k) => {
        return (
          <CircleMarker
            key={k}
            center={[volcano.Latitude, volcano.Longitude]}
            radius={5}
            fillColor="red"
            fillOpacity={0.5}
            stroke={false}
          >
            <Tooltip direction="right" opacity={1}>
              <span>{volcano.Name}</span>
            </Tooltip>
          </CircleMarker>
        );
      })}
    </MapContainer>
  );
};

export default Component;
