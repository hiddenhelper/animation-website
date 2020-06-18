import React from "react";
import { Link } from "react-router-dom";

const Navbar = (pageType) => {
  var navType = "navHome";
  if ((pageType = "About")) navType = "navAbout";
  else if ((pageType = "Book")) navType = "navBook";
  else if ((pageType = "Contact")) navType = "navContact";

  return (
    <nav>
      <section>
        <Link to="/About">ABOUT</Link>
        <Link to="/Book">THE BOOK</Link>
        <Link to="/Contact">CONTACT</Link>
      </section>
    </nav>
  );
};
export default Navbar;
