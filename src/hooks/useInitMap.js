import { useEffect, useState } from "react";
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

const useInitMap = (eventType) => {
  const [map, setMap] = useState(null);
  const lat = 27.563963;
  const lng = -27.198324;
  const zoom = 2;

  useEffect(() => {
    setMap(
      new mapboxgl.Map({
        container: "map-container",
        style: "mapbox://styles/mapbox/streets-v11",
        center: [lng, lat],
        zoom: zoom,
      })
    );
  }, [eventType]);

  return map;
};

export default useInitMap;
