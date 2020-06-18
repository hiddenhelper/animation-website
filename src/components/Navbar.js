import React from "react";
import { Link } from "react-router-dom";

const Navbar = (pageType) => {
  var navType = "navHome";
  if ((pageType = "About")) {
    navType = "navAbout";
    return (
      <nav className={navType}>
        <section>
          <Link to="/About">ABOUT</Link>
          <Link to="/Book">THE BOOK</Link>
          <Link to="/Contact">CONTACT</Link>
        </section>
      </nav>
    );
  } else if ((pageType = "Book")) {
    navType = "navBook";
    return (
      <nav className={navType}>
        <section>
          <Link to="/About">ABOUT</Link>
          <Link to="/Book">THE BOOK</Link>
          <Link to="/Contact">CONTACT</Link>
        </section>
      </nav>
    );
  } else if ((pageType = "Contact")) {
    navType = "navContact";
    return (
      <nav className={navType}>
        <section>
          <Link to="/About">ABOUT</Link>
          <Link to="/Book">THE BOOK</Link>
          <Link to="/Contact">CONTACT</Link>
        </section>
      </nav>
    );
  }

  return (
    <nav className={navType}>
      <section>
        <Link to="/About">ABOUT</Link>
        <Link to="/Book">THE BOOK</Link>
        <Link to="/Contact">CONTACT</Link>
      </section>
    </nav>
  );
};
export default Navbar;
