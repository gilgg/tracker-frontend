import "./Map.scss";
import useInitMap from "../../hooks/useInitMap";
import useFetchEvents from "../../hooks/useFetchEvents";

const Map = ({ eventType }) => {
  const map = useInitMap(eventType);
  useFetchEvents(map, eventType);

  return <div id="map-container"></div>;
};

export default Map;
