import React, { Component, Fragment } from "react";
import Navbar from "../components/Navbar";

class HomePage extends Component {
  render() {
    const pageType = "Home";
    return (
      <Fragment>
        <Navbar pageType={pageType} />
        <section className="homeSection">
          <div className="center">
            <h2 className="center">This is the dashboard.</h2>
          </div>
        </section>
      </Fragment>
    );
  }
}

export default HomePage;
