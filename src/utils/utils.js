const createIconElement = (eventType) => {
  let address;

  switch (eventType) {
    case "Wildfires":
      address = "https://i.ibb.co/RNDPdJK/fire-icon.png";
      break;
    case "Storms":
      address = "https://i.ibb.co/PYDHb98/storm-icon.png";
      break;
    case "Earthquakes":
      address = "https://i.ibb.co/9wNKfMq/earthquake-icon.png";
      break;
    case "Volcanoes":
      address = "https://i.ibb.co/RSRWh7X/volcano-icon.png";
      break;
    case "Sea and lake ice":
      address = "https://i.ibb.co/4MmYwkw/ice-icon.png";
      break;
    case "Floods":
      address = "https://i.ibb.co/xjh5tkY/flood-icon.png";
      break;
    default:
      address = "https://i.ibb.co/RNDPdJK/fire-icon.png";
      break;
  }

  const el = document.createElement("div");
  el.className = "marker";
  el.style.height = `25px`;
  el.style.width = `20px`;
  el.style.backgroundImage = `url(${address})`;
  el.style.backgroundSize = "100%";
  return el;
};

const getCtgNumber = (eventType) => {
  let ctgNumber;

  switch (eventType) {
    case "Wildfires":
      ctgNumber = 8;
      break;
    case "Storms":
      ctgNumber = 10;
      break;
    case "Earthquakes":
      ctgNumber = 16;
      break;
    case "Volcanoes":
      ctgNumber = 12;
      break;
    case "Sea and lake ice":
      ctgNumber = 15;
      break;
    case "Floods":
      ctgNumber = 9;
      break;
    default:
      return 8;
  }

  return ctgNumber;
};

export { createIconElement, getCtgNumber };
