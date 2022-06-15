import react from "react";
import reactDom from "react-dom";

function Header(porps) {
  return (
    <header className="top">
      <h1>{porps.heading}</h1>
    </header>
  );
}

export default Header;