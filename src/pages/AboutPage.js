import React, { Component } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

class AboutPage extends Component {
  render() {
    const pageType = "About";
    return (
      <div className="Page">
        <Navbar pageType={pageType} />
        <section className="AboutSection">
          <div> [Video Embeded Here]</div>
        </section>
        <Footer pageType={pageType} />
      </div>
    );
  }
}

export default AboutPage;
