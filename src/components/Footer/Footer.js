import "./Footer.scss";
import Btn from "../UI/Btn";

const Footer = ({ setEventType }) => {
  return (
    <div className="footer">
      <Btn eventType="Wildfires" setEventType={setEventType} />
      <Btn eventType="Storms" setEventType={setEventType} />
      <Btn eventType="Earthquakes" setEventType={setEventType} />
      <Btn eventType="Volcanoes" setEventType={setEventType} />
      <Btn eventType="Sea and lake ice" setEventType={setEventType} />
      <Btn eventType="Floods" setEventType={setEventType} />
    </div>
  );
};

export default Footer;
