import { useState } from "react";
import Map from "./components/Map/Map";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

const App = () => {
  const [eventType, setEventType] = useState("Wildfires");

  return (
    <div className="app">
      <Header eventType={eventType} />
      <Map eventType={eventType} />
      <Footer setEventType={setEventType} />
    </div>
  );
};

export default App;
