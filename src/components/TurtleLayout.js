import "../components/TurtleLayout.css"

function TurtleLayout() {
  return (
    <div>
      <svg className="turtle-layout-svg" viewBox="0 0 100 100">
        <path
          id="head"
          d="m 57,22 -7,-3 -7,3 -2,-12 9,-5 9,5 z" />
        <path
          d="m 50,85 20,-14 8,-19 -8,-24 -9,-4 -4,-2 -7,-3 -7,3 -4,2 -9,4 -8,24 8,19 z"
          id="body" />
        <path
          id="left-hand"
          d="M 39,24 34,17 H 17 l -12,8 -2,15 L 13,30 30,28 Z" />
        <path
          id="right-hand"
          d="m 61,24 5,-7 h 17 v 0 L 95,25 97,40 87,30 70,28 Z" />
        <path
          id="left-leg"
          d="m 30,71 -7,10 5,6 h 7 l 5,-9 z" />
        <path
          id="right-leg"
          d="m 70,71 7,10 -5,6 h -7 l -5,-9 z" />
      </svg>

    </div>

  );
}

export default TurtleLayout;