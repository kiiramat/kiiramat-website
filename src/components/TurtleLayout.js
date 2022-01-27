import "../components/TurtleLayout.css";

function TurtleLayout({ title, text }) {
  return (
    <div className="turtle-layout">
      <div className="turtle-layout-top">
        <div className="turtle-part left-flipper"></div>
        <div className="turtle-part turtle-head"></div>
        <div className="turtle-part right-flipper"></div>
      </div>
      <div className="turtle-layout-mid">
        <div className="turtle-part body">
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
      </div>
      <div className="turtle-layout-bot">
        <div className="turtle-part left-leg"></div>
        <div className="turtle-part right-leg"></div>
      </div>
    </div>

  );
}

export default TurtleLayout;