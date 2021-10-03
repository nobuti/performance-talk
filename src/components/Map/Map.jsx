import React from "react";
import { Map, CircleMarker, TileLayer, Tooltip } from "react-leaflet";

const Component = ({ data }) => {
  const centerLat = (data.minLat + data.maxLat) / 2;
  const distanceLat = data.maxLat - data.minLat;
  const bufferLat = distanceLat * 0.05;
  const centerLong = (data.minLon + data.maxLon) / 2;
  const distanceLon = data.maxLon - data.minLon;
  const bufferLon = distanceLon * 0.05;

  return (
    <Map
      style={{ height: "480px", width: "100%" }}
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
    </Map>
  );
};

export default Component;
