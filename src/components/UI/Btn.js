import "./Btn.scss";

const Btn = ({ eventType, setEventType }) => {
  const onClickHandler = (e, eventType) => {
    e.preventDefault();
    setEventType(eventType);
  };

  return (
    <button
      onClick={(e) => onClickHandler(e, eventType)}
      className={`btn btn-${eventType.toLowerCase().replaceAll(" ", "-")}`}
    >
      {eventType}
    </button>
  );
};

export default Btn;
