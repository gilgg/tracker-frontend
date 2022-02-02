import "./Header.scss";

const Header = ({ eventType }) => {
  return (
    <div className="header">
      <h1>{eventType} Tracker</h1>
      <img className="tracker-logo" src="/favicon.png" alt="" />
    </div>
  );
};

export default Header;
