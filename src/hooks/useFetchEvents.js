import { useEffect, useState } from "react";
import axios from "axios";
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import { createIconElement, getCtgNumber } from "../utils/utils";

const useFetchEvents = (map, eventType) => {
  const [coords, setCoords] = useState(null);

  useEffect(() => {
    if (map) {
      const fetchEvents = async () => {
        const coordsFromApi = (
          await axios.get(
            process.env.REACT_APP_COORDS_API + `${getCtgNumber(eventType)}`)).data;

        coordsFromApi.forEach((coords) => {
          new mapboxgl.Marker(createIconElement(eventType))
            .setLngLat(coords)
            .addTo(map);
        });
        setCoords(coordsFromApi);
      };
      fetchEvents();
    }
  }, [map, eventType]);
};

export default useFetchEvents;
