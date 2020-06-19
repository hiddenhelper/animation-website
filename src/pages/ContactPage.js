import React, { Component } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

class ContactPage extends Component {
  render() {
    const pageType = "Contact";
    return (
      <div className="Page">
        <Navbar pageType={pageType} />
        <section className="ContactSection">
          <div className="center">
            <h2 className="center">This is the dashboard.</h2>
          </div>
        </section>
        <Footer pageType={pageType} />
      </div>
    );
  }
}

export default ContactPage;
