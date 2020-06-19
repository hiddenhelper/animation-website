import React, { Component } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BookLogo from "../assets/Img/book.png";
import { Row, Col, Container } from "react-bootstrap";

class BookPage extends Component {
  render() {
    const pageType = "Book";
    return (
      <div className="Page">
        <Navbar pageType={pageType} />
        <section className="BookSection">
          <Row>
            <Col md={{ span: 4, offset: 2 }} sm={12} xs={12}>
              <img src={BookLogo} style={{ width: "100%", height: "100%" }} />
            </Col>
            <Col md={{ span: 4 }} sm={12} xs={12}>
              <div>
                <h3>INSPIRED INC.</h3>
                <h5>by LISA MacCALLUM, EMILY BREW, NICOLE HOWSON</h5>
                Most companies are only a tweet or YouTube upload from chaos.
                More People than ever are influencing the success of failure of
                your business, and traditional business leaders aren't the only
                ones in charge anymore. Meet the new C.E.Os: the Customers,
                Employees and Outsiders who can make or break your company
                faster than ever. Inspired INC. is an indispensable roadmap to
                getting them onside.
              </div>
            </Col>
          </Row>
        </section>
        <Footer pageType={pageType} />
      </div>
    );
  }
}

export default BookPage;
